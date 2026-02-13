export function saveSelection(serviceName) {
    localStorage.setItem('lastServiceViewed', serviceName);
    console.log("Saved service to Local Storage:", serviceName);
}
