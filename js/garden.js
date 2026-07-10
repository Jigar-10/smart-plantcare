/* js/garden.js - User Garden Management (CRUD) */

// --- Default Pre-Populated Garden Plants ---
const DEFAULT_GARDEN = [
    {
        id: 'garden-1',
        name: 'My Aloe Vera',
        type: 'Aloe Vera',
        waterInterval: 14, // Water every 14 days
        lastWatered: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // Watered 5 days ago
        dateAdded: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        isFavorite: true
    },
    {
        id: 'garden-2',
        name: 'Hallway Snake Plant',
        type: 'Snake Plant',
        waterInterval: 30, // Water every 30 days
        lastWatered: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(), // Watered 28 days ago (due soon!)
        dateAdded: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
        isFavorite: false
    },
    {
        id: 'garden-3',
        name: 'Desk Lily',
        type: 'Peace Lily',
        waterInterval: 7, // Water every 7 days
        lastWatered: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // Watered 6 days ago (due tomorrow!)
        dateAdded: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        isFavorite: false
    }
];

// SVGs corresponding to common plant types for rendering in the garden list
const PLANT_TYPE_SVGs = {
    'Aloe Vera': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M70 150 L130 150 L140 190 L60 190 Z" fill="#d97736" /><ellipse cx="100" cy="150" rx="35" ry="8" fill="#c2410c" /><ellipse cx="100" cy="148" rx="30" ry="5" fill="#582f0e" /><path d="M100 148 C90 110 85 80 50 60 C80 80 92 110 100 148 Z" fill="#386641" /><path d="M100 148 C110 110 115 80 150 60 C120 80 108 110 100 148 Z" fill="#386641" /><path d="M96 148 C90 100 80 60 70 30 C88 65 94 105 96 148 Z" fill="#6a994e" /><path d="M104 148 C110 100 120 60 130 30 C112 65 106 105 104 148 Z" fill="#6a994e" /><path d="M100 148 C98 90 98 50 100 10 C102 50 102 90 100 148 Z" fill="#a7c957" /></svg>`,
    'Snake Plant': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M70 150 L130 150 L138 185 L62 185 Z" fill="#6b7280" /><ellipse cx="100" cy="150" rx="33" ry="7" fill="#4b5563" /><ellipse cx="100" cy="148" rx="29" ry="4" fill="#371a03" /><path d="M85 148 C75 90 70 50 78 20 C85 50 90 95 90 148 Z" fill="#1b4332" /><path d="M78 20 C80 50 85 95 87 148" stroke="#a7c957" stroke-width="2" fill="none" /><path d="M100 148 C95 80 90 40 102 10 C108 40 105 80 102 148 Z" fill="#2d6a4f" /><path d="M115 148 C125 95 130 55 122 25 C115 55 110 95 110 148 Z" fill="#1b4332" /><path d="M122 25 C120 55 115 95 113 148" stroke="#a7c957" stroke-width="2" fill="none" /></svg>`,
    'Peace Lily': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M68 150 L132 150 L140 190 L60 190 Z" fill="#b91c1c" /><ellipse cx="100" cy="150" rx="35" ry="8" fill="#991b1b" /><ellipse cx="100" cy="148" rx="31" ry="5" fill="#451a03" /><path d="M100 148 C70 120 50 110 40 100 C60 100 80 120 100 148 Z" fill="#1b4332" /><path d="M100 148 C130 120 150 110 160 100 C140 100 120 120 100 148 Z" fill="#1b4332" /><path d="M100 148 C80 110 70 80 60 70 C75 75 88 105 100 148 Z" fill="#2d6a4f" /><path d="M100 148 C120 110 130 80 140 70 C125 75 112 105 100 148 Z" fill="#2d6a4f" /><path d="M100 148 C95 110 90 90 85 60 C98 75 98 110 100 148 Z" fill="#40916c" /><path d="M100 148 C105 110 110 90 115 60 C102 75 102 110 100 148 Z" fill="#40916c" /><path d="M100 148 C95 100 90 60 85 40" stroke="#52b788" stroke-width="2.5" fill="none" /><path d="M85 40 C75 25 75 10 85 0 C95 10 95 25 85 40 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5" /><path d="M85 30 C83 25 83 18 85 13 C87 18 87 25 85 30 Z" fill="#fef08a" /></svg>`,
    'Money Plant': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M72 150 L128 150 L136 180 L64 180 Z" fill="#1e3a8a" /><ellipse cx="100" cy="150" rx="30" ry="6" fill="#1e40af" /><ellipse cx="100" cy="148" rx="27" ry="4" fill="#2d1601" /><path d="M90 148 C75 160 55 165 40 185" fill="none" stroke="#2d6a4f" stroke-width="2.5" /><path d="M110 148 C125 160 140 170 150 195" fill="none" stroke="#2d6a4f" stroke-width="2.5" /><path d="M100 148 C95 120 85 90 90 70" fill="none" stroke="#2d6a4f" stroke-width="2.5" /><path d="M40 185 C35 175 42 168 50 175 C45 185 42 188 40 185 Z" fill="#52b788" /><path d="M60 160 C50 150 60 145 68 152 C65 162 62 165 60 160 Z" fill="#74c69d" /><path d="M150 195 C145 185 152 178 160 185 C155 195 152 198 150 195 Z" fill="#52b788" /><path d="M130 165 C120 155 130 150 138 157 C135 167 132 170 130 165 Z" fill="#74c69d" /><path d="M90 70 C80 60 90 55 98 62 C95 72 92 75 90 70 Z" fill="#95d5b2" /><path d="M96 110 C85 100 95 95 103 102 C100 112 98 115 96 110 Z" fill="#52b788" /></svg>`,
    'Leafy Green': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M75 140 L125 140 L132 180 L68 180 Z" fill="#854d0e" /><ellipse cx="100" cy="140" rx="25" ry="6" fill="#713f12" /><ellipse cx="100" cy="138" rx="22" ry="4" fill="#451a03" /><path d="M100 138 Q80 100 65 75 C78 80 92 110 100 138" fill="#2d6a4f" /><path d="M100 138 Q120 100 135 75 C122 80 108 110 100 138" fill="#2d6a4f" /><path d="M100 138 C90 90 90 60 100 30 C110 60 110 90 100 138 Z" fill="#52b788" /></svg>`,
    'Cactus / Succulent': `<svg viewBox="0 0 200 200" class="garden-plant-svg"><path d="M70 150 L130 150 L140 190 L60 190 Z" fill="#ea580c" /><ellipse cx="100" cy="150" rx="35" ry="8" fill="#c2410c" /><ellipse cx="100" cy="148" rx="31" ry="5" fill="#3a1e05" /><path d="M82 148 C82 90 85 70 100 70 C115 70 118 90 118 148 Z" fill="#15803d" /><path d="M90 148 C90 90 92 80 100 80 C108 80 110 90 110 148 Z" fill="#166534" /><path d="M85 110 Q70 110 70 95 C70 85 80 85 80 95 L80 115" fill="none" stroke="#15803d" stroke-width="12" stroke-linecap="round" /><path d="M115 100 Q130 100 130 85 C130 75 120 75 120 85 L120 105" fill="none" stroke="#15803d" stroke-width="12" stroke-linecap="round" /><ellipse cx="100" cy="70" rx="6" ry="6" fill="#ec4899" /><circle cx="100" cy="70" r="2" fill="#facc15" /></svg>`
};

let gardenPlants = [];

// Initialize local storage synchronizer
function initGardenData() {
    const stored = localStorage.getItem('garden_plants');
    if (stored) {
        gardenPlants = JSON.parse(stored);
    } else {
        gardenPlants = [...DEFAULT_GARDEN];
        saveGardenToLocalStorage();
    }
}

function saveGardenToLocalStorage() {
    localStorage.setItem('garden_plants', JSON.stringify(gardenPlants));
}

// Global API exposure so gallery.js and reminder.js can call it
window.addPlantToGardenByName = function(plantName, waterIntervalText) {
    initGardenData();
    
    // Extract number from water interval text
    let days = 7;
    const matches = waterIntervalText.match(/\b\d+\b/);
    if (matches) {
        days = parseInt(matches[0]);
    }
    if (waterIntervalText.toLowerCase().includes('week')) {
        days = days * 7;
    }

    const type = PLANT_TYPE_SVGs[plantName] ? plantName : 'Leafy Green';

    const newPlant = {
        id: 'garden-' + Date.now(),
        name: `My ${plantName}`,
        type: type,
        waterInterval: days,
        lastWatered: new Date().toISOString(),
        dateAdded: new Date().toISOString(),
        isFavorite: false
    };

    gardenPlants.push(newPlant);
    saveGardenToLocalStorage();
    showToast(`${plantName} added to your garden! 🌿`, 'success');
    
    // If we are on the garden page, reload view
    const gardenGrid = document.getElementById('gardenGrid');
    if (gardenGrid) {
        renderGardenGrid();
        updateDashboardCounters();
        if (window.renderReminders) window.renderReminders();
    }
    return true;
};

// Render function for the garden.html grid
function renderGardenGrid() {
    const gardenGrid = document.getElementById('gardenGrid');
    if (!gardenGrid) return;

    // Filter & Sort state variables
    const searchQuery = document.getElementById('gardenSearch') ? document.getElementById('gardenSearch').value.toLowerCase() : '';
    const sortBy = document.getElementById('gardenSort') ? document.getElementById('gardenSort').value : 'name';
    const showFavoritesOnly = document.getElementById('favFilterBtn') ? document.getElementById('favFilterBtn').classList.contains('active') : false;

    // Apply Filters
    let items = [...gardenPlants];

    if (showFavoritesOnly) {
        items = items.filter(p => p.isFavorite);
    }

    if (searchQuery.trim() !== '') {
        items = items.filter(p => p.name.toLowerCase().includes(searchQuery) || p.type.toLowerCase().includes(searchQuery));
    }

    // Apply Sorting
    items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'newest') {
            return new Date(b.dateAdded) - new Date(a.dateAdded);
        } else if (sortBy === 'oldest') {
            return new Date(a.dateAdded) - new Date(b.dateAdded);
        } else if (sortBy === 'water') {
            // Days remaining until next water
            return getDaysRemaining(a) - getDaysRemaining(b);
        }
        return 0;
    });

    // Clear and build cards
    gardenGrid.innerHTML = '';
    
    if (items.length === 0) {
        gardenGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;" class="glass-card">
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No plants found in this corner of your garden. 🍂</p>
                <p>Click "Add Plant" or explore the Plant Gallery to populate your digital backyard!</p>
            </div>
        `;
        return;
    }

    items.forEach((plant, index) => {
        const card = document.createElement('div');
        card.className = `glass-card hover-lift reveal fade-in`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('data-id', plant.id);

        const daysRemaining = getDaysRemaining(plant);
        let waterStatusMsg = '';
        let statusClass = '';

        if (daysRemaining < 0) {
            waterStatusMsg = `Overdue by ${Math.abs(daysRemaining)} days ⚠️`;
            statusClass = 'overdue';
        } else if (daysRemaining === 0) {
            waterStatusMsg = 'Water Today 💦';
            statusClass = 'due-today';
        } else if (daysRemaining === 1) {
            waterStatusMsg = 'Water Tomorrow';
            statusClass = 'due-soon';
        } else {
            waterStatusMsg = `In ${daysRemaining} days`;
            statusClass = 'healthy';
        }

        // Percentage for water progress
        const daysSinceLastWatered = Math.max(0, Math.floor((Date.now() - new Date(plant.lastWatered)) / (24 * 60 * 60 * 1000)));
        const waterProgress = Math.max(0, Math.min(100, Math.floor(((plant.waterInterval - daysSinceLastWatered) / plant.waterInterval) * 100)));

        const plantSvg = PLANT_TYPE_SVGs[plant.type] || PLANT_TYPE_SVGs['Leafy Green'];

        card.innerHTML = `
            <button class="fav-btn" style="position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 1.4rem; cursor: pointer; color: ${plant.isFavorite ? 'var(--favorite-color)' : 'var(--text-muted)'}; z-index: 10;">
                ${plant.isFavorite ? '❤️' : '🤍'}
            </button>
            <div style="background: var(--accent-soft); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; height: 160px; position: relative;">
                ${plantSvg}
                <div class="water-badge ${statusClass}" style="position: absolute; bottom: 10px; left: 10px; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; color: white;">
                    ${waterStatusMsg}
                </div>
            </div>
            
            <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 4px; color: var(--primary-color);">${plant.name}</h3>
            <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 12px;">Type: ${plant.type}</span>
            
            <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                    <span>Soil Hydration</span>
                    <span>${waterProgress}%</span>
                </div>
                <div style="background: var(--accent-soft); height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="width: ${waterProgress}%; background: ${waterProgress < 25 ? 'var(--danger-color)' : 'var(--primary-color)'}; height: 100%; transition: width 0.5s;"></div>
                </div>
            </div>

            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; display: grid; grid-template-columns: 1fr; gap: 4px;">
                <div>Water Interval: Every ${plant.waterInterval} days</div>
                <div>Last Watered: ${formatDate(plant.lastWatered)}</div>
            </div>

            <div style="display: flex; gap: 10px; justify-content: space-between;">
                <button class="btn btn-primary water-action-btn" style="flex: 1; padding: 8px 12px; font-size: 0.85rem;">
                    Water 💦
                </button>
                <button class="btn btn-secondary delete-action-btn" style="padding: 8px 12px; border-color: rgba(230, 57, 70, 0.3); color: var(--danger-color); font-size: 0.85rem;">
                    Delete 🗑️
                </button>
            </div>
        `;

        // Event listeners for action buttons
        card.querySelector('.fav-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(plant.id);
        });

        card.querySelector('.water-action-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            waterPlant(plant.id);
        });

        card.querySelector('.delete-action-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deletePlant(plant.id, card);
        });

        gardenGrid.appendChild(card);
    });
}

// Helpers
function getDaysRemaining(plant) {
    const elapsed = Math.floor((Date.now() - new Date(plant.lastWatered)) / (24 * 60 * 60 * 1000));
    return plant.waterInterval - elapsed;
}

function formatDate(isoStr) {
    const date = new Date(isoStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// --- CRUD Actions ---
function toggleFavorite(id) {
    const plant = gardenPlants.find(p => p.id === id);
    if (plant) {
        plant.isFavorite = !plant.isFavorite;
        saveGardenToLocalStorage();
        renderGardenGrid();
        showToast(plant.isFavorite ? `${plant.name} favorited ❤️` : `${plant.name} removed from favorites`, 'info');
    }
}

function waterPlant(id) {
    const plant = gardenPlants.find(p => p.id === id);
    if (plant) {
        plant.lastWatered = new Date().toISOString();
        saveGardenToLocalStorage();
        renderGardenGrid();
        updateDashboardCounters();
        if (window.renderReminders) window.renderReminders();
        showToast(`Watered ${plant.name}! Hydration restored 💧`, 'success');
    }
}

function deletePlant(id, cardElement) {
    if (confirm('Are you sure you want to remove this plant from your garden? 🍂')) {
        // Add slide-out slide animation before removing
        cardElement.style.transform = 'translateX(-100px)';
        cardElement.style.opacity = '0';
        cardElement.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        
        setTimeout(() => {
            gardenPlants = gardenPlants.filter(p => p.id !== id);
            saveGardenToLocalStorage();
            renderGardenGrid();
            updateDashboardCounters();
            if (window.renderReminders) window.renderReminders();
            showToast('Plant removed from garden.', 'info');
        }, 400);
    }
}

// --- Dashboard Counter Values (animated) ---
function updateDashboardCounters() {
    const totalPlantsSpan = document.getElementById('statTotalPlants');
    const wateredTodaySpan = document.getElementById('statWateredToday');
    const upcomingWaterSpan = document.getElementById('statUpcomingReminders');
    const healthyPlantsSpan = document.getElementById('statHealthyPlants');

    if (!totalPlantsSpan) return; // Not on garden page

    const total = gardenPlants.length;
    
    // Watered today
    const wateredToday = gardenPlants.filter(p => {
        const last = new Date(p.lastWatered);
        const today = new Date();
        return last.getDate() === today.getDate() && 
               last.getMonth() === today.getMonth() && 
               last.getFullYear() === today.getFullYear();
    }).length;

    // Upcoming reminders (overdue or due within 3 days)
    const upcoming = gardenPlants.filter(p => getDaysRemaining(p) <= 3).length;

    // Healthy (hydration > 25%)
    const healthy = gardenPlants.filter(p => {
        const elapsed = Math.floor((Date.now() - new Date(p.lastWatered)) / (24 * 60 * 60 * 1000));
        const hydration = ((p.waterInterval - elapsed) / p.waterInterval) * 100;
        return hydration >= 25;
    }).length;

    // Direct text assignment (counters.js handles incremental animation, but we set them here too)
    totalPlantsSpan.textContent = total;
    wateredTodaySpan.textContent = wateredToday;
    upcomingWaterSpan.textContent = upcoming;
    healthyPlantsSpan.textContent = healthy;
}

// --- Initialize Garden Page ---
document.addEventListener('DOMContentLoaded', () => {
    initGardenData();
    renderGardenGrid();
    updateDashboardCounters();

    // Attach search and sort listeners
    const searchInput = document.getElementById('gardenSearch');
    const sortSelect = document.getElementById('gardenSort');
    const favFilterBtn = document.getElementById('favFilterBtn');
    const addPlantModal = document.getElementById('addPlantModal');
    const openAddModalBtn = document.getElementById('openAddPlantModalBtn');

    if (searchInput) searchInput.addEventListener('input', renderGardenGrid);
    if (sortSelect) sortSelect.addEventListener('change', renderGardenGrid);
    
    if (favFilterBtn) {
        favFilterBtn.addEventListener('click', () => {
            favFilterBtn.classList.toggle('active');
            favFilterBtn.classList.toggle('btn-primary');
            favFilterBtn.classList.toggle('btn-secondary');
            
            if (favFilterBtn.classList.contains('active')) {
                favFilterBtn.innerHTML = '❤️ Favorites';
            } else {
                favFilterBtn.innerHTML = '🤍 All Plants';
            }
            renderGardenGrid();
        });
    }

    // Modal Add Plant Overlay Logic
    if (openAddModalBtn && addPlantModal) {
        const closeBtn = addPlantModal.querySelector('.modal-close');
        
        openAddModalBtn.addEventListener('click', () => {
            addPlantModal.classList.add('active');
            // Preset date added
            const dateInput = document.getElementById('plantLastWatered');
            if (dateInput) {
                // Default last watered date to today
                dateInput.value = new Date().toISOString().substring(0,10);
            }
        });

        closeBtn.addEventListener('click', () => {
            addPlantModal.classList.remove('active');
        });

        addPlantModal.addEventListener('click', (e) => {
            if (e.target === addPlantModal) {
                addPlantModal.classList.remove('active');
            }
        });
    }

    // Modal Form Submit Validation
    const addPlantForm = document.getElementById('addPlantForm');
    if (addPlantForm) {
        addPlantForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('plantName').value.trim();
            const type = document.getElementById('plantType').value;
            const interval = parseInt(document.getElementById('plantInterval').value);
            const lastWateredDate = document.getElementById('plantLastWatered').value;

            if (name === '' || isNaN(interval) || interval <= 0 || !lastWateredDate) {
                showToast('Please fill out all fields with valid data.', 'error');
                return;
            }

            const newPlant = {
                id: 'garden-' + Date.now(),
                name: name,
                type: type,
                waterInterval: interval,
                lastWatered: new Date(lastWateredDate).toISOString(),
                dateAdded: new Date().toISOString(),
                isFavorite: false
            };

            gardenPlants.push(newPlant);
            saveGardenToLocalStorage();
            renderGardenGrid();
            updateDashboardCounters();
            
            if (window.renderReminders) window.renderReminders();

            addPlantForm.reset();
            addPlantModal.classList.remove('active');
            showToast(`${name} has been planted in your garden! 🌱`, 'success');
        });
    }
});
