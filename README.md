
# QR Code Generator
> [!WARNING]
> This repository is a work in progress! Don't fork or clone until the repo is marked as active.

<!--suppress HtmlDeprecatedAttribute -->
<div class="project-badges" align=center>
<br>

![Static Badge](https://img.shields.io/badge/status-inactive-FF000D)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.version&style=flat&label=version&color=06B6D4)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.vite&style=flat&logo=vite&label=vite&color=646CFF)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.dependencies.react&style=flat&logo=react&label=react&color=61DAFB)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.typescript&style=flat&logo=typescript&label=typescript&color=3178C6)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.eslint&style=flat&logo=eslint&label=eslint&color=4B32C3)

</div>

## Description
A simple QR Code Generator web application built with React and TypeScript. This project allows users to generate QR codes for various inputs like URLs, text, phone numbers, and more.

## Features
* ***Input Options:*** Generate QR codes for URLs, text, email addresses, and phone numbers.
* ***Customization:*** Control QR code size, margin, and color.
* ***Download:*** Download generated QR codes as PNG images.

## Dependencies
* ***React:*** Frontend library for building user interfaces.
* ***TypeScript:*** Adds static typing to JavaScript to improve developer productivity and code quality.
* ***qrcode.react:*** React component for generating QR codes.
* ***styled-components:*** CSS-in-JS library for styling React components.

## Installation
To run this project locally, clone the repository and navigate into the project directory, use npm or yarn to install the necessary dependencies and run the vite development server:
```
git clone https://github.com/PegasusXing/react-vite-qrcode.git
cd react-vite-qrcode

npm install
npm run dev

# or

yarn install
yarn run dev
```
You should get something like this:
```
  VITE v5.4.3  ready in 290 ms

  ➜  Local:   http://localhost:5173/ 
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Usage
1. Enter your data (URL, text, etc.) in the input field.
2. Select the type of QR code you want to generate.
3. Customize the QR code (optional).
4. Click on the "Generate QR Code" button.
5. Your QR code will be displayed. You can download it using the download button.

## Contributing
Contributions are welcome! Here's how you can contribute to this project:
1. Fork the project.
2. Create your feature branch ``` git checkout -b feature/AmazingFeature ```
3. Commit your changes ``` git commit -m 'Add some AmazingFeature' ```
4. Push to the branch ``` git push origin feature/AmazingFeature ```
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/PegasusXing/react-vite-qrcode/blob/main/LICENSE.md) file for details.

## Acknowledgments
* shields.io
* simple icons.
* etc.