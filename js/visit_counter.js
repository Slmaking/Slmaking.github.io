function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Offsets
const UNIQUE_VISITOR_OFFSET = 108;
const VISIT_COUNT_OFFSET = 510;

// Retrieve or initialize the unique visitor count
let uniqueVisitors = localStorage.getItem('unique_visitors');
if (uniqueVisitors === null) {
    uniqueVisitors = 0; // Start from 0 if not previously set
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
    visitCount = 0; // Start from 0 if not previously set
} else {
    visitCount = parseInt(visitCount);
}
visitCount++; // Increment visit count
localStorage.setItem('visit_counter', visitCount);

// Display the counts with offsets
document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors + UNIQUE_VISITOR_OFFSET} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount + VISIT_COUNT_OFFSET} views since 2022`;
