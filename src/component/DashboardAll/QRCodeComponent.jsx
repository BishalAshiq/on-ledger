import React from 'react';
import QRCode from 'react-qr-code';


const QRCodeComponent = ({ value, size }) => {
    return <QRCode value={value} size={size} />;
};

export default QRCodeComponent;