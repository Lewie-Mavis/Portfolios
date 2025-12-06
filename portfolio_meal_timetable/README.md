# NutriPlan - World-Class Meal Timetable Website

A beautifully designed, fully-responsive meal planning application with stunning animations, glassmorphism effects, and local storage persistence.

## Features

### 🎨 Design & UI
- **Modern Glassmorphism Design**: Translucent cards with blur effects
- **Smooth Animations**: Fade-in, slide-up, and scroll-triggered animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Professional Typography**: Poppins and Inter fonts for clean readability

### 📋 Core Functionality
- **Daily Meal Planning**: Add meals for breakfast, morning snack, lunch, afternoon snack, and dinner
- **Weekly Overview**: View your entire week's meal plan at a glance
- **Day Selection**: Choose any day (Monday-Sunday) to view or edit meals
- **Local Storage**: All data persists between browser sessions
- **Edit & Delete**: Modify or remove any meal entry
- **Day Navigation**: Easily navigate between days

### ✨ Interactive Features
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Cards lift and shadows intensify on hover
- **Toast Notifications**: Visual feedback for user actions
- **Smooth Transitions**: All interactions have polished animations
- **Print & Export**: Print weekly plan or export as JSON

## How to Use

### Adding Meals
1. Click "Add Meal" button or scroll to the "Plan Your Day" section
2. Select a day from the dropdown
3. Enter meals for each time slot
4. Click "Save Meal Plan" to save

### Viewing & Editing
- **Daily View**: Shows meals for the selected day with edit/delete buttons
- **Weekly View**: Displays all days in a grid layout
- **Edit**: Click the edit icon (pencil) on any meal card
- **Delete**: Click the delete icon (trash) on any meal card

### Navigation
- **Today Button**: Jump to today's meals
- **Full Week Button**: View the weekly overview
- **Day Navigation**: Use arrows to move between days
- **Scroll**: Sections animate into view as you scroll

## Data Storage

All meal data is stored in the browser's localStorage with the key `nutriplan_mealData`. The data structure is:

```json
{
  "monday": {
    "breakfast": "Oatmeal with fruits",
    "snack1": "Apple",
    "lunch": "Grilled chicken salad",
    "snack2": "Greek yogurt",
    "dinner": "Salmon with vegetables"
  },
  // ... other days
}