import { Stack, Avatar } from '@mui/material';
import { StyledTitle } from '../lib/StyledTitle';
import portrait from '../../assets/professional_headshot.jpg';

interface PortraitNameProps {
  name: string;
}

export const PortraitName: React.FC<PortraitNameProps> = props => {
  return (
    <Stack alignItems={'center'}>
      <Avatar
        src={portrait}
        sx={{
          width: { xs: 220, md: 210 },
          height: { xs: 220, md: 210 },
          border: '3px solid rgba(96, 165, 250, 0.6)',
          boxShadow: '0px 15px 40px rgba(59, 130, 246, 0.4)',
        }}
      />
      <StyledTitle fontSize={36}>{props.name}</StyledTitle>
    </Stack>
  );
};
