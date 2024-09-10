import './App.css'
import {useState} from "react";
import QRCodeComponent from "./components/QRCodeComponent.tsx";
import PasswordComponent from "./components/PasswordComponent.tsx";
import InformationComponent from "./components/InformationComponent.tsx";

function App() {
    const [selectedGenerator, setSelectedGenerator] = useState('select'); // Default to QR code generator

    const handleGeneratorChange = (event) => {
        setSelectedGenerator(event.target.value);
    };

  return (
      <>
          <h1 className={"website-title"}>The Anything Generator</h1>
          {/* Dropdown for selecting the generator */}
          <select className={"generator-selector"} onChange={handleGeneratorChange} value={selectedGenerator}>
              <option value="select">Select a generator</option> // Default selection
              <option value="qrcode">QR Code</option>
              <option value="password">Password</option>
          </select>

          {/* Conditionally render the selected generator */}
          <div className="generator-container">
              {selectedGenerator === 'select'   && <InformationComponent />}
              {selectedGenerator === 'qrcode'   && <QRCodeComponent />}
              {selectedGenerator === 'password' && <PasswordComponent />}
          </div>
      </>
  )
}

export default App
