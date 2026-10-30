import { useRef, useState } from "react";
import { Volume, VolumeOff } from "@/components/icons";

/**
 * Optional ambient sound. The 6.5 MB track is only requested when the visitor turns it on,
 * so it never slows down the first page load.
 */
const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) {
      const a = new Audio("/peaceful-forest.mp3");
      a.loop = true;
      a.volume = 0.15;
      audioRef.current = a;
    }
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch (err) {
      console.warn("Audio playback failed:", err);
    }
  };

  return (
    <button
      className="icon-btn audio-btn"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Mute background sound" : "Play background sound"}
      title={playing ? "Mute background sound" : "Play background sound"}
    >
      {playing ? <Volume size={18} /> : <VolumeOff size={18} />}
    </button>
  );
};

export default BackgroundAudio;
