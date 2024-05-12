import { Box, Paper, Stack, Divider } from '@mui/material';
import IconTextLinks from './profile-icontext/IconTextLinks';
import { EmailCopyTooltip } from './profile-icontext/CopyEmail';
import ProfileAvatar from './profile-icontext/ProfileAvatar';
import DegreeInformation from './degree-info/DegreeInformation';

export const SideBar: React.FC = () => {
  const degreeInfo = {
    degreeType: "M.S.",
    degree: "Computer Science (AI)",
    startDate: new Date('2023-08-21'),
    endDate: new Date('2025-05-10'),
    courses: [
      "Machine Learning",
      "Large Scale Optimization for ML",
      "Design & Analysis of Algorithms",
      "Foundations of AI",
    ]
  };

  return (
    <Box sx={{ maxWidth: { sm: '55vh' } }}>
      <Paper elevation={6} sx={{ p: 1 }}>
        <ProfileAvatar name='Matthew Schulz' />
        <Divider />
        <Stack sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          pt: 1,
          pb: 1
        }}>
          <IconTextLinks />
          <EmailCopyTooltip />
        </Stack>
        <Divider />
        <DegreeInformation {...degreeInfo} />
      </Paper>
    </Box>
  );
};

export default SideBar;
