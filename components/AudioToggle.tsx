import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function AudioToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src="https://stream.revma.ihrhls.com/zc7427" loop />
      <IconButton
        onClick={() => setPlaying(!playing)}
        sx={{
          bgcolor: 'rgba(0,0,0,0.6)',
          color: '#ffffffff', 
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
          width: 48,
          height: 48,
        }}
        aria-label={playing ? 'Silenciar música' : 'Reproducir música'}
      >
        {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </>
  );
}
