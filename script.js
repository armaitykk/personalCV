//Text to speach finction
function startTextToSpeech() {
    // get content, create new synthesis and utterance objects
    const textToSpeak = document.body.innerText;
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', function () {
    const speakButton = document.getElementById('speakButton');
    if (speakButton) {
        speakButton.addEventListener('click', startTextToSpeech);
    }
});