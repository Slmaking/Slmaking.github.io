function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

let uniqueVisitors = localStorage.getItem('unique_visitors');
if (uniqueVisitors === null) {
    uniqueVisitors = 108;
    localStorage.setItem('unique_visitors', uniqueVisitors);
    console.log("Initialized unique visitors:", uniqueVisitors);
} else {
    uniqueVisitors = parseInt(uniqueVisitors);
    console.log("Retrieved unique visitors:", uniqueVisitors);
}

let visitorID = localStorage.getItem('visitor_id');
if (visitorID === null) {
    visitorID = generateUniqueID();
    localStorage.setItem('visitor_id', visitorID);
    uniqueVisitors++;
    localStorage.setItem('unique_visitors', uniqueVisitors);
    console.log("New visitor added:", uniqueVisitors);
}

let visitCount = localStorage.getItem('visit_counter');
if (visitCount === null) {
    visitCount = 500;
    localStorage.setItem('visit_counter', visitCount);
    console.log("Initialized visit count:", visitCount);
} else {
    visitCount = parseInt(visitCount);
    visitCount++;
    localStorage.setItem('visit_counter', visitCount);
    console.log("Incremented visit count:", visitCount);
}

document.getElementById('uniqueVisitors').innerHTML = `${uniqueVisitors} visitors and`;
document.getElementById('visitCounter').innerHTML = `${visitCount} views since 2022`;
