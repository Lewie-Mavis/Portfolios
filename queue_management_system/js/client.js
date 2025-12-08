// DOM Elements for Client
const getTicketBtn = document.getElementById('getTicketBtn');
const downloadTicketBtn = document.getElementById('downloadTicketBtn');
const displayTicketNumber = document.getElementById('displayTicketNumber');
const displayDate = document.getElementById('displayDate');
const displayTime = document.getElementById('displayTime');
const displayQueue = document.getElementById('displayQueue');
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');
const announcementText = document.getElementById('announcementText');
const currentTimeElement = document.getElementById('currentTime');

// Application State (shared via localStorage)
let queue = [];
let currentTicketNumber = 0;

// Initialize the client application
function initClient() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    loadFromLocalStorage();
    updateCounterDisplays();
    startClientAutoRefresh();
    
    // Set up event listeners
    setupClientEventListeners();
}

// Set up client event listeners
function setupClientEventListeners() {
    getTicketBtn.addEventListener('click', generateNewTicket);
    downloadTicketBtn.addEventListener('click', printTicket);
}

// Update current time display
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    currentTimeElement.textContent = `${dateString} | ${timeString}`;
}

// Generate a new ticket
function generateNewTicket() {
    loadFromLocalStorage(); // Always load latest data
    
    currentTicketNumber++;
    const ticketNumber = `A${currentTicketNumber.toString().padStart(3, '0')}`;
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const ticket = {
        number: ticketNumber,
        date: dateString,
        time: timeString,
        status: 'waiting',
        calledTo: null,
        calledTime: null,
        timestamp: now.getTime(),
        calledTimestamp: null
    };
    
    queue.push(ticket);
    
    // Update display
    displayTicketNumber.textContent = ticketNumber;
    displayDate.textContent = dateString;
    displayTime.textContent = timeString;
    displayQueue.textContent = `Position: ${queue.length}`;
    
    downloadTicketBtn.disabled = false;
    
    saveToLocalStorage();
    
    alert(`Ticket ${ticketNumber} generated successfully! Your position in queue is ${queue.length}.`);
}

// Print ticket function
function printTicket() {
    const ticketNumber = displayTicketNumber.textContent;
    const date = displayDate.textContent;
    const time = displayTime.textContent;
    const queuePosition = displayQueue.textContent.replace('Position: ', '');
    
    if (ticketNumber === '---') {
        alert('No ticket to print. Please generate a ticket first.');
        return;
    }
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Queue Ticket - ${ticketNumber}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; background: white; }
                .ticket { border: 3px solid #1a73e8; border-radius: 15px; padding: 30px; max-width: 500px; margin: 0 auto; background: linear-gradient(135deg, #f5f7fa, #e4e8f0); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
                .header { text-align: center; margin-bottom: 25px; border-bottom: 2px solid #1a73e8; padding-bottom: 15px; }
                .hospital-name { font-size: 28px; font-weight: bold; color: #1a73e8; margin-bottom: 5px; }
                .system-name { font-size: 16px; color: #666; margin-bottom: 10px; }
                .ticket-number { font-size: 72px; font-weight: bold; color: #1a73e8; text-align: center; margin: 30px 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); }
                .barcode { text-align: center; margin: 25px 0; font-family: "Libre Barcode 128", monospace; font-size: 48px; letter-spacing: 2px; }
                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 25px 0; }
                .info-item { text-align: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #ddd; }
                .info-label { font-size: 12px; color: #666; margin-bottom: 5px; font-weight: bold; text-transform: uppercase; }
                .info-value { font-size: 16px; font-weight: bold; color: #333; }
                .instructions { text-align: center; margin-top: 30px; font-size: 14px; color: #666; line-height: 1.5; padding: 15px; background: rgba(26, 115, 232, 0.1); border-radius: 8px; }
                .footer { text-align: center; margin-top: 25px; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 15px; }
                @media print { body { margin: 0; padding: 10px; } .ticket { box-shadow: none; border-width: 2px; } }
            </style>
        </head>
        <body>
            <div class="ticket">
                <div class="header">
                    <div class="hospital-name">City General Hospital</div>
                    <div class="system-name">Queue Management System</div>
                </div>
                <div class="ticket-number">${ticketNumber}</div>
                <div class="barcode">*${ticketNumber}*</div>
                <div class="info-grid">
                    <div class="info-item"><div class="info-label">Date</div><div class="info-value">${date}</div></div>
                    <div class="info-item"><div class="info-label">Time</div><div class="info-value">${time}</div></div>
                    <div class="info-item"><div class="info-label">Queue Position</div><div class="info-value">${queuePosition}</div></div>
                    <div class="info-item"><div class="info-label">Estimated Wait</div><div class="info-value">15-20 minutes</div></div>
                </div>
                <div class="instructions">
                    <strong>Please keep this ticket with you</strong><br>
                    Wait for your number to be called on the display screens<br>
                    Listen for voice announcements
                </div>
                <div class="footer">
                    <p>Thank you for choosing City General Hospital</p>
                    <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        </body>
        </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
    };
    
    alert('Opening print dialog for your ticket...');
}

// Update counter displays
function updateCounterDisplays() {
    counter1.textContent = '---';
    counter2.textContent = '---';
    counter3.textContent = '---';
    
    const allCalledTickets = queue.filter(t => t.status === 'called' && t.calledTo);
    
    if (allCalledTickets.length > 0) {
        const sortedTickets = [...allCalledTickets].sort((a, b) => {
            return (b.calledTimestamp || 0) - (a.calledTimestamp || 0);
        });
        
        counter1.textContent = sortedTickets[0]?.number || '---';
        counter2.textContent = sortedTickets[1]?.number || '---';
        counter3.textContent = sortedTickets[2]?.number || '---';
    }
}

// Auto-refresh for client display
function startClientAutoRefresh() {
    setInterval(() => {
        loadFromLocalStorage();
        updateCounterDisplays();
        
        // Check if current ticket has been called
        const currentTicket = displayTicketNumber.textContent;
        if (currentTicket !== '---') {
            const ticket = queue.find(t => t.number === currentTicket);
            if (ticket && ticket.status === 'called') {
                announcementText.textContent = `Your ticket ${currentTicket} has been called to ${ticket.calledTo}. Please proceed immediately.`;
                announcementText.style.color = '#34a853';
                announcementText.style.fontWeight = 'bold';
            }
        }
    }, 2000); // Refresh every 2 seconds
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('mediQueueData');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        queue = data.queue || [];
        currentTicketNumber = data.currentTicketNumber || 0;
        
        queue.forEach(ticket => {
            if (!ticket.calledTimestamp && ticket.calledTime) {
                ticket.calledTimestamp = ticket.timestamp + (15 * 60 * 1000);
            }
        });
    }
}

// Save data to localStorage
function saveToLocalStorage() {
    const data = {
        queue: queue,
        currentTicketNumber: currentTicketNumber
    };
    
    localStorage.setItem('mediQueueData', JSON.stringify(data));
}

// Initialize the client application when the page loads
document.addEventListener('DOMContentLoaded', initClient);