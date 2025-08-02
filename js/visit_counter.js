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

// Custom starting values
const INITIAL_UNIQUE_VISITORS = 569;
const INITIAL_VIEW_COUNT = 3011;

// Only initialize once per device/browser
if (localStorage.getItem('unique_visitors') === null) {
    localStorage.setItem('unique_visitors', INITIAL_UNIQUE_VISITORS);
}
if (localStorage.getItem('visit_counter') === null) {
    localStorage.setItem('visit_counter', INITIAL_VIEW_COUNT);
}

// Unique visitor setup
let visitorID = localStorage.getItem('visitor_id');
let uniqueVisitors;
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    uniqueVisitors = incrementCounter('unique_visitors');
} else {
    uniqueVisitors = getLocalStorageNumber('unique_visitors', INITIAL_UNIQUE_VISITORS);
}

// Count every visit
const visitCount = incrementCounter('visit_counter');

// Safely update DOM when it's loaded
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
    document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
});
