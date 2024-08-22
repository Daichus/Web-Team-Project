export function createSpeechRecognition (targetDialogue, resultCallback) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        const target = targetDialogue.toLowerCase();

        if (speechResult === target) {
            resultCallback(true);
        } else {
            resultCallback(false);
        }
    };
    return () => recognition.start();

}