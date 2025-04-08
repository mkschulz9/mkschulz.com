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
        }}
      />
      <StyledTitle fontSize={40}>{props.name}</StyledTitle>
    </Stack>
  );
};
