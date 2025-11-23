import { useEffect } from 'react';
import { List, Typography, Box } from '@mui/material';
import NextLink from 'next/link';
import SkinListItem from 'components/SkinListItem';
import skins from 'data/samp.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AudioToggle from 'components/AudioToggle';
import BackgroundEffect from 'components/BackgroundEffect';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Fondo con partículas / efectos */}
      <BackgroundEffect />

      {/* Contenido principal */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, textAlign: 'center', color: '#d50dfdff' }}
        >
          Lista de Skines
        </Typography>

        <List>
          {skins.map((skin) => (
            <div key={skin.id} data-aos="fade-up">
              <NextLink href={`/samp/${skin.id}`} passHref>
                <SkinListItem
                  component="a"
                  skin={{
                    ...skin,
                    image: `https://assets.open.mp/assets/images/skins/${skin.id}.png`,
                    }}
                />
              </NextLink>
            </div>
          ))}
        </List>
      </Box>

      {/* Botón de audio */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1300,
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          borderRadius: '50%',
          bgcolor: 'rgba(0,0,0,0.6)',
        }}
      >
        <AudioToggle />
      </Box>
    </>
  );
}
