import { Box, Paper, Stack, Divider } from '@mui/material';
import IconTextLinks from './profile-icontext/IconTextLinks';
import { EmailCopyTooltip } from './profile-icontext/CopyEmail';
import ProfileAvatar from './profile-icontext/ProfileAvatar';
import DegreeInformation from './degree-info/DegreeInformation';

export const SideBar: React.FC = () => {
  const degreeInfo = {
    startDate: new Date('2023-08-15'),
    endDate: new Date('2025-05-10'),
    courses: [
      "Machine Learning",
      "Large Scale Optimization for ML",
      "Design/Analysis of Algorithms",
      "Foundations of AI",
    ]
  };

  return (
    <Box sx={{ maxWidth: '20vw', boxSizing: 'border-box' }}>
      <Paper elevation={6} sx={{ width: '100%', minHeight: '96vh', p: { xs: 1, sm: 2, md: 3 } }}>
        <ProfileAvatar name='Matthew Schulz' />
        <Divider sx={{ marginTop: '5px', marginBottom: '-4px' }} />
        <Stack direction="column" spacing={1} alignItems={'flex-start'} sx={{ pt: 2, overflow: 'hidden', flexWrap: 'wrap' }}>
          <IconTextLinks />
          <EmailCopyTooltip />
        </Stack>
        <Divider sx={{ marginTop: '13px', marginBottom: '-20px' }} />
        <DegreeInformation {...degreeInfo} />
      </Paper>
    </Box>
  );
};

export default SideBar;
