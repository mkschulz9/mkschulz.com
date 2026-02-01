import { Paper, Stack, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { EmailCopyTooltip } from './CopyEmail';
import { PortraitName } from './PortraitName';
import { DegreeInformation } from './degree-info/DegreeInformation';
import { IconText } from './IconText';

export const SideBar: React.FC = ({}) => {
  const degreeInfoMasters = {
    degreeType: 'M.S.',
    degree: 'Computer Science (AI/ML Focus)',
    startDate: new Date('2023-08-21'),
    endDate: new Date('2025-05-10'),
    completedCourses: [
      'Machine Learning',
      'Deep Learning',
      'Advanced Computer Vision*',
      'Large Scale Optimization for ML*',
      'Design & Analysis of Algorithms',
      'Foundations of AI',
      'Applied Natural Language Processing',
      'Database Systems',
    ],
    gpa: '3.5',
    defaultOpen: false,
  };

  const degreeInfoBatchelors = {
    degreeType: 'B.S.',
    degree: 'Computer Science',
    startDate: new Date('2021-09-10'),
    endDate: new Date('2023-06-10'),
    completedCourses: [
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
    completedCourses: [
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
    <Stack
      sx={{
        width: '100%',
        maxWidth: { md: '40%', lg: '38%', xl: '30%' },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2,
          background: 'rgba(11, 16, 32, 0.7)',
          border: '1px solid rgba(148, 163, 184, 0.16)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0px 25px 60px rgba(5, 8, 20, 0.45)',
        }}
      >
        <PortraitName name="Matthew K. Schulz" />
        <Divider />
        <Stack
          sx={{
            flexDirection: 'column',
            alignItems: 'left',
            pt: 1,
            pb: 1,
          }}
        >
          <IconText
            Icon={LinkedInIcon}
            href="https://www.linkedin.com/in/matthew--schulz/"
            text="LinkedIn"
          />
          <IconText
            Icon={GitHubIcon}
            href="https://github.com/mkschulz9"
            text="GitHub"
          />
          <IconText Icon={LocationOnIcon} text="Austin, TX" />
          <IconText Icon={HomeIcon} text="Bay Area, CA" />
          <EmailCopyTooltip />
        </Stack>
        <Divider />
        <DegreeInformation {...degreeInfoMasters} />
        <Divider sx={{ pt: 1 }} />
        <DegreeInformation {...degreeInfoBatchelors} />
        <Divider sx={{ pt: 1 }} />
        <DegreeInformation {...degreeInfoAssociates} />
      </Paper>
    </Stack>
  );
};
