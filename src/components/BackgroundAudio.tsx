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
      audio.volume = 0.2; // Set a gentle volume
      
      const handleCanPlay = () => {
        setIsLoaded(true);
      };

      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('loadeddata', handleLoadedData);
      
      // Preload the audio
      audio.load();
      
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('loadeddata', handleLoadedData);
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
        preload="metadata"
        muted={isMuted}
        crossOrigin="anonymous"
      >
        <source src={audioUrl} type="audio/mpeg" />
        {/* Fallback to a data URL with a simple peaceful tone */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCR5u4OOuUT4T" type="audio/wav" />
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