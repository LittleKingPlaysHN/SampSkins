import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  ListItemButtonProps,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SkinData from 'data/SkinData';
import { forwardRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export type SkinListItemProps = ListItemButtonProps & {
  skin: SkinData;
} & Record<string, any>;

export default forwardRef(function SkinListItem(
  { skin, ...rest }: SkinListItemProps,
  ref: any
) {
  const { ref: visibleRef, isVisible } = useOnScreen<HTMLDivElement>();

  const setRefs = (node: HTMLDivElement) => {
    visibleRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <ListItemButton
      ref={setRefs}
      {...rest}
      sx={{
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease',
        bgcolor: 'transparent',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.21)', 
          bgcolor: 'transparent',
        },
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
      }}
    >
      <ListItemAvatar>
        <Avatar
          variant="square"
          sx={{
            width: { xs: 40, sm: 60 },
            height: { xs: 40, sm: 60 },
            '& > img': {
              objectFit: 'cover',
              objectPosition: 'top',
            },
          }}
          src={skin.image}
        />
      </ListItemAvatar>

      <ListItemText
        primary={`ID: ${skin.id}`}
        secondary={`Model: ${skin.model}`}
        primaryTypographyProps={{
          sx: {
            color: '#d400ffff', 
            fontSize: { xs: '0.875rem', sm: '1rem' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        }}
        secondaryTypographyProps={{
          sx: {
            color: '#ffffffff', 
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        }}
      />

      <ListItemSecondaryAction
        sx={{
          right: { xs: 8, sm: 16 },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: { xs: 20, sm: 24 }, color: '#ffffffff' }} />
      </ListItemSecondaryAction>
    </ListItemButton>
  );
});
