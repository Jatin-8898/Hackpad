const $notepad = document.getElementById('notepad')
//Since we wanted to sync we used storage in manifest file

$notepad.addEventListener('keyup', () => {
    chrome.storage.sync.set({
        notepad: $notepad.innerText
    })
})

chrome.storage.sync.get('notepad', res => {
    $notepad.innerText = res.notepad
})