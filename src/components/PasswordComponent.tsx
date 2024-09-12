import { useState } from "react";

function PasswordComponent() {
    const [password, setPassword] = useState('');
    const [includeDashes, setIncludeDashes] = useState(false);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
    const [length, setLength] = useState(12);

    const generatePassword = () => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        if (includeSpecialChars) {
            characters += '!@#$%^&*()_+-={}:<>?';
        }
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if (includeDashes) {
            generatedPassword = generatedPassword.match(/.{1,4}/g).join('-');
        }
        setPassword(generatedPassword);
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
    };

    return (
        <div>
            <div className={"password-container"}>
                <h2 className={"password-container_title"}>Password Generator</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={includeDashes}
                        onChange={() => setIncludeDashes(!includeDashes)}
                    />
                    Include dashes
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSpecialChars}
                        onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                    />
                    Include special characters
                </label>
                <br/>
                <label>
                    Length: <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                </label>
                <br/>
                <button onClick={generatePassword}>Generate Password</button>
                <br/>
                <button onClick={copyPassword}>Copy Password</button>
                <h2>{password}</h2>
            </div>
        </div>
    )
}

export default PasswordComponent;