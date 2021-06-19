const buttonRecord = document.querySelector('.button-record');
const content = document.querySelector('.content');
const recording = document.querySelector('.recording');

const recognitionVoice = window.SpeechRecognition || window.webkitSpeechRecognition;
//generate class to call diferents propities
const recognition = new recognitionVoice();

recognition.onstart = () =>{
    recording.innerHTML = `Escuchando... `;
}

recognition.onresult = (event) =>{
    recording.style.display = 'none';
    let mesagge = event.results[0][0].transcript;
    showMessage(mesagge);
}


// launch the record
buttonRecord.addEventListener('click', ()=>{
    recognition.start();
})

// insert mesagge on website
const showMessage = (message) =>{
    
}