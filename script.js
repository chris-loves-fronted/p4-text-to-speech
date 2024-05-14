// @ts-nocheck
const textarea = document.querySelector('textarea');
const speakButton = document.querySelector('button');
let textInput = '';

window.addEventListener('DOMContentLoaded', () => {
    textarea.addEventListener('input', ({ target: { value } }) => {
        textInput = value;
    });

    speakButton.addEventListener('click', () => {
        generateSpeech(textInput, speakButton);
    });
});

function generateSpeech(inputText, button) {
    button.disabled = true;
    button.textContent = '...Speaking';
    const synthesis = new SpeechSynthesisUtterance();

    synthesis.text = inputText;
    synthesis.lang = 'de-DE';

    synthesis.onerror = ({ error }) => {
        console.log(error);
    };

    synthesis.onend = () => {
        button.disabled = false;
        button.textContent = 'Speak';
    };

    speechSynthesis.speak(synthesis);
}
