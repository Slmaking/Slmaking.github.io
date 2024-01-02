function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
    const count = getLocalStorageNumber(key, 0);
    localStorage.setItem(key, count + 1);
    return count + 1 + offset;
}

// Constants for offsets
const UNIQUE_VISITOR_OFFSET = 118;
const VISIT_COUNT_OFFSET = 522;

// Check if this is a new visitor
let visitorID = localStorage.getItem('visitor_id');
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    uniqueVisitors = incrementCounter('unique_visitors', UNIQUE_VISITOR_OFFSET);
} else {
    uniqueVisitors = getLocalStorageNumber('unique_visitors', 0) + UNIQUE_VISITOR_OFFSET;
}

// Increment visit count
visitCount = incrementCounter('visit_counter', VISIT_COUNT_OFFSET);

// Display the counts
document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
