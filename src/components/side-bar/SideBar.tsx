import { Box, Paper, Stack, Avatar } from '@mui/material';
import davis_portrait from '../../assets/davis_portrait.jpg';
import { StyledTitle } from '../lib/StyledTitle';
import { EmailCopyTooltip } from './CopyEmail';
import SocialLinks from './SocialLinks';

export const SideBar: React.FC = () => {
  return (
    <Paper elevation={6} sx={{ minHeight: '93.5vh', p: 2 }}>
      <Box>
        <Stack spacing={1} alignItems="center">
          <Avatar
            alt="Matthew Schulz"
            src={davis_portrait}
            sx={{
              width: { xs: 140, sm: 160, md: 190 },
              height: { xs: 140, sm: 160, md: 190 },
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
          <StyledTitle>Matthew Schulz</StyledTitle>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="left" sx={{ pt: 2 }}>
          <SocialLinks />
          <EmailCopyTooltip />
        </Stack>
      </Box>
    </Paper>
  );
};

export default SideBar;
