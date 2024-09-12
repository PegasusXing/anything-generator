import { useState } from "react";

function UUIDComponent() {
    const [uuid, setUUID] = useState('');
    const [version, setVersion] = useState('v4');
    const [format, setFormat] = useState('default');

    const generateUUID = () => {
        let uuid;
        switch (version) {
            case 'v1':
                uuid = generateUUIDv1();
                break;
            case 'v4':
                uuid = generateUUIDv4();
                break;
            case 'v5':
                uuid = generateUUIDv5();
                break;
            default:
                uuid = generateUUIDv4();
        }
        if (format === 'hyphenated') {
            uuid = uuid.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
        }
        setUUID(uuid);
    };

    const generateUUIDv1 = () => {
        // TODO: implementation of UUID v1
    };

    const generateUUIDv4 = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    };

    const generateUUIDv5 = () => {
        // TODO: implementation of UUID v5

    };

    const copyUUID = () => {
        navigator.clipboard.writeText(uuid);
    };

    return (
        <div>
            <div className={"uuid-container"}>
                <h2 className={"uuid-container_title"}>UUID Generator</h2>
                <label>
                    Version:
                    <select value={version} onChange={(e) => setVersion(e.target.value)}>
                        <option value="v1">v1 (timestamp-based)</option>
                        <option value="v4">v4 (random)</option>
                        <option value="v5">v5 (SHA-1-based)</option>
                    </select>
                </label>
                <br/>
                <label>
                    Format:
                    <select value={format} onChange={(e) => setFormat(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="hyphenated">Hyphenated</option>
                    </select>
                </label>
                <br/>
                <button onClick={generateUUID}>Generate UUID</button>
                <br/>
                <button onClick={copyUUID}>Copy UUID</button>
                <h2>{uuid}</h2>
            </div>
        </div>
    )
}

export default UUIDComponent;