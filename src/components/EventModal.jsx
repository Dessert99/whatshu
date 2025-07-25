import Modal from 'react-modal';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { createEventApi } from '../apis/eventApi';

Modal.setAppElement('#root');
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--mainBg400);
  border-radius: 12px;
`;
const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input {
    padding: 0.5rem;
    border-radius: 6px;
    border: solid;
    border-color: var(--grey);
    font-size: 1rem;
    background-color: var(--mainBg400);
    color: var(--white);
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &.cancel {
      background-color: var(--mainBg500);
      color: var(--white);
    }

    &.submit {
      background-color: var(--subBg200);
      color: var(--black);
    }
  }
`;

const EventModal = ({ isOpen, onClose, getEvents, groupId }) => {
  const [info, setInfo] = useState({
    'name': '',
    'startAt': '',
    'endAt': '',
    'description': '',
    'groupId': Number(groupId),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEvent(info);
    getEvents();
    onClose();
  };

  const handleAddEvent = async (info) => {
    const res = await createEventApi(info);
    if (res.data.isSuccess) {
      alert('새로운 이벤트 생성되었습니다.');
    } else alert('이벤트 생성에 실패하였습니다.');
  };

  useEffect(() => {
    if (!isOpen) {
      setInfo({ 'name': '', 'startAt': '', 'endAt': '', 'description': '', groupId: groupId });
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          width: '60%',
          height: '60%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent',
          border: 'none',
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}>
      <form onSubmit={handleSubmit}>
        <Container>
          <Wrapper>
            <Title>새 이벤트</Title>
            <InputBox>
              이벤트 이름
              <input
                type="text"
                value={info.name}
                onChange={(e) => {
                  setInfo({ ...info, name: e.target.value });
                }}
              />
            </InputBox>
            <InputBox>
              이벤트 시작 시간
              <input
                type="text"
                value={info.startAt}
                onChange={(e) => {
                  setInfo({ ...info, startAt: e.target.value });
                }}
                placeholder="YYYY-MM-DDT00:00"
              />
            </InputBox>
            <InputBox>
              이벤트 종료 시간
              <input
                type="text"
                value={info.endAt}
                onChange={(e) => {
                  setInfo({ ...info, endAt: e.target.value });
                }}
                placeholder="YYYY-MM-DDT00:00"
              />
            </InputBox>
            <InputBox>
              이벤트 설명
              <input
                type="text"
                value={info.description}
                onChange={(e) => {
                  setInfo({ ...info, description: e.target.value });
                }}
              />
            </InputBox>
            <ButtonBox>
              <button type="button" className="cancel" onClick={onClose}>
                취소
              </button>
              <button type="submit" className="submit">
                생성
              </button>
            </ButtonBox>
          </Wrapper>
        </Container>
      </form>
    </Modal>
  );
};

export default EventModal;
