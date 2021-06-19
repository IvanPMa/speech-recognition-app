const textInput = document.querySelector('.text');
const buttonRead = document.querySelector('.button-read');
alert('Las funcionalidades de la app estan en fase experimental, por si no funciona bien algún boton');

buttonRead.addEventListener('click', ()=>{
    //build properties of what will be read
    const voice = window.speechSynthesis;
    const readerInput = new SpeechSynthesisUtterance(textInput.value);
    // class responsible for speaking
    voice.speak(readerInput);
});