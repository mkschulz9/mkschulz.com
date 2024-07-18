import { Stack } from '@mui/material';
import { ExpandableList } from '../lib/ExpandableList';
import { WelcomeAboutMe } from './WelcomeAboutMe';
import { GoalsAspirations } from './GoalsAspirations';
import { FeaturedProjects } from './FeaturedProjects';
import { Experience } from './Experience/Experience';
import { Feedback } from './Feedback';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import ForumIcon from '@mui/icons-material/Forum';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const DropDowns: React.FC = ({}) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 0.5,
      }}
    >
      <ExpandableList
        primary="WELCOME & ABOUT ME"
        children={<WelcomeAboutMe />}
        defaultOpen={true}
        icon={<BubbleChartIcon />}
      ></ExpandableList>
      <ExpandableList
        primary="FEATURED PROJECTS"
        children={<FeaturedProjects />}
        icon={<CodeIcon />}
      ></ExpandableList>
      <ExpandableList
        primary="EXPERIENCE"
        children={<Experience />}
        icon={<WorkHistoryIcon />}
      ></ExpandableList>
      <ExpandableList
        primary="GOALS & ASPIRATIONS"
        children={<GoalsAspirations />}
        icon={<FlagIcon />}
      ></ExpandableList>
      <ExpandableList
        primary="FEEDBACK"
        children={<Feedback />}
        icon={<ForumIcon />}
      ></ExpandableList>
    </Stack>
  );
};
