import React from 'react';
import qrcode from 'qrcode';


const QRCodeComponent = ({ value, size, slug }) => {
    const initialSize = 550;
    const handleDownload = async (e) => {
        e.stopPropagation();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        await qrcode.toCanvas(canvas, value, { width: initialSize });

       
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);

          
            const a = document.createElement('a');
            a.href = url;
            a.download = `${slug}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(url);
        });
    };
    return (
        <div onClick={handleDownload} style={{ cursor: 'pointer' }}>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`} alt="QR Code" />
        </div>
    );
};

export default QRCodeComponent;