const { ipcRenderer } = require('electron');

//ELEMENTOS
const textarea = document.getElementById('text');
const title    = document.getElementById('title');

//SET FILE  
ipcRenderer.on('set-file', function (event, data) {
    textarea.value= data.content;
    title.innerHTML = data.name+' | LUCAO EDITOR';
})

//UPDATE TEXTAREA
function handleChangeText(){
    ipcRenderer.send('update-content',textarea.value);
}