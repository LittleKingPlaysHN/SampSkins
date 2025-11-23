import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeaderLink from './HeaderLink';

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const linkFontSize = isMobile ? '0.75rem' : isTablet ? '0.85rem' : '0.9rem';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        color: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: isMobile ? 0.5 : 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: isMobile ? '1rem' : isTablet ? '1.25rem' : '1.5rem',
              fontWeight: 700,
            }}
          >
            Samp King Skines
          </Typography>

          <Stack
            component="nav"
            direction="row"
            spacing={isMobile ? 0.5 : 1}
            alignItems="center"
          >
            <HeaderLink href="/">
              <Typography
                component="span"
                sx={{ fontSize: linkFontSize }}
              >
                SA-MP
              </Typography>
            </HeaderLink>

            <HeaderLink href="/mta">
              <Typography
                component="span"
                sx={{ fontSize: linkFontSize }}
              >
                MTA
              </Typography>
            </HeaderLink>

            {/* Botón Discord */}
            <IconButton
              color="inherit"
              href="https://discord.gg/Fcw7ZbHqjW"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0.5 }}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                style={{ filter: 'invert(1)' }}
              />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://github.com/LittleKingPlaysHN"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0.5 }}
            >
              <GitHubIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
