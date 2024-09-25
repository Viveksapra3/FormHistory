// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const historyDiv = document.getElementById('history');
    const clearButton = document.getElementById('clearHistory');

    // Retrieve and display stored data
    chrome.storage.local.get(null, function(items) {
        for (const key in items) {
            const data = items[key];
            const entry = document.createElement('div');
            entry.textContent = `${data.name}: ${data.value} (Saved at: ${data.timestamp})`;
            historyDiv.appendChild(entry);
        }
    });

    // Clear history button functionality
    clearButton.addEventListener('click', function() {
        chrome.storage.local.clear(function() {
            historyDiv.innerHTML = '';
            console.log('History cleared');
        });
    });
});