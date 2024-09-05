
> [!WARNING]
> This repository is a work in progress! Don't fork or clone until the repo is marked as active.

<!--suppress HtmlDeprecatedAttribute -->
<div class="project-badges" align=center>

![Sample screenshot](src/assets/qr.svg)

# QR Code Generator
<br>

[![View site - GH Pages](https://img.shields.io/badge/View_site-Netlify-2ea44f?style=flat)](https://pegasusxing.github.io/react-vite-qrcode/)
[![PegasusXing - react-vite-qrcode](https://img.shields.io/static/v1?label=PegasusXing&message=react-vite-qrcode&color=blue&logo=github)](https://github.com/PegasusXing/react-vite-qrcode "Go to GitHub repo")
[![stars - react-vite-qrcode](https://img.shields.io/github/stars/PegasusXing/react-vite-qrcode?style=social)](https://github.com/PegasusXing/react-vite-qrcode)
[![forks - react-vite-qrcode](https://img.shields.io/github/forks/PegasusXing/react-vite-qrcode?style=social)](https://github.com/PegasusXing/react-vite-qrcode)



![Static Badge](https://img.shields.io/badge/status-active-AAFF00)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.version&style=flat&label=version&color=06B6D4)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.vite&style=flat&logo=vite&label=vite&color=646CFF)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.dependencies.react&style=flat&logo=react&label=react&color=61DAFB)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.typescript&style=flat&logo=typescript&label=typescript&color=3178C6)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.devDependencies.eslint&style=flat&logo=eslint&label=eslint&color=4B32C3)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FPegasusXing%2Freact-vite-qrcode%2Fmain%2Fpackage.json&query=%24.dependencies%5B%22qrcode.react%22%5D&style=flat&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI%2BPGc%2BPHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8%2BPC9nPjxnPjxnPjxwYXRoIGQ9Ik0zLDExaDhWM0gzVjExeiBNNSw1aDR2NEg1VjV6Ii8%2BPHBhdGggZD0iTTMsMjFoOHYtOEgzVjIxeiBNNSwxNWg0djRINVYxNXoiLz48cGF0aCBkPSJNMTMsM3Y4aDhWM0gxM3ogTTE5LDloLTRWNWg0Vjl6Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTkiIHk9IjE5Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTMiIHk9IjEzIi8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTUiIHk9IjE1Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTMiIHk9IjE3Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTUiIHk9IjE5Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTciIHk9IjE3Ii8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTciIHk9IjEzIi8%2BPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTkiIHk9IjE1Ii8%2BPC9nPjwvZz48L3N2Zz4%3D&logoColor=ffffff&label=qrcode%20react)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

</div>

## Overview
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
You should be good to go:
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
2. Create your feature branch ``` git checkout -b feature/FeatureName ```
3. Commit your changes ``` git commit -m 'Added some FeatureName that does some FeatureFunction' ```
4. Push to the branch ``` git push origin feature/FeatureName ```
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/PegasusXing/react-vite-qrcode/blob/main/LICENSE.md) file for details.

## Acknowledgments
* shields.io
* simple icons.
* etc.