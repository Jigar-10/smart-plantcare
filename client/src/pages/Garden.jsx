import { useEffect, useMemo, useState } from 'react';
import { addGardenPlant, deleteGardenPlant, getGarden, toggleGardenFavorite, waterGardenPlant } from '../services/api';

const plantTypes = ['Aloe Vera', 'Snake Plant', 'Peace Lily', 'Money Plant', 'Spider Plant', 'Tulsi'];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getDaysRemaining(plant) {
  const elapsed = Math.floor((Date.now() - new Date(plant.lastWatered)) / (24 * 60 * 60 * 1000));
  return plant.waterInterval - elapsed;
}

function Garden({ showToast }) {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', type: plantTypes[0], waterInterval: 7 });

  const loadPlants = async () => {
    setLoading(true);
    try {
      const data = await getGarden();
      setPlants(data);
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlants();
  }, []);

  const filteredPlants = useMemo(() => {
    let items = [...plants];
    if (favoritesOnly) items = items.filter((plant) => plant.isFavorite);
    if (search.trim()) {
      const lower = search.toLowerCase();
      items = items.filter((plant) => plant.name.toLowerCase().includes(lower) || plant.type.toLowerCase().includes(lower));
    }
    items.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'newest') return new Date(b.dateAdded) - new Date(a.dateAdded);
      if (sortBy === 'oldest') return new Date(a.dateAdded) - new Date(b.dateAdded);
      return getDaysRemaining(a) - getDaysRemaining(b);
    });
    return items;
  }, [plants, search, sortBy, favoritesOnly]);

  const handleAddPlant = async (e) => {
    e.preventDefault();
    try {
      await addGardenPlant(form);
      setForm({ name: '', type: plantTypes[0], waterInterval: 7 });
      setModalOpen(false);
      loadPlants();
      showToast('Plant added to your garden!', 'success');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  const handleWater = async (id) => {
    try {
      await waterGardenPlant(id);
      loadPlants();
      showToast('Plant watered successfully!', 'success');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  const handleFavorite = async (id) => {
    try {
      await toggleGardenFavorite(id);
      loadPlants();
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGardenPlant(id);
      loadPlants();
      showToast('Plant removed from garden.', 'info');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  return (
    <main className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">My Garden Dashboard</h2>
          <p className="section-subtitle">Manage your collection, track watering schedules, and update plant status with a connected Node backend.</p>
        </div>

        <div className="glass-card garden-toolbar" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'grid', gap: 12, flex: 1 }}>
            <input
              className="form-control"
              placeholder="Search my plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setFavoritesOnly((value) => !value)}>
                {favoritesOnly ? 'Showing Favorites' : 'Favorites'}
              </button>
              <select className="form-control" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="water">Sort by Schedule</option>
                <option value="newest">Sort by Newest</option>
                <option value="oldest">Sort by Oldest</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
            Add Plant 🌿
          </button>
        </div>

        {loading ? (
          <div style={{ marginTop: 24, textAlign: 'center' }}>Loading garden...</div>
        ) : (
          <div className="card-grid" style={{ marginTop: 24 }}>
            {filteredPlants.length === 0 ? (
              <div className="glass-card">No plants found. Add one to begin.</div>
            ) : (
              filteredPlants.map((plant) => {
                const daysRemaining = getDaysRemaining(plant);
                const status = daysRemaining <= 0 ? 'Water Today' : daysRemaining === 1 ? 'Tomorrow' : `In ${daysRemaining} days`;
                const badgeColor = daysRemaining <= 0 ? 'var(--danger-color)' : daysRemaining === 1 ? 'var(--warning-color)' : 'var(--success-color)';
                return (
                  <div key={plant.id} className="glass-card" style={{ position: 'relative' }}>
                    <button
                      type="button"
                      className="theme-button"
                      onClick={() => handleFavorite(plant.id)}
                      style={{ position: 'absolute', right: 20, top: 20, width: 44, height: 44 }}
                      aria-label="Toggle favorite"
                    >
                      {plant.isFavorite ? '❤️' : '🤍'}
                    </button>
                    <h3 style={{ marginBottom: 8, color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>{plant.name}</h3>
                    <div style={{ color: 'var(--text-muted)', marginBottom: 14 }}>{plant.type}</div>
                    <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                      <span style={{ color: badgeColor, fontWeight: 700 }}>{status}</span>
                      <span style={{ color: 'var(--text-muted)' }}>Interval: {plant.waterInterval}d</span>
                    </div>
                    <div style={{ display: 'grid', gap: 12, marginBottom: 20 }}>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Last water: {formatDate(plant.lastWatered)}</div>
                      <div style={{ height: 10, borderRadius: 999, background: 'var(--accent-soft)' }}>
                        <div style={{ width: `${Math.max(0, Math.min(100, (plant.waterInterval - Math.max(0, Math.floor((Date.now() - new Date(plant.lastWatered)) / (24 * 60 * 60 * 1000)))) ) / plant.waterInterval) * 100}%`, height: '100%', background: badgeColor, borderRadius: 999 }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <button className="btn btn-primary" onClick={() => handleWater(plant.id)}>
                        Water 💦
                      </button>
                      <button className="btn btn-secondary" onClick={() => handleDelete(plant.id)}>
                        Delete 🗑️
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <h2 style={{ marginBottom: 20 }}>Add a new plant</h2>
            <form onSubmit={handleAddPlant} className="form-card">
              <div className="form-group">
                <label className="form-label">Plant Name</label>
                <input
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Plant Type</label>
                <select
                  className="form-control"
                  value={form.type}
                  onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
                >
                  {plantTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Water Interval (days)</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={form.waterInterval}
                  onChange={(e) => setForm((prev) => ({ ...prev, waterInterval: Number(e.target.value) }))}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Save Plant
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Garden;
