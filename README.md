# 🌱 Plant Care Reminder App

A modern, responsive frontend web application developed for demonstrating client-side website programming skills.

## 📝 Project Details
- **Project Title:** Plant Care Reminder App
- **Subject:** Web Computing Lab Skill Based Lab
- **Semester:** B.Tech IT - Semester 3
- **Theme:** SDG 15 – Life on Land
- **Repository:** https://github.com/Jigar-10/smart-plantcare

---

## 🎯 Project Overview
Plant Care Reminder is a frontend nature-themed application that helps users organize and care for their plant collections. It allows users to maintain a digital garden, view dynamic watering schedules, study diagnostic care sheets, and explore plant species categories.

This project is built **purely as a frontend client demonstration** with zero external packages, backend databases, or APIs.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic layout, forms, and custom SVG illustrations.
- **CSS3**: Responsive layouts, custom variables, keyframe animations, glassmorphism, and theme toggles.
- **Vanilla JavaScript**: DOM manipulation, localStorage persistence, date calculations, event handling, and dynamic rendering.

**Strict Constraints Followed:** No React, Angular, Vue, Node.js, Bootstrap, Tailwind, or external API frameworks were used. The application runs offline in the browser.

---

## 🌟 Key Features
1. **Interactive Hero Page**: Rich SVG illustration, animated typewriter heading, and call-to-action buttons.
2. **Personal Garden Tracker**:
   - Add custom plant entries with water interval and last-watering date.
   - Favorite plants, delete plants, and water plants manually.
   - Filter favorites and search by name/type.
   - Persist data using browser `localStorage`.
3. **Smart Watering Checklist**: Tracked watering schedule with Today, Tomorrow, This Week, and Completed sections.
4. **Plant Gallery**: Category filters, search support, and plant detail cards with care recommendations.
5. **Care Guide Library**: Detailed guidelines for common plants, including soil, water, fertilizer, and troubleshooting.
6. **Contact Form**: Local validation and toast notifications on form submission.
7. **Responsive Design**: Mobile, tablet, and desktop-friendly layout.
8. **Dark Mode**: Theme toggle with saved preference.

---

## 📂 Folder Structure
```
PlantCareReminder/
│
├── index.html            # Landing / Welcome Page
├── about.html            # About, SDG 15 context, and project benefits
├── gallery.html          # Plant gallery with category filters and detail modal
├── garden.html           # Garden dashboard, watering checklist, and inventory management
├── care-guide.html       # Detailed plant care guides
├── contact.html          # Contact form and support details
├── 404.html              # Custom not-found page
│
├── css/
│   ├── style.css         # Main theme, page layout, components, and typography
│   ├── responsive.css    # Media queries and responsive adjustments
│   ├── animations.css    # Motion effects, scroll reveals, and loader animations
│
├── js/
│   ├── app.js            # Theme toggle, navbar, toast notifications, menu, and utility logic
│   ├── garden.js         # Garden state, CRUD, search, filters, counters, and actions
│   ├── reminder.js       # Water task rendering, schedule buckets, and reminder actions
│   ├── gallery.js        # Plant gallery data, rendering, and filters
│   ├── animation.js      # Page loader, hero typing, scroll reveal, and counter animations
│
└── README.md             # Project documentation
```

---

## 🚀 Run Locally
Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

## 📌 GitHub Push Instructions
If Git is installed locally, run the following commands from this project folder:

```powershell
cd "c:\Users\jigar\OneDrive\Desktop\New folder"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Jigar-10/smart-plantcare.git
git branch -M main
git push -u origin main
```

If Git is not installed, download it from https://git-scm.com/download/win and then run the commands above.
