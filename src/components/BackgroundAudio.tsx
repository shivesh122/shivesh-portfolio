import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackgroundAudio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a peaceful forest ambience sound
  const audioUrl = "/peaceful-forest.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.15; // Set a gentle volume
      audio.preload = "auto";
      
      const handleCanPlay = () => {
        setIsLoaded(true);
      };

      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      const handleError = (e: Event) => {
        console.log('Audio loading error:', e);
        setIsLoaded(false);
      };

      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('error', handleError);
      
      // Ensure audio loads properly
      if (audio.readyState >= 2) {
        setIsLoaded(true);
      }
      
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    if (isMuted) {
      try {
        await audio.play();
        setIsMuted(false);
      } catch (error) {
        console.log('Audio play failed:', error);
      }
    } else {
      audio.pause();
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        preload="auto"
        muted={isMuted}
        playsInline
      >
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <Button
        onClick={toggleMute}
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 transition-all duration-200 shadow-lg"
        title={isMuted ? "Play peaceful sounds" : "Pause peaceful sounds"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Volume2 className="h-5 w-5 text-primary" />
        )}
      </Button>
    </div>
  );
};

export default BackgroundAudio;