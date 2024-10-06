function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function getLocalStorageNumber(key, defaultValue) {
    const value = localStorage.getItem(key);
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}

function incrementCounter(key) {
    const count = getLocalStorageNumber(key, 0) + 1;
    localStorage.setItem(key, count);
    return count;
}

// Initial visitor and view counts
const INITIAL_UNIQUE_VISITORS = 501;
const INITIAL_VIEW_COUNT = 2034;

// Initialize unique visitors and view counts on the first run
if (localStorage.getItem('unique_visitors') === null) {
    localStorage.setItem('unique_visitors', INITIAL_UNIQUE_VISITORS);
}
if (localStorage.getItem('visit_counter') === null) {
    localStorage.setItem('visit_counter', INITIAL_VIEW_COUNT);
}

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    var uniqueVisitors = incrementCounter('unique_visitors');
} else {
    var uniqueVisitors = getLocalStorageNumber('unique_visitors', INITIAL_UNIQUE_VISITORS);
}

// Increment visit count
const visitCount = incrementCounter('visit_counter');

// Update the DOM elements
document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
