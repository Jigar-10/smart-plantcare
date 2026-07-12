# PlantCare React + Node Conversion

This repository now contains a React frontend and a Node.js backend for the PlantCare project.

## What changed
- Converted the original static HTML/CSS/JavaScript site into a React app.
- Added a Node.js backend with Express for API endpoints.
- No MongoDB, no authentication, no external database service.
- Garden data and contact messages are stored in local JSON files under `server/data/`.

## Project structure
```
plantcare-fullstack/
├── client/               # React application source
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── components/
│   │   └── pages/
├── server/
│   ├── index.js          # Express API server
│   ├── data/
│   │   ├── garden.json   # persisted garden records
│   │   └── plantData.js  # seeded garden data
├── package.json
├── vite.config.js
└── README.md
```

## Features
- React app with Home and Garden pages only.
- Garden backend API with add, water, favorite, and delete actions.
- Simple Node file-based persistence via `server/data/garden.json`.
- Theme toggle with localStorage persistence.

## Setup
1. Open a terminal in `c:\Users\jigar\OneDrive\Desktop\New folder`
2. Install dependencies:

```powershell
npm install
```

3. Run the backend in one terminal:

```powershell
npm run server
```

And run the React development server in another terminal:

```powershell
npm run dev
```

The React app will run on `http://localhost:5173`, and the backend API will run on `http://localhost:5000`.

## Build for production

```powershell
npm run build
```

Then run the backend in production mode:

```powershell
npm start
```

## Notes
- No MongoDB required.
- No user authentication is included.
- API data persistence is file-based via `server/data/*.json`.
