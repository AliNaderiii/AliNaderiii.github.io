# alinaderiii.github.io

Personal portfolio of **Ali Naderi** - AI Research Engineer and Data Scientist, specialising in physics-informed deep learning, signal processing, and computer vision.

[![Live Site](https://img.shields.io/badge/Live-alinaderiii.github.io-E85D4A?style=for-the-badge&logo=googlechrome&logoColor=white)](https://alinaderiii.github.io/)
[![Published](https://img.shields.io/badge/Published-Complexity%20Wiley%202025-6C4AB6?style=for-the-badge&logo=bookstack&logoColor=white)](https://doi.org/10.1155/cplx/1644859)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## About
A single-page portfolio built with vanilla HTML, CSS and JavaScript. No build step, no framework, no dependencies. It presents peer-reviewed research, seven engineering case studies, and links to live interactive dashboards.
**Design:** warm light theme by default with a persistent dark-mode toggle, built on a cream, coral, gold, purple and navy palette. Fully responsive, honours `prefers-reduced-motion`.
## Sections
| Section | Content |
| :--- | :--- |
| Hero | Animated 3D scene, CV download, contact links |
| The researcher | Background, education, research interests |
| Capabilities | Programming, ML, deep learning, computer vision, signal processing |
| Selected work | Seven case studies with live demos and source repositories |
| Research | Peer-reviewed publication with DOI, plus manuscript under review |
| Kaggle | Public notebooks and competition work |
| Open source | Featured repositories |
| Contact | Email, LinkedIn, GitHub, Kaggle, contact form |
## Case studies
Each project page is a standalone HTML document with its own analysis, charts and interactive elements.
| Project | Page | Source |
| :--- | :--- | :--- |
| Bearing Fault Diagnosis | [View](https://alinaderiii.github.io/Bearing%20Fault%20Diagnosis.html) | - |
| Brain Tumor Detection | [View](https://alinaderiii.github.io/Deep%20Learning%20%26%20Medical%20Imaging.html) | [Repo](https://github.com/AliNaderiii/brain-tumor-classification-paper) |
| Rice Production Forecasting | [View](https://alinaderiii.github.io/Rice_Production_Forecasting_Portfolio.html) | [Live demo](https://alinaderiii.github.io/Rice-Production-Forecasting-SriLanka/) |
| Smart Farming AI | [View](https://alinaderiii.github.io/Smart_Farming_Portfolio.html) | [Live demo](https://alinaderiii.github.io/Precision-Agriculture-Yield-Forecasting-Smart-Farming/) |
| Traffic Density Estimation | [View](https://alinaderiii.github.io/Traffic_Density_Estimation_Portfolio.html) | [Repo](https://github.com/AliNaderiii/Real-Time-traffic-density-estimation) |
| Heart Disease Prediction | [View](https://alinaderiii.github.io/Heart_Disease_Portfolio.html) | [Repo](https://github.com/AliNaderiii/Heart-disease-prediction) |
## Featured research
**Convolutional Neural Network and Channel Attention Mechanism for Multiclass Brain Tumor Classification**
Complexity (Wiley), Volume 2025. Open Access. Published 30 June 2025.
DOI: [10.1155/cplx/1644859](https://doi.org/10.1155/cplx/1644859)
98.16% four-class accuracy on Brats-4C, validated with 5-fold stratified cross-validation.
## Run locally
No build tooling required.
```bash
git clone https://github.com/AliNaderiii/AliNaderiii.github.io.git
cd AliNaderiii.github.io
```
Open `index.html` in a browser, or serve it:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.
## Structure
```text
AliNaderiii.github.io/
├── index.html                                 # Main portfolio page
├── style.css                                  # Theme tokens and layout
├── script.js                                  # Theme toggle, reveal, 3D hero
├── assets/
│   ├── Ali-Naderi Portfolio.pdf                # Downloadable CV
│   ├── favicon.svg
│   └── 01.png, 02.png, 03.png                  # Portrait photography
├── Bearing Fault Diagnosis.html
├── Deep Learning & Medical Imaging.html
├── Heart_Disease_Portfolio.html
├── Rice_Production_Forecasting_Portfolio.html
├── Smart_Farming_Portfolio.html
├── Traffic_Density_Estimation_Portfolio.html
├── LICENSE
└── README.md
```
## Contact
**Ali Naderi** - Dublin, Ireland
[alinaderi119@gmail.com](mailto:alinaderi119@gmail.com) | [LinkedIn](https://www.linkedin.com/in/alinaderi-data-scientist) | [GitHub](https://github.com/AliNaderiii) | [Kaggle](https://www.kaggle.com/alinaderi1) | [ORCID](https://orcid.org/0009-0004-8166-5449)
## License
Released under the [MIT License](LICENSE).
