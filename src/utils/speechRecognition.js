// Browser Speech-to-Text via Web Speech Recognition API

let recognition = null;

export function isSpeechRecognitionSupported() {
  return typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
}

export function startListening({ onResult, onEnd, onError, onStart }) {
  if (!isSpeechRecognitionSupported()) {
    if (onError) onError('Speech recognition is not supported in this browser.');
    return null;
  }

  const SpeechRecClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecClass();
  recognition.lang = 'ru-RU';
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    if (onStart) onStart();
  };

  recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    if (onResult) {
      onResult({
        finalText: finalTranscript,
        interimText: interimTranscript,
        isFinal: Boolean(finalTranscript)
      });
    }
  };

  recognition.onerror = (event) => {
    console.warn('Speech recognition error:', event.error);
    if (onError) onError(event.error);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  try {
    recognition.start();
  } catch (err) {
    console.warn('Recognition start exception:', err);
  }

  return recognition;
}

export function stopListening() {
  if (recognition) {
    try {
      recognition.stop();
    } catch {
      // ignore
    }
    recognition = null;
  }
}
