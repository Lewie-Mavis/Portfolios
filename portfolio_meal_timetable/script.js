// Meal Planner Application - Vanilla JavaScript

// Application State
const AppState = {
    currentDay: 'monday',
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    dayNames: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
    },
    mealTypes: [
        { id: 'breakfast', name: 'Breakfast', icon: 'fa-sun' },
        { id: 'snack1', name: 'Morning Snack', icon: 'fa-apple-alt' },
        { id: 'lunch', name: 'Lunch', icon: 'fa-utensils' },
        { id: 'snack2', name: 'Afternoon Snack', icon: 'fa-carrot' },
        { id: 'dinner', name: 'Dinner', icon: 'fa-moon' }
    ],
    mealData: {}
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Check theme
    const savedTheme = localStorage.getItem('nutriplan_theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        document.getElementById('theme-toggle').querySelector('i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Load meal data
    loadMealData();
    
    // Set current day to today
    setCurrentDayToToday();
    
    // Set up all event listeners
    setupEventListeners();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Render initial views
    renderDailyMeals();
    renderWeeklyOverview();
    
    // Initialize animations
    initAnimations();
    
    console.log('App initialized. Current day:', AppState.currentDay);
    console.log('Meal data:', AppState.mealData);
});

// Load meal data from localStorage
function loadMealData() {
    try {
        const savedData = localStorage.getItem('nutriplan_mealData');
        if (savedData) {
            AppState.mealData = JSON.parse(savedData);
            console.log('✅ Data loaded from localStorage:', AppState.mealData);
        } else {
            console.log('ℹ️ No saved data found, creating empty structure');
            initializeEmptyData();
        }
    } catch (error) {
        console.error('❌ Error loading data:', error);
        initializeEmptyData();
    }
}

// Initialize empty data structure
function initializeEmptyData() {
    AppState.days.forEach(day => {
        if (!AppState.mealData[day]) {
            AppState.mealData[day] = {
                breakfast: '',
                snack1: '',
                lunch: '',
                snack2: '',
                dinner: ''
            };
        }
    });
    saveMealData();
}

// Save meal data to localStorage
function saveMealData() {
    try {
        localStorage.setItem('nutriplan_mealData', JSON.stringify(AppState.mealData));
        console.log('💾 Data saved:', AppState.mealData);
        return true;
    } catch (error) {
        console.error('❌ Error saving data:', error);
        alert('Error saving data. Please try again.');
        return false;
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', function() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        this.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        localStorage.setItem('nutriplan_theme', newTheme);
        showToast(`Switched to ${newTheme} mode`);
    });
    
    // Navigation buttons
    document.getElementById('today-btn').addEventListener('click', setCurrentDayToToday);
    document.getElementById('full-week-btn').addEventListener('click', () => {
        document.getElementById('weekly-overview').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('add-meal-btn').addEventListener('click', () => {
        document.getElementById('meal-form-section').scrollIntoView({ behavior: 'smooth' });
        // Pre-fill form with current day's meals
        const meals = AppState.mealData[AppState.currentDay] || {};
        document.getElementById('breakfast').value = meals.breakfast || '';
        document.getElementById('snack1').value = meals.snack1 || '';
        document.getElementById('lunch').value = meals.lunch || '';
        document.getElementById('snack2').value = meals.snack2 || '';
        document.getElementById('dinner').value = meals.dinner || '';
    });
    
    // Hero section buttons
    document.getElementById('hero-add-meal').addEventListener('click', () => {
        document.getElementById('meal-form-section').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('view-week').addEventListener('click', () => {
        document.getElementById('weekly-overview').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Meal form buttons
    document.getElementById('save-meal').addEventListener('click', saveMealPlan);
    document.getElementById('clear-day').addEventListener('click', clearDayMeals);
    document.getElementById('cancel-meal').addEventListener('click', () => {
        document.getElementById('meal-form-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Day navigation
    document.getElementById('prev-day').addEventListener('click', goToPreviousDay);
    document.getElementById('next-day').addEventListener('click', goToNextDay);
    
    // Day selector change
    document.getElementById('day-select').addEventListener('change', function() {
        AppState.currentDay = this.value;
        updateCurrentDayDisplay();
        renderDailyMeals();
    });
    
    // Print and export buttons
    document.getElementById('print-week').addEventListener('click', printWeeklyPlan);
    document.getElementById('export-json').addEventListener('click', exportMealData);
    
    // Close toast on click
    document.getElementById('toast').addEventListener('click', hideToast);
}

// Initialize scroll animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.dataset.delay) {
                    entry.target.style.transitionDelay = entry.target.dataset.delay;
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-fade-up, .animate-slide-up, .section-title, .section-subtitle, .meal-card, .day-card').forEach(el => {
        observer.observe(el);
    });
}

// Set current day to today
function setCurrentDayToToday() {
    const today = new Date().getDay();
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    AppState.currentDay = dayMap[today];
    
    // Update UI
    document.getElementById('day-select').value = AppState.currentDay;
    updateCurrentDayDisplay();
    renderDailyMeals();
    
    // Scroll to daily view
    document.getElementById('daily-display').scrollIntoView({ behavior: 'smooth' });
    
    showToast(`Viewing meals for ${AppState.dayNames[AppState.currentDay]}`);
}

// Update current day display
function updateCurrentDayDisplay() {
    document.getElementById('current-day').textContent = AppState.dayNames[AppState.currentDay];
}

// Navigate to previous day
function goToPreviousDay() {
    const currentIndex = AppState.days.indexOf(AppState.currentDay);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : AppState.days.length - 1;
    AppState.currentDay = AppState.days[prevIndex];
    
    document.getElementById('day-select').value = AppState.currentDay;
    updateCurrentDayDisplay();
    renderDailyMeals();
}

// Navigate to next day
function goToNextDay() {
    const currentIndex = AppState.days.indexOf(AppState.currentDay);
    const nextIndex = currentIndex < AppState.days.length - 1 ? currentIndex + 1 : 0;
    AppState.currentDay = AppState.days[nextIndex];
    
    document.getElementById('day-select').value = AppState.currentDay;
    updateCurrentDayDisplay();
    renderDailyMeals();
}

// Save meal plan for selected day - SIMPLIFIED WORKING VERSION
function saveMealPlan() {
    console.log('=== SAVE MEAL PLAN STARTED ===');
    
    const selectedDay = document.getElementById('day-select').value;
    console.log('Selected day:', selectedDay);
    
    // Get input values
    const breakfast = document.getElementById('breakfast').value.trim();
    const snack1 = document.getElementById('snack1').value.trim();
    const lunch = document.getElementById('lunch').value.trim();
    const snack2 = document.getElementById('snack2').value.trim();
    const dinner = document.getElementById('dinner').value.trim();
    
    console.log('Input values:', { breakfast, snack1, lunch, snack2, dinner });
    
    // Create or update the day's meal data
    AppState.mealData[selectedDay] = {
        breakfast: breakfast,
        snack1: snack1,
        lunch: lunch,
        snack2: snack2,
        dinner: dinner
    };
    
    console.log('Updated AppState.mealData:', AppState.mealData);
    
    // Save to localStorage
    const saved = saveMealData();
    
    if (saved) {
        // Update current day if needed
        if (selectedDay === AppState.currentDay) {
            console.log('Updating current day display');
            renderDailyMeals();
        } else {
            // Switch to the saved day
            AppState.currentDay = selectedDay;
            document.getElementById('day-select').value = selectedDay;
            updateCurrentDayDisplay();
            renderDailyMeals();
        }
        
        // Update weekly overview
        renderWeeklyOverview();
        
        // Show success message
        showToast(`✅ Meal plan saved for ${AppState.dayNames[selectedDay]}!`);
        
        // Scroll to daily view
        document.getElementById('daily-display').scrollIntoView({ behavior: 'smooth' });
    }
    
    console.log('=== SAVE MEAL PLAN COMPLETED ===');
}

// Clear all meals for selected day
function clearDayMeals() {
    const selectedDay = document.getElementById('day-select').value;
    
    if (confirm(`Clear all meals for ${AppState.dayNames[selectedDay]}?`)) {
        AppState.mealData[selectedDay] = {
            breakfast: '',
            snack1: '',
            lunch: '',
            snack2: '',
            dinner: ''
        };
        
        // Clear form inputs
        document.getElementById('breakfast').value = '';
        document.getElementById('snack1').value = '';
        document.getElementById('lunch').value = '';
        document.getElementById('snack2').value = '';
        document.getElementById('dinner').value = '';
        
        saveMealData();
        
        if (selectedDay === AppState.currentDay) {
            renderDailyMeals();
        }
        
        renderWeeklyOverview();
        showToast(`Cleared meals for ${AppState.dayNames[selectedDay]}`);
    }
}

// Render daily meals for current day - SIMPLIFIED WORKING VERSION
function renderDailyMeals() {
    console.log('Rendering daily meals for:', AppState.currentDay);
    
    const meals = AppState.mealData[AppState.currentDay] || {};
    console.log('Meals data for this day:', meals);
    
    const container = document.getElementById('meals-container');
    container.innerHTML = '';
    
    AppState.mealTypes.forEach((mealType, index) => {
        const meal = meals[mealType.id] || '';
        
        const card = document.createElement('div');
        card.className = `meal-card glass-card ${mealType.id}`;
        card.dataset.delay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="meal-card-header">
                <div class="meal-type">
                    <div class="meal-icon">
                        <i class="fas ${mealType.icon}"></i>
                    </div>
                    <h4>${mealType.name}</h4>
                </div>
                <div class="meal-actions">
                    <button class="edit-btn" onclick="editMeal('${mealType.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" onclick="deleteMeal('${mealType.id}')">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <div class="meal-content">
                ${meal ? `<p>${meal}</p>` : `<p class="empty-meal">No meal planned. Click edit to add one.</p>`}
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Trigger animations
    setTimeout(() => {
        container.querySelectorAll('.meal-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Edit a specific meal (global function)
window.editMeal = function(mealType) {
    console.log('Editing meal:', mealType);
    
    // Scroll to form
    document.getElementById('meal-form-section').scrollIntoView({ behavior: 'smooth' });
    
    // Set current day in form
    document.getElementById('day-select').value = AppState.currentDay;
    
    // Pre-fill all meals
    const meals = AppState.mealData[AppState.currentDay] || {};
    document.getElementById('breakfast').value = meals.breakfast || '';
    document.getElementById('snack1').value = meals.snack1 || '';
    document.getElementById('lunch').value = meals.lunch || '';
    document.getElementById('snack2').value = meals.snack2 || '';
    document.getElementById('dinner').value = meals.dinner || '';
    
    // Focus on the specific input
    const inputId = mealType; // breakfast, snack1, etc.
    const input = document.getElementById(inputId);
    if (input) {
        input.focus();
        input.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.3)';
        setTimeout(() => input.style.boxShadow = '', 2000);
    }
};

// Delete a specific meal (global function)
window.deleteMeal = function(mealType) {
    if (confirm(`Delete ${AppState.mealTypes.find(m => m.id === mealType).name}?`)) {
        if (!AppState.mealData[AppState.currentDay]) {
            AppState.mealData[AppState.currentDay] = {
                breakfast: '',
                snack1: '',
                lunch: '',
                snack2: '',
                dinner: ''
            };
        }
        
        AppState.mealData[AppState.currentDay][mealType] = '';
        saveMealData();
        renderDailyMeals();
        renderWeeklyOverview();
        showToast(`Deleted ${AppState.mealTypes.find(m => m.id === mealType).name}`);
    }
};

// Render weekly overview - SIMPLIFIED WORKING VERSION
function renderWeeklyOverview() {
    console.log('Rendering weekly overview');
    
    const container = document.getElementById('week-grid');
    container.innerHTML = '';
    
    AppState.days.forEach((day, index) => {
        const meals = AppState.mealData[day] || {};
        const hasMeals = Object.values(meals).some(meal => meal && meal.trim() !== '');
        
        const card = document.createElement('div');
        card.className = 'day-card glass-card';
        card.dataset.delay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="day-card-header">
                <h3 class="day-name">${AppState.dayNames[day]}</h3>
                <span class="day-status">${hasMeals ? '✓ Planned' : 'Not Planned'}</span>
            </div>
            <div class="day-meals">
                ${AppState.mealTypes.map(mealType => {
                    const meal = meals[mealType.id] || '';
                    return meal ? `
                        <div class="day-meal-item">
                            <h5><i class="fas ${mealType.icon}"></i> ${mealType.name}</h5>
                            <p>${meal}</p>
                        </div>
                    ` : '';
                }).join('')}
                ${!hasMeals ? '<p class="empty-day">No meals planned</p>' : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Trigger animations
    setTimeout(() => {
        container.querySelectorAll('.day-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Print weekly plan
// Print weekly plan - WORLD CLASS VERSION
function printWeeklyPlan() {
    console.log('Generating world-class printable timetable...');
    
    const printWindow = window.open('', '_blank');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Calculate if any day has meals
    const hasAnyMeals = AppState.days.some(day => {
        const meals = AppState.mealData[day] || {};
        return Object.values(meals).some(meal => meal && meal.trim() !== '');
    });
    
    if (!hasAnyMeals) {
        showToast('No meals to print! Add some meals first.');
        return;
    }
    
    const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NutriPlan | Weekly Meal Timetable</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                /* Print-specific styles */
                @media print {
                    @page {
                        size: A4 landscape;
                        margin: 0.5cm;
                    }
                    
                    body {
                        margin: 0;
                        padding: 20px;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    
                    .no-print {
                        display: none !important;
                    }
                    
                    .print-only {
                        display: block !important;
                    }
                }
                
                /* Base styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #f8fafc 0%, #e4e8f0 100%);
                    color: #1e293b;
                    padding: 30px;
                    min-height: 100vh;
                }
                
                .print-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }
                
                /* Header */
                .print-header {
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    padding: 40px 50px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .print-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.3;
                    animation: float 20s linear infinite;
                }
                
                .logo-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                
                .logo-icon {
                    font-size: 3rem;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
                }
                
                .logo-text h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.8rem;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                }
                
                .logo-text p {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin-top: 5px;
                }
                
                .print-meta {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                    padding: 20px;
                    background: rgba(255,255,255,0.15);
                    border-radius: 16px;
                    backdrop-filter: blur(10px);
                }
                
                .meta-item {
                    text-align: center;
                    flex: 1;
                }
                
                .meta-item h3 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 8px;
                    opacity: 0.9;
                }
                
                .meta-item p {
                    font-size: 1.1rem;
                    font-weight: 500;
                }
                
                /* Timetable Grid */
                .timetable-container {
                    padding: 40px;
                }
                
                .timetable-title {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .timetable-title h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 10px;
                }
                
                .timetable-title p {
                    color: #64748b;
                    font-size: 1.1rem;
                }
                
                .week-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 20px;
                    margin-bottom: 50px;
                }
                
                .day-column {
                    background: #f8fafc;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }
                
                .day-column:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
                }
                
                .day-header {
                    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                    padding: 20px;
                    text-align: center;
                    border-bottom: 2px solid rgba(59, 130, 246, 0.3);
                }
                
                .day-name {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 5px;
                }
                
                .day-date {
                    font-size: 0.9rem;
                    color: #64748b;
                    font-weight: 500;
                }
                
                .meals-list {
                    padding: 20px;
                }
                
                .meal-time {
                    margin-bottom: 25px;
                    padding-bottom: 20px;
                    border-bottom: 1px dashed #e2e8f0;
                }
                
                .meal-time:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .meal-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }
                
                .meal-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    color: white;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                
                .breakfast .meal-icon { background: linear-gradient(135deg, #fcd34d, #f59e0b); }
                .snack1 .meal-icon { background: linear-gradient(135deg, #34d399, #10b981); }
                .lunch .meal-icon { background: linear-gradient(135deg, #f87171, #ef4444); }
                .snack2 .meal-icon { background: linear-gradient(135deg, #60a5fa, #3b82f6); }
                .dinner .meal-icon { background: linear-gradient(135deg, #a78bfa, #8b5cf6); }
                
                .meal-time-title {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e293b;
                }
                
                .meal-content {
                    padding-left: 46px;
                }
                
                .meal-text {
                    color: #475569;
                    line-height: 1.6;
                    font-size: 0.95rem;
                    padding: 8px 12px;
                    background: white;
                    border-radius: 12px;
                    border-left: 4px solid #3b82f6;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                
                .empty-meal {
                    color: #94a3b8;
                    font-style: italic;
                    font-size: 0.9rem;
                    padding: 8px 12px;
                    background: #f8fafc;
                    border-radius: 8px;
                    text-align: center;
                }
                
                /* Weekly Summary */
                .weekly-summary {
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    padding: 40px;
                    border-radius: 20px;
                    margin-top: 40px;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }
                
                .summary-header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                
                .summary-header h3 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 10px;
                }
                
                .summary-header p {
                    color: #64748b;
                    font-size: 1rem;
                }
                
                .summary-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                
                .stat-card {
                    background: white;
                    padding: 25px;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }
                
                .stat-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                    color: #3b82f6;
                }
                
                .stat-value {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 5px;
                }
                
                .stat-label {
                    color: #64748b;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                
                /* Footer */
                .print-footer {
                    background: #1e293b;
                    color: #f1f5f9;
                    padding: 30px;
                    text-align: center;
                    margin-top: 40px;
                    border-radius: 0 0 24px 24px;
                }
                
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .footer-logo i {
                    font-size: 1.5rem;
                    color: #60a5fa;
                }
                
                .footer-logo span {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
                
                .footer-info {
                    text-align: center;
                    flex: 1;
                }
                
                .footer-info p {
                    font-size: 0.9rem;
                    opacity: 0.8;
                    margin: 5px 0;
                }
                
                .print-actions {
                    display: flex;
                    gap: 15px;
                    margin-top: 30px;
                    justify-content: center;
                }
                
                .print-btn {
                    padding: 12px 24px;
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
                }
                
                .print-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
                }
                
                .close-btn {
                    padding: 12px 24px;
                    background: #f1f5f9;
                    color: #64748b;
                    border: none;
                    border-radius: 50px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                }
                
                .close-btn:hover {
                    background: #e2e8f0;
                }
                
                /* Animations */
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(-30px, -30px) rotate(360deg); }
                }
                
                /* Responsive adjustments for print */
                @media screen and (max-width: 1200px) {
                    .week-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                
                @media screen and (max-width: 900px) {
                    .week-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .summary-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media screen and (max-width: 600px) {
                    .week-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .summary-stats {
                        grid-template-columns: 1fr;
                    }
                    
                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                    }
                }
                
                /* Print-specific overrides */
                @media print {
                    .week-grid {
                        grid-template-columns: repeat(7, 1fr) !important;
                    }
                    
                    .day-column {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    
                    .print-actions {
                        display: none !important;
                    }
                    
                    .day-column:hover {
                        transform: none !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-container">
                <!-- Header -->
                <div class="print-header">
                    <div class="logo-section">
                        <i class="fas fa-utensils logo-icon"></i>
                        <div class="logo-text">
                            <h1>NutriPlan</h1>
                            <p>Weekly Meal Timetable</p>
                        </div>
                    </div>
                    
                    <div class="print-meta">
                        <div class="meta-item">
                            <h3><i class="fas fa-calendar-alt"></i> Generated On</h3>
                            <p>${formattedDate}</p>
                        </div>
                        <div class="meta-item">
                            <h3><i class="fas fa-user-circle"></i> Prepared For</h3>
                            <p>Healthy Living</p>
                        </div>
                        <div class="meta-item">
                            <h3><i class="fas fa-heart"></i> Focus</h3>
                            <p>Balanced Nutrition</p>
                        </div>
                    </div>
                </div>
                
                <!-- Timetable -->
                <div class="timetable-container">
                    <div class="timetable-title">
                        <h2>Weekly Meal Schedule</h2>
                        <p>Your comprehensive nutrition plan for the week ahead</p>
                    </div>
                    
                    <div class="week-grid">
                        ${AppState.days.map(day => {
                            const meals = AppState.mealData[day] || {};
                            const hasMeals = Object.values(meals).some(meal => meal && meal.trim() !== '');
                            
                            // Calculate day date (next week from today)
                            const today = new Date();
                            const dayIndex = AppState.days.indexOf(day);
                            const dayDate = new Date(today);
                            dayDate.setDate(today.getDate() + (dayIndex - today.getDay() + 7) % 7);
                            const formattedDayDate = dayDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                            
                            return `
                                <div class="day-column">
                                    <div class="day-header">
                                        <div class="day-name">${AppState.dayNames[day]}</div>
                                        <div class="day-date">${formattedDayDate}</div>
                                    </div>
                                    <div class="meals-list">
                                        ${AppState.mealTypes.map(mealType => {
                                            const meal = meals[mealType.id] || '';
                                            const mealClass = mealType.id;
                                            const mealName = mealType.name;
                                            const mealIcon = mealType.icon;
                                            
                                            return `
                                                <div class="meal-time ${mealClass}">
                                                    <div class="meal-header">
                                                        <div class="meal-icon">
                                                            <i class="fas ${mealIcon}"></i>
                                                        </div>
                                                        <div class="meal-time-title">${mealName}</div>
                                                    </div>
                                                    <div class="meal-content">
                                                        ${meal && meal.trim() !== '' 
                                                            ? `<div class="meal-text">${meal}</div>` 
                                                            : `<div class="empty-meal">— Not planned —</div>`
                                                        }
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <!-- Weekly Summary -->
                    <div class="weekly-summary">
                        <div class="summary-header">
                            <h3>Weekly Nutrition Summary</h3>
                            <p>Overview of your meal planning progress</p>
                        </div>
                        
                        <div class="summary-stats">
                            ${(() => {
                                // Calculate stats
                                const totalMeals = AppState.days.length * AppState.mealTypes.length;
                                let plannedMeals = 0;
                                let emptyDays = 0;
                                
                                AppState.days.forEach(day => {
                                    const meals = AppState.mealData[day] || {};
                                    const dayPlannedMeals = Object.values(meals).filter(meal => meal && meal.trim() !== '').length;
                                    plannedMeals += dayPlannedMeals;
                                    if (dayPlannedMeals === 0) emptyDays++;
                                });
                                
                                const completionRate = Math.round((plannedMeals / totalMeals) * 100);
                                const mostPlannedDay = AppState.days.reduce((most, day) => {
                                    const meals = AppState.mealData[day] || {};
                                    const planned = Object.values(meals).filter(meal => meal && meal.trim() !== '').length;
                                    const mostMeals = Object.values(AppState.mealData[most] || {}).filter(meal => meal && meal.trim() !== '').length;
                                    return planned > mostMeals ? day : most;
                                }, 'monday');
                                
                                return `
                                    <div class="stat-card">
                                        <i class="fas fa-check-circle stat-icon"></i>
                                        <div class="stat-value">${plannedMeals}</div>
                                        <div class="stat-label">Meals Planned</div>
                                    </div>
                                    <div class="stat-card">
                                        <i class="fas fa-chart-line stat-icon"></i>
                                        <div class="stat-value">${completionRate}%</div>
                                        <div class="stat-label">Completion Rate</div>
                                    </div>
                                    <div class="stat-card">
                                        <i class="fas fa-star stat-icon"></i>
                                        <div class="stat-value">${AppState.dayNames[mostPlannedDay]}</div>
                                        <div class="stat-label">Most Planned Day</div>
                                    </div>
                                `;
                            })()}
                        </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="print-footer">
                    <div class="footer-content">
                        <div class="footer-logo">
                            <i class="fas fa-utensils"></i>
                            <span>NutriPlan</span>
                        </div>
                        <div class="footer-info">
                            <p>Plan better. Eat better. Live better.</p>
                            <p>Generated from your personalized meal planner</p>
                        </div>
                        <div class="footer-logo">
                            <i class="fas fa-heart"></i>
                            <span>Healthy Living</span>
                        </div>
                    </div>
                    
                    <div class="print-actions no-print">
                        <button class="print-btn" onclick="window.print()">
                            <i class="fas fa-print"></i> Print Timetable
                        </button>
                        <button class="close-btn" onclick="window.close()">
                            <i class="fas fa-times"></i> Close Window
                        </button>
                    </div>
                </div>
            </div>
            
            <script>
                // Auto-print after a short delay
                setTimeout(() => {
                    console.log('Auto-printing timetable...');
                    window.print();
                }, 1000);
                
                // Show message when print is done
                window.onafterprint = function() {
                    console.log('Print completed or canceled');
                };
            </script>
        </body>
        </html>
    `;
    
    printWindow.document.write(content);
    printWindow.document.close();
    
    // Focus the print window
    printWindow.focus();
    
    showToast('✨ Generating beautiful printable timetable...');
}

// Export meal data as JSON
function exportMealData() {
    const dataStr = JSON.stringify(AppState.mealData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', `nutriplan-${new Date().toISOString().slice(0,10)}.json`);
    link.click();
    
    showToast('Meal data exported!');
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(hideToast, 4000);
}

// Hide toast notification
function hideToast() {
    document.getElementById('toast').classList.remove('show');
}

// Add debug helper
window.debugApp = function() {
    console.log('=== APP DEBUG INFO ===');
    console.log('Current day:', AppState.currentDay);
    console.log('Meal data:', AppState.mealData);
    console.log('LocalStorage data:', localStorage.getItem('nutriplan_mealData'));
    console.log('=== END DEBUG ===');
    
    // Force re-render
    renderDailyMeals();
    renderWeeklyOverview();
    
    alert('Check console for debug info!');
};

// Add test data helper
window.addTestData = function() {
    AppState.mealData = {
        monday: {
            breakfast: 'Oatmeal with berries and almonds',
            snack1: 'Apple with peanut butter',
            lunch: 'Grilled chicken salad with quinoa',
            snack2: 'Greek yogurt with honey',
            dinner: 'Salmon with roasted vegetables'
        },
        tuesday: {
            breakfast: 'Scrambled eggs with avocado toast',
            snack1: 'Protein bar',
            lunch: 'Turkey and cheese sandwich',
            snack2: 'Carrot sticks with hummus',
            dinner: 'Beef stir-fry with rice'
        },
        wednesday: {
            breakfast: 'Smoothie (spinach, banana, protein powder)',
            snack1: 'Handful of mixed nuts',
            lunch: 'Tuna salad wrap',
            snack2: 'Cottage cheese with pineapple',
            dinner: 'Vegetable lasagna'
        }
    };
    
    saveMealData();
    renderDailyMeals();
    renderWeeklyOverview();
    showToast('Test data added!');
};



// Mobile Menu Functions
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuSidebar = document.getElementById('mobile-menu-sidebar');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (mobileMenuBtn && mobileMenuOverlay && mobileMenuSidebar) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            openMobileMenu();
        });
        
        // Close mobile menu
        mobileMenuClose.addEventListener('click', () => {
            closeMobileMenu();
        });
        
        // Close mobile menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', () => {
            closeMobileMenu();
        });
        
        // Close mobile menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuSidebar.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Set up mobile menu button event listeners
        setupMobileMenuButtons();
    }
}

function openMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuSidebar = document.getElementById('mobile-menu-sidebar');
    
    mobileMenuOverlay.classList.add('active');
    mobileMenuSidebar.classList.add('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = 'hidden';
    
    console.log('Mobile menu opened');
}

function closeMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuSidebar = document.getElementById('mobile-menu-sidebar');
    
    mobileMenuOverlay.classList.remove('active');
    mobileMenuSidebar.classList.remove('active');
    
    // Restore body scrolling
    document.body.style.overflow = '';
    
    console.log('Mobile menu closed');
}

function setupMobileMenuButtons() {
    // Mobile Today button
    const mobileTodayBtn = document.getElementById('mobile-today-btn');
    if (mobileTodayBtn) {
        mobileTodayBtn.addEventListener('click', () => {
            setCurrentDayToToday();
            closeMobileMenu();
        });
    }
    
    // Mobile Full Week button
    const mobileFullWeekBtn = document.getElementById('mobile-full-week-btn');
    if (mobileFullWeekBtn) {
        mobileFullWeekBtn.addEventListener('click', () => {
            document.getElementById('weekly-overview').scrollIntoView({ behavior: 'smooth' });
            closeMobileMenu();
        });
    }
    
    // Mobile Add Meal button
    const mobileAddMealBtn = document.getElementById('mobile-add-meal-btn');
    if (mobileAddMealBtn) {
        mobileAddMealBtn.addEventListener('click', () => {
            document.getElementById('meal-form-section').scrollIntoView({ behavior: 'smooth' });
            // Pre-fill form with current day's meals
            const meals = AppState.mealData[AppState.currentDay] || {};
            document.getElementById('breakfast').value = meals.breakfast || '';
            document.getElementById('snack1').value = meals.snack1 || '';
            document.getElementById('lunch').value = meals.lunch || '';
            document.getElementById('snack2').value = meals.snack2 || '';
            document.getElementById('dinner').value = meals.dinner || '';
            closeMobileMenu();
        });
    }
    
    // Mobile Theme Toggle button
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            
            // Update both theme toggle icons
            document.getElementById('theme-toggle').querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
            mobileThemeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
            
            localStorage.setItem('nutriplan_theme', newTheme);
            showToast(`Switched to ${newTheme} mode`);
            closeMobileMenu();
        });
    }
}