# AH Medische Dienstverlening (AHMD)

Modern, interactive web platform for **AH Medische Dienstverlening** — providing advanced cardiology and primary care diagnostic services and modular diagnostic equipment across the Netherlands.

---

## 🩺 About the Project

AH Medische Dienstverlening (AHMD) supports general practitioner clinics (huisartsenpraktijken), healthcare centers, and primary care groups with modernized diagnostic solutions:

- **MESI mTABLET Integration:** A modular, wireless diagnostic workstation supporting 12-lead ECG, Ankle-Brachial Index (ABI / Enkel-arm Index with PADsense™), automated blood pressure protocols (including 30-minute measurements), and digital spirometry.
- **Holter Monitoring Service:** Turnkey 24-hour Holter heart rhythm monitoring for patients at home without upfront clinic equipment investment (pay-per-use model via Dutch M&I reimbursement codes).
- **AHMD Mobile Zorg App:** Practice-oriented mobile app for protocol management, device inventory tracking, and team access.
- **Interactive 3D Hardware Viewers:** Lightweight, hardware-accelerated 3D model viewers (`.glb`) embedded on module pages using the `<model-viewer>` Web Component.
- **Documentation & Compliance:** Downloadable CE declarations of conformity, MDR compliance records, product brochures, and privacy policies.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router 7](https://reactrouter.com/) (Hash routing for seamless static hosting)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design system and Google Fonts (`Outfit`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **3D Visualization:** [Google `<model-viewer>`](https://modelviewer.dev/) for interactive 3D medical device inspection

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or later (tested on v20.11+)
- **npm**: `v10.0.0` or later

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-account>/ah-medische-dienstverlening.git
cd ah-medische-dienstverlening
npm install
```

### 2. Environment Variables

The core application runs completely out-of-the-box as a static client with no required environment variables.

If using developer tooling or external MCP services (such as Google Stitch MCP), copy the example file:

```bash
cp .env.example .env
```

| Variable | Description | Required | Default |
|---|---|---|---|
| `STITCH_API_KEY` | Optional API key for Google Stitch MCP server | No | `""` |

### 3. Local Development

Start the local Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080/` (or your configured port).

### 4. Production Build

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

The output bundle is generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── components/                 # Reusable UI & 3D Viewer components
│   ├── BP3DViewer.tsx          # 3D Blood Pressure Cuff viewer
│   ├── EAI3DViewer.tsx         # 3D Enkel-arm Index cuff viewer
│   ├── ECG3DViewer.tsx         # 3D ECG Module viewer
│   ├── FlatButton.tsx          # Standard styled button component
│   ├── FlatCard.tsx            # Feature and service card component
│   ├── HeartLogo3DViewer.tsx   # Interactive 3D Heart Logo viewer
│   ├── Holter3DViewer.tsx      # 3D Holter-recorder viewer
│   ├── HomeMonitor3DViewer.tsx # 3D Portable Monitor viewer
│   ├── Layout.tsx              # Global navigation, sticky subheader & footer
│   ├── MTabletConfigurator.tsx # Interactive module configurator & quote request
│   ├── Section.tsx             # Semantic layout wrapper with theme backgrounds
│   └── Spiro3DViewer.tsx       # 3D Spirometry module viewer
├── pages/                      # Application route pages
│   ├── Home.tsx                # Landing page with video hero & configurator
│   ├── MTablet.tsx             # MESI mTABLET concept overview
│   ├── ECG.tsx                 # 12-channel wireless ECG page
│   ├── ABI.tsx                 # Enkel-arm Index (ABI) diagnostic page
│   ├── Bloeddruk.tsx           # Blood pressure measurement page
│   ├── Spirometrie.tsx         # Spirometry lung function page
│   ├── Holter.tsx              # Holter 24-hour monitoring page
│   ├── AppPage.tsx             # AHMD Mobile Zorg App overview
│   ├── OverOns.tsx             # Company background & mission
│   ├── Contact.tsx             # Contact form & location information
│   └── Documenten.tsx          # PDF downloads, certificates & compliance
├── public/                     # Static assets served at root
│   ├── models/                 # Optimized 3D GLB models
│   ├── pdf document page/      # Product flyers & compliance PDFs
│   ├── Holter-recorder/        # Holter service images
│   ├── Spirometrie/            # Spirometry report graphics
│   ├── hero-bg.mp4             # High-definition looping hero video
│   └── *.png / *.jpg           # Active brand and device photography
├── App.tsx                     # Main router configuration & smooth scroll handler
├── constants.tsx               # Navigation links, services list & contact details
├── types.ts                    # TypeScript data interfaces
├── model-viewer.d.ts           # Ambient typings for <model-viewer> custom element
├── vite.config.ts              # Vite server, path aliases & build configuration
└── tsconfig.json               # TypeScript compiler options
```

---

## 🔒 Security & Privacy

- No private API keys or personal credentials are committed to source control.
- All documents, forms, and compliance statements adhere to EU GDPR/AVG standards for medical software and service delivery.

---

## 📄 License

Private & proprietary — AH Medische Dienstverlening. All rights reserved.
