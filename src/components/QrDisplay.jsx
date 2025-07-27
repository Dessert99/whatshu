import { QRCodeSVG } from 'qrcode.react';

const QrDisplay = ({ qrToken }) => {
  if (!qrToken) return null;

  return <QRCodeSVG value={qrToken} size="13rem" bgColor="var(--white)" fgColor="var(--black)" level="M" />;
};

export default QrDisplay;
