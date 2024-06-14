import { Box, Paper, Stack, Divider } from '@mui/material';
import { IconTextLinks } from './profile-icontext/IconTextLinks';
import { EmailCopyTooltip } from './profile-icontext/CopyEmail';
import { ProfileAvatar } from './profile-icontext/ProfileAvatar';
import { DegreeInformation } from './degree-info/DegreeInformation';

export const SideBar: React.FC = ({}) => {
  const degreeInfoMasters = {
    degreeType: 'M.S.',
    degree: 'Computer Science (Spec. in AI)',
    startDate: new Date('2023-08-21'),
    endDate: new Date('2025-05-10'),
    courses: [
      'Machine Learning',
      'Large Scale Optimization for ML',
      'Design & Analysis of Algorithms',
      'Foundations of AI',
    ],
  };

  const degreeInfoBatchelors = {
    degreeType: 'B.S.',
    degree: 'Computer Science',
    startDate: new Date('2021-09-10'),
    endDate: new Date('2023-06-10'),
    courses: [
      'Computer Architecture',
      'Theory Computation',
      'Probability & Statistics for CS',
      'Web Programming',
      'Artificial Intelligence',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Programming Languages',
      'Deep Learning',
      'Human-Computer Interaction',
    ],
    gpa: '3.8',
  };

  const degreeInfoAssociates = {
    degreeType: 'A.S.',
    degree: 'Computer Science',
    startDate: new Date('2019-09-10'),
    endDate: new Date('2021-05-10'),
    courses: [
      'Calculus I',
      'Object Oriented Programming C++',
      'Calculus II',
      'Linear Algebra',
      'Calculus III',
      'Program Design & Data Structures',
      'Differential Equations',
      'Discrete Mathematics',
    ],
    gpa: '3.57',
  };

  return (
    <Box sx={{ maxWidth: { sm: '55vh' } }}>
      <Paper elevation={6} sx={{ p: 1 }}>
        <ProfileAvatar name="Matthew K. Schulz" />
        <Divider />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            pt: 1,
            pb: 1,
          }}
        >
          <IconTextLinks />
          <EmailCopyTooltip />
        </Stack>
        <Divider />
        <DegreeInformation {...degreeInfoMasters} />
        <Divider sx={{ pt: 1 }} />
        <DegreeInformation {...degreeInfoBatchelors} />
        <Divider sx={{ pt: 1 }} />
        <DegreeInformation {...degreeInfoAssociates} />
      </Paper>
    </Box>
  );
};
