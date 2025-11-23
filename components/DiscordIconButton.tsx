import { IconButton } from '@mui/material';

export default function DiscordIconButton() {
  return (
    <IconButton
      color="inherit"
      href="https://discord.gg/Fcw7ZbHqjW"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg"
        alt="Discord"
        width="24"
        height="24"
        style={{ filter: 'primary' }}
      />
    </IconButton>
  );
}
