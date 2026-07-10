/* js/reminder.js - Upcoming Water Schedule Calculator & Renderer */

document.addEventListener('DOMContentLoaded', () => {
    // Expose renderReminders globally so garden.js can call it when data changes
    window.renderReminders = function() {
        const todayList = document.getElementById('reminderTodayList');
        const tomorrowList = document.getElementById('reminderTomorrowList');
        const weekList = document.getElementById('reminderWeekList');
        const completedList = document.getElementById('reminderCompletedList');

        // Check if reminders elements exist before executing
        if (!todayList) return;

        // Fetch garden plants from storage
        const stored = localStorage.getItem('garden_plants');
        const plants = stored ? JSON.parse(stored) : [];

        // Clear all lists
        todayList.innerHTML = '';
        tomorrowList.innerHTML = '';
        weekList.innerHTML = '';
        completedList.innerHTML = '';

        // Helper to get days remaining
        function getDaysRemaining(plant) {
            const elapsed = Math.floor((Date.now() - new Date(plant.lastWatered)) / (24 * 60 * 60 * 1000));
            return plant.waterInterval - elapsed;
        }

        let todayCount = 0;
        let tomorrowCount = 0;
        let weekCount = 0;
        let completedCount = 0;

        plants.forEach(plant => {
            const daysRemaining = getDaysRemaining(plant);
            const item = document.createElement('div');
            item.className = 'reminder-item glass-card';
            item.style.padding = '16px 20px';
            item.style.marginBottom = '12px';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'space-between';
            item.style.transition = 'transform 0.3s, opacity 0.3s';

            let daysText = '';
            let labelClass = '';

            if (daysRemaining < 0) {
                daysText = `${Math.abs(daysRemaining)} days overdue ⚠️`;
                labelClass = 'color: var(--danger-color); font-weight: 600;';
            } else if (daysRemaining === 0) {
                daysText = 'Water today 💦';
                labelClass = 'color: var(--warning-color); font-weight: 600;';
            } else if (daysRemaining === 1) {
                daysText = 'Water tomorrow';
                labelClass = 'color: var(--primary-light);';
            } else {
                daysText = `In ${daysRemaining} days`;
                labelClass = 'color: var(--text-muted);';
            }

            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 14px;">
                    <input type="checkbox" id="chk-${plant.id}" class="reminder-checkbox" style="width: 20px; height: 20px; accent-color: var(--primary-color); cursor: pointer;">
                    <div>
                        <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--primary-color);">${plant.name}</h4>
                        <span style="font-size: 0.8rem; ${labelClass}">${daysText}</span>
                    </div>
                </div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Interval: Every ${plant.waterInterval}d
                </div>
            `;

            // Setup checkbox listener to "Water" the plant on check
            const chk = item.querySelector('.reminder-checkbox');
            chk.addEventListener('change', () => {
                if (chk.checked) {
                    // Strike through title
                    item.querySelector('h4').style.textDecoration = 'line-through';
                    item.querySelector('h4').style.opacity = '0.5';
                    item.style.opacity = '0.5';
                    item.style.transform = 'scale(0.95)';

                    setTimeout(() => {
                        // Water the plant globally using functions in garden.js (accessible via window / local storage trigger)
                        waterPlantFromReminder(plant.id);
                    }, 400);
                }
            });

            // Categorize into lists
            if (daysRemaining <= 0) {
                todayList.appendChild(item);
                todayCount++;
            } else if (daysRemaining === 1) {
                tomorrowList.appendChild(item);
                tomorrowCount++;
            } else if (daysRemaining > 1 && daysRemaining <= 7) {
                weekList.appendChild(item);
                weekCount++;
            } else {
                // Completed/Safe watering (fully watered, due in > 7 days)
                chk.checked = true;
                chk.disabled = true;
                item.querySelector('h4').style.opacity = '0.6';
                item.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <span style="font-size: 1.2rem;">🟢</span>
                        <div>
                            <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--primary-color); opacity: 0.7;">${plant.name}</h4>
                            <span style="font-size: 0.8rem; color: var(--success-color);">Hydrated &bull; ${daysText}</span>
                        </div>
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                        Checked
                    </div>
                `;
                completedList.appendChild(item);
                completedCount++;
            }
        });

        // Show empty states if no items in lists
        if (todayCount === 0) {
            todayList.innerHTML = `<p style="padding: 12px; font-size: 0.95rem; color: var(--text-muted); font-style: italic;">All caught up! No plants need water today. 🌤️</p>`;
        }
        if (tomorrowCount === 0) {
            tomorrowList.innerHTML = `<p style="padding: 12px; font-size: 0.95rem; color: var(--text-muted); font-style: italic;">No plants scheduled for tomorrow.</p>`;
        }
        if (weekCount === 0) {
            weekList.innerHTML = `<p style="padding: 12px; font-size: 0.95rem; color: var(--text-muted); font-style: italic;">No plants scheduled for the rest of this week.</p>`;
        }
        if (completedCount === 0) {
            completedList.innerHTML = `<p style="padding: 12px; font-size: 0.95rem; color: var(--text-muted); font-style: italic;">Add plants to see completed schedules.</p>`;
        }
    };

    function waterPlantFromReminder(id) {
        const stored = localStorage.getItem('garden_plants');
        if (stored) {
            let plants = JSON.parse(stored);
            const plant = plants.find(p => p.id === id);
            if (plant) {
                plant.lastWatered = new Date().toISOString();
                localStorage.setItem('garden_plants', JSON.stringify(plants));
                
                // Trigger reload across garden dashboard & reminder lists
                if (window.addPlantToGardenByName) {
                    // This updates state if garden.js is loaded
                    // Refresh elements
                    location.reload(); // Simple refresh to ensure all sync perfectly! Or we can trigger DOM calls.
                } else {
                    window.renderReminders();
                    showToast(`Watered ${plant.name}! Hydration restored 💧`, 'success');
                }
            }
        }
    }

    // Run on startup
    window.renderReminders();
});
