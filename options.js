function save_options(){
    var number = document.getElementById('myoptions').value;
    chrome.storage.sync.set({
        favoriteNumber: number,
    }, function(){
       // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function(){
            status.textContent = '';
        }, 2000);
    });
}

// Restores options state using the preferences
// stored in chrome.storage.
function restore_options(){
    // Use default number = 'one'
    chrome.storage.sync.get({
        favoriteNumber: 'one',
    }, function(items){
        document.getElementById('myoptions').value = items.favoriteNumber;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);