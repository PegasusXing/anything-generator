import './App.css';
import { useState } from 'react';
import QRCodeComponent from './components/QRCodeComponent.tsx';
import PasswordComponent from './components/PasswordComponent.tsx';
import InformationComponent from './components/InformationComponent.tsx';

const GeneratorType = {
    SELECT: 'select',
    QR_CODE: 'qrcode',
    PASSWORD: 'password',
};

function GeneratorSelector({ onChange, value }) {
    return (
        <select className="generator-selector" onChange={onChange} value={value}>
            <option value={GeneratorType.SELECT}>Select a generator</option>
            <option value={GeneratorType.QR_CODE}>QR Code</option>
            <option value={GeneratorType.PASSWORD}>Password</option>
        </select>
    );
}

function App() {
    const [selectedGenerator, setSelectedGenerator] = useState(GeneratorType.SELECT);

    const handleGeneratorChange = (event) => {
        setSelectedGenerator(event.target.value);
    };

    return (
        <>
            <h1 className="website-title">The Anything Generator</h1>
            <GeneratorSelector onChange={handleGeneratorChange} value={selectedGenerator} />
            <div className="generator-container">
                {(() => {
                    switch (selectedGenerator) {
                        case GeneratorType.SELECT:
                            return <InformationComponent />;
                        case GeneratorType.QR_CODE:
                            return <QRCodeComponent />;
                        case GeneratorType.PASSWORD:
                            return <PasswordComponent />;
                        default:
                            return null;
                    }
                })()}
            </div>
        </>
    );
}

export default App;