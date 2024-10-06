function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2); // Use slice instead of substr
}

function getLocalStorageNumber(key, defaultValue) {
    const value = localStorage.getItem(key);
    if (value === null) {
        return defaultValue;
    }
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}

function incrementCounter(key, offset) {
    let count = getLocalStorageNumber(key, 0); // Get the current count or 0 if not set
    count += 1; // Increment by 1
    localStorage.setItem(key, count); // Store the updated count
    return count + offset; // Add offset when returning (but not to stored value)
}

// Constants for offsets and initial values
const UNIQUE_VISITOR_OFFSET = 118;
const VISIT_COUNT_OFFSET = 522;
const INITIAL_UNIQUE_VISITORS = 501; // Start visitor count at 501
const INITIAL_VIEW_COUNT = 2034; // Start view count at 2034

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
let uniqueVisitors;

// Initialize the unique visitor count only once if not set
if (localStorage.getItem('unique_visitors') === null) {
    localStorage.setItem('unique_visitors', INITIAL_UNIQUE_VISITORS);
}

// Initialize the visit count only once if not set
if (localStorage.getItem('visit_counter') === null) {
    localStorage.setItem('visit_counter', INITIAL_VIEW_COUNT);
}

if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    uniqueVisitors = incrementCounter('unique_visitors', UNIQUE_VISITOR_OFFSET);
} else {
    uniqueVisitors = getLocalStorageNumber('unique_visitors', INITIAL_UNIQUE_VISITORS) + UNIQUE_VISITOR_OFFSET;
}

// Increment visit count
const visitCount = incrementCounter('visit_counter', VISIT_COUNT_OFFSET);

// Ensure the DOM elements exist before updating
const uniqueVisitorsElement = document.getElementById('uniqueVisitors');
const visitCounterElement = document.getElementById('visitCounter');

if (uniqueVisitorsElement) {
    uniqueVisitorsElement.innerHTML = `${uniqueVisitors} visitors and`;
}

if (visitCounterElement) {
    visitCounterElement.innerHTML = `${visitCount} views since 2022`;
}
