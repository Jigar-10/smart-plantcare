const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const { gardenDefaults } = require('./data/plantData');

const app = express();
const port = process.env.PORT || 5000;
const dataDir = path.join(__dirname, 'data');
const gardenFile = path.join(dataDir, 'garden.json');

app.use(cors());
app.use(express.json());

async function ensureDataFiles() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(gardenFile);
  } catch (_) {
    await fs.writeFile(gardenFile, JSON.stringify(gardenDefaults, null, 2), 'utf8');
  }
}

async function readJson(filePath, fallback) {
  try {
    const contents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(contents);
  } catch (error) {
    return Array.isArray(fallback) ? [...fallback] : { ...fallback };
  }
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}


app.get('/api/garden', async (_req, res) => {
  const plants = await readJson(gardenFile, gardenDefaults);
  await writeJson(gardenFile, plants);
  res.json(plants);
});

app.post('/api/garden', async (req, res) => {
  const { name, type, waterInterval } = req.body;
  if (!name || !type || !waterInterval) {
    return res.status(400).json({ error: 'Name, type, and water interval are required.' });
  }

  const plants = await readJson(gardenFile, gardenDefaults);
  const newPlant = {
    id: `garden-${Date.now()}`,
    name,
    type,
    waterInterval: Number(waterInterval),
    lastWatered: new Date().toISOString(),
    dateAdded: new Date().toISOString(),
    isFavorite: false,
  };

  plants.unshift(newPlant);
  await writeJson(gardenFile, plants);
  res.status(201).json(newPlant);
});

app.patch('/api/garden/:id/water', async (req, res) => {
  const { id } = req.params;
  const plants = await readJson(gardenFile, gardenDefaults);
  const plant = plants.find((item) => item.id === id);
  if (!plant) {
    return res.status(404).json({ error: 'Plant not found.' });
  }
  plant.lastWatered = new Date().toISOString();
  await writeJson(gardenFile, plants);
  res.json(plant);
});

app.patch('/api/garden/:id/favorite', async (req, res) => {
  const { id } = req.params;
  const plants = await readJson(gardenFile, gardenDefaults);
  const plant = plants.find((item) => item.id === id);
  if (!plant) {
    return res.status(404).json({ error: 'Plant not found.' });
  }
  plant.isFavorite = !plant.isFavorite;
  await writeJson(gardenFile, plants);
  res.json(plant);
});

app.delete('/api/garden/:id', async (req, res) => {
  const { id } = req.params;
  let plants = await readJson(gardenFile, gardenDefaults);
  const exists = plants.some((item) => item.id === id);
  if (!exists) {
    return res.status(404).json({ error: 'Plant not found.' });
  }
  plants = plants.filter((item) => item.id !== id);
  await writeJson(gardenFile, plants);
  res.status(204).end();
});

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

ensureDataFiles().then(() => {
  app.listen(port, () => {
    console.log(`PlantCare API running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Failed to initialize server:', error);
  process.exit(1);
});
