import { List, Typography, Box } from '@mui/material';
import NextLink from 'next/link';
import SkinListItem from 'components/SkinListItem';
import skins from 'data/mta.json';
import AudioToggle from 'components/AudioToggle';
import BackgroundEffect from 'components/BackgroundEffect';

export default function MtaPage() {
  return (
    <>
      {/* Fondo negro con partículas azules */}
      <BackgroundEffect />

      {/* Contenido principal */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, textAlign: 'center', color: '#ea00ffff' }}
        >
          Lista de Skines
        </Typography>

        <List>
          {skins.map((skin) => (
            <NextLink href={`/mta/${skin.id}`} passHref key={skin.id}>
              <SkinListItem component="a" skin={skin} />
            </NextLink>
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

