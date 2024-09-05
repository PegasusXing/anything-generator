import * as React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCodeComponent() {
    const qrRef = React.useRef<HTMLDivElement | null>(null);
    const [url, setUrl] = React.useState('');

    const downloadQRCode = (evt: React.FormEvent) => {
        evt.preventDefault();
        const canvas = qrRef.current?.querySelector("canvas");
        if (canvas) {
            const image = canvas.toDataURL("image/png");
            const anchor = document.createElement("a");
            anchor.href = image;
            anchor.download = `qr-code.png`;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            setUrl('');
        } else {
            console.error("No canvas element found or qrRef is not initialized");
        }
    };

    const qr = (
        <QRCodeCanvas
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
            <div className={"qr-container_qr-code"} ref={qrRef}> {qr} </div>
        </div>
    );
}

export default QRCodeComponent;
