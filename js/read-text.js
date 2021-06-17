const text = document.querySelector('.text');
const readButton = document.querySelector('button-read');

readButton.addEventListener('click', ()=>{
    //build properties of what will be read
    const speaker = SpeechSynthesisUtterance();
    // class responsible for speaking
    const voice = window.SpeechSynthesis;
    speaker.text = text.nodeValue;
    voice.speak(speaker);
});