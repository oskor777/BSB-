import { useState, useEffect, useCallback, useRef } from 'react';
import { speakText, stopSpeech, isSpeaking as checkIsSpeaking } from '../utils/speechUtils';

export function useSpeech() {
  const [speakingId, setSpeakingId] = useState(null);
  const activeIdRef = useRef(null);

  const stop = useCallback(() => {
    stopSpeech();
    activeIdRef.current = null;
    setSpeakingId(null);
  }, []);

  const speak = useCallback((text, id = 'default', onFinished) => {
    if (activeIdRef.current === id) {
      stop();
      return;
    }

    activeIdRef.current = id;
    setSpeakingId(id);

    speakText(text, {
      onEnd: () => {
        if (activeIdRef.current === id) {
          activeIdRef.current = null;
          setSpeakingId(null);
        }
        if (onFinished) onFinished();
      },
      onError: () => {
        if (activeIdRef.current === id) {
          activeIdRef.current = null;
          setSpeakingId(null);
        }
      }
    });
  }, [stop]);

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  return {
    speakingId,
    isSpeaking: Boolean(speakingId),
    speak,
    stop,
    isSpeakingId: (id) => speakingId === id
  };
}
