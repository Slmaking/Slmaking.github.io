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

// Constants for offsets
const UNIQUE_VISITOR_OFFSET = 118;
const VISIT_COUNT_OFFSET = 522;

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
let uniqueVisitors;

if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    uniqueVisitors = incrementCounter('unique_visitors', UNIQUE_VISITOR_OFFSET);
} else {
    uniqueVisitors = getLocalStorageNumber('unique_visitors', 0) + UNIQUE_VISITOR_OFFSET;
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
