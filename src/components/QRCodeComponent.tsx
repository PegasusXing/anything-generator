import * as React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const icon = ('src/assets/codesandbox.svg');

function QRCodeComponent() {
    const [url, setUrl] = React.useState('');

    const downloadQRCode = (evt: React.FormEvent) => {
        evt.preventDefault();
        // TODO: Implement QR code download logic

        setUrl('');
    };

    // Update QRCodeSVG component based on state
    const qr = (
        <QRCodeSVG
            id={"qrID"}
            size={500}
            value={url}
            marginSize={1}
            bgColor={"white"}
            fgColor={"black"}
            level={"Q"}
        />
    );

    return (
        <div className={"qr-container"}>
            <h1 className={"qr-container_title"}> QR Code Generator </h1>
            <form className={"qr-container_form"} onSubmit={downloadQRCode}>
                <input
                    type={"text"}
                    value={url}
                    placeholder={"https://example.com"}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <br/>
                <button type={"submit"}>Download QR Code</button>
            </form>
            <br/>
            <div className={"qr-container_qr-code"}> {qr} </div>
        </div>
    );
}

export default QRCodeComponent;
