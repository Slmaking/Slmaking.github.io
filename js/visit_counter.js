function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Retrieve or initialize the unique visitor count
let uniqueVisitors = localStorage.getItem('unique_visitors');
if (uniqueVisitors === null) {
    uniqueVisitors = 108; // Start from 108 if not previously set
    localStorage.setItem('unique_visitors', uniqueVisitors);
} else {
    uniqueVisitors = parseInt(uniqueVisitors);
}

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);

    // Increment unique visitor count
    uniqueVisitors++;
    localStorage.setItem('unique_visitors', uniqueVisitors);
}

// Retrieve or initialize the visit count
let visitCount = localStorage.getItem('visit_counter');
if (visitCount === null) {
    visitCount = 500; // Start from 500 if not previously set
} else {
    visitCount = parseInt(visitCount);
}
visitCount++; // Increment visit count
localStorage.setItem('visit_counter', visitCount);

// Display the counts
document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
