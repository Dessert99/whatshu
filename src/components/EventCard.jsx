import styled from 'styled-components';
import { createQRToken } from '../apis/api/qrApi';
import QrDisplay from './QrDisplay';
import { useState, useRef, useEffect, useContext } from 'react';
import QrScanner from 'qr-scanner';
import { LoginContext } from '../contexts/LoginContext';

const Container = styled.article`
  border: solid var(--grey);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
const EventInfoWrapper = styled.div``;

const QRWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QrProgressBar = styled.div`
  height: 8px;
  width: 13rem;
  background-color: var(--mainBg300);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: var(--subBg200);
    width: 100%;
    animation: shrinkBar ${({ $duration }) => $duration}s linear forwards;
  }

  @keyframes shrinkBar {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

const Title = styled.header`
  margin-bottom: 2rem;
`;
const Name = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
`;
const Description = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;
const TimeBox = styled.div`
  margin-bottom: 2rem;
`;
const Start = styled.p`
  font-size: 1rem;
  margin: 0px;
`;
const End = styled.p`
  font-size: 1rem;
  margin: 0px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: first baseline;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  width: 10rem;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;

  color: var(--white);
  font-size: 1rem;

  border-radius: 10px;
  border: 1px solid var(--grey);

  &:hover {
    background-color: var(--mainBg100);
  }
`;

// 카메라 뷰
const CameraView = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EventCard = (props) => {
  const [qrToken, setQrToken] = useState(null);
  const [qrExpiresIn, setQrExpiresIn] = useState(null);
  const { userInfo } = useContext(LoginContext);

  const handleCreateQR = async () => {
    try {
      const res = await createQRToken(props.eventId);
      setQrToken(res.data.token);
      setQrExpiresIn(res.data.expiresIn);
      //30초 후 삭제
      setTimeout(() => {
        setQrToken(null);
      }, 30000);
    } catch (e) {
      console.error(e);
    }
  };

  // qr스캔
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    return () => {
      qrScannerRef.current?.destroy();
      qrScannerRef.current = null;
    };
  }, []);
  const handleResult = (result) => {
    console.log('QR 인식 결과:', result);
    alert('출석되었습니다.');
    qrScannerRef.current?.stop(); // 인식되면 정지
    // TODO: 출석 처리 로직
  };

  const handleScan = () => {
    const videoElem = videoRef.current;
    if (!videoElem) return;

    // 이미 생성된 경우 재사용
    if (!qrScannerRef.current) {
      qrScannerRef.current = new QrScanner(videoElem, handleResult, {
        preferredCamera: 'environment',
        maxScansPerSecond: 5,
        highlightScanRegion: true,
        returnDetailedScanResult: true,
      });
    }
    qrScannerRef.current.start();
    setTimeout(() => {
      qrScannerRef.current?.stop();
      console.log('자동으로 카메라를 종료했습니다.');
    }, 10000); // 10초
  };

  return (
    <Container>
      <EventInfoWrapper>
        <Title>
          <Name>{props.name}</Name>
          <Description>{props.description}</Description>
        </Title>
        <TimeBox>
          <Start>{props.startAt}</Start>
          <End>{props.endAt}</End>
        </TimeBox>
        <ButtonBox>
          {userInfo.role === 'ROLE_ADMIN' ? (
            <Button onClick={handleCreateQR}>QR생성하기</Button>
          ) : (
            <Button onClick={handleScan}>출석체크하기</Button>
          )}
        </ButtonBox>
      </EventInfoWrapper>
      <QRWrapper>
        {userInfo.role === 'ROLE_ADMIN' ? (
          <>
            <QrDisplay qrToken={qrToken} />
            {qrToken && <QrProgressBar $duration={qrExpiresIn} />}
          </>
        ) : (
          <CameraView ref={videoRef} />
        )}
      </QRWrapper>
    </Container>
  );
};

export default EventCard;
