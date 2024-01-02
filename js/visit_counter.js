// Function to generate a unique identifier for a new visitor
function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);

    // Increment unique visitor count
    let uniqueVisitors = localStorage.getItem('unique_visitors');
    uniqueVisitors = uniqueVisitors === null ? 0 : parseInt(uniqueVisitors);
    uniqueVisitors++;
    localStorage.setItem('unique_visitors', uniqueVisitors);
}

// Increment visit count
let visitCount = localStorage.getItem('visit_counter');
visitCount = visitCount === null ? 0 : parseInt(visitCount);
visitCount++;
localStorage.setItem('visit_counter', visitCount);

// Display the counts
document.getElementById('visits').innerHTML = `Total Visits: ${visitCount}`;
document.getElementById('uniqueVisitors').innerHTML = `Unique Visitors: ${localStorage.getItem('unique_visitors')}`;
