const textInput = document.querySelector('.text');
const buttonRead = document.querySelector('.button-read');

buttonRead.addEventListener('click', ()=>{
    //build properties of what will be read
    const voice = window.speechSynthesis;
    const readerInput = new SpeechSynthesisUtterance(textInput.value);
    // class responsible for speaking
    voice.speak(readerInput);
});