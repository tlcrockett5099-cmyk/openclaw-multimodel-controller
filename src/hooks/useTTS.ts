// Web Speech API TTS hook with free-tier char tracking
import { useCallback, useRef } from 'react';
import { useStore } from '../store';
import { FREE_TTS_CHAR_LIMIT } from '../constants';

export function useTTS() {
  const { settings, canUseTTS, recordTTSUsage } = useStore();
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  );

  const speak = useCallback((text: string, onEnd?: () => void) => {
    const synth = synthRef.current;
    if (!synth) return;
    if (!canUseTTS(text.length)) {
      alert(
        `Free TTS limit reached (${FREE_TTS_CHAR_LIMIT} chars/day).\n` +
        `Unlock unlimited TTS with OpenClaw Pro ($5+/month on Patreon).`
      );
      return;
    }
    // Truncate for free users
    const allowed = settings.isPro ? text : text.slice(0, FREE_TTS_CHAR_LIMIT);
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(allowed);
    utt.onend = () => onEnd?.();
    recordTTSUsage(allowed.length);
    synth.speak(utt);
  }, [settings.isPro, canUseTTS, recordTTSUsage]);

  const stop = useCallback(() => {
    synthRef.current?.cancel();
  }, []);

  const isSpeaking = () => synthRef.current?.speaking ?? false;

  return { speak, stop, isSpeaking };
}
