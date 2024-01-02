// Function to generate a unique identifier for a new visitor
function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Initialize or retrieve the unique visitor count
let uniqueVisitors = localStorage.getItem('unique_visitors');
if (uniqueVisitors === null) {
    uniqueVisitors = 118; // Starting with 118 unique visitors
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

// Initialize or retrieve the visit count
let visitCount = localStorage.getItem('visit_counter');
if (visitCount === null) {
    visitCount = 512; // Starting with 512 visits
    localStorage.setItem('visit_counter', visitCount);
} else {
    visitCount = parseInt(visitCount);
    visitCount++;
    localStorage.setItem('visit_counter', visitCount);
}

// Display the counts
document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
