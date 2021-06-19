const textInput = document.querySelector('.text');
const buttonRead = document.querySelector('.button-read');
alert('LAdvertencia! Está es una aplicación en desarrollo, por lo que algunas funciones pueden no ejecutarse correctamente');

buttonRead.addEventListener('click', ()=>{
    //build properties of what will be read
    const voice = window.speechSynthesis;
    const readerInput = new SpeechSynthesisUtterance(textInput.value);
    // class responsible for speaking
    voice.speak(readerInput);
});