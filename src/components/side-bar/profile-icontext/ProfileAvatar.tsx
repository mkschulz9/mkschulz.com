import { Stack, Avatar } from '@mui/material';
import { StyledTitle } from '../../lib/StyledTitle';
import davis_portrait from '../../../assets/davis_portrait.jpg';

interface ProfileAvatarProps {
  name: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = props => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        src={davis_portrait}
        sx={{
          width: { xs: 180, sm: 210 },
          height: { xs: 180, sm: 210 },
        }}
      />
      <StyledTitle fontSize={35}>{props.name}</StyledTitle>
    </Stack>
  );
};
