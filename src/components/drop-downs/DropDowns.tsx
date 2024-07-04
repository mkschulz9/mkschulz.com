import { Stack } from '@mui/material';
import { ExpandableListItem } from '../lib/ExpandableListItem';
import { WelcomeAboutMe } from './WelcomeAboutMe';
import { GoalsAspirations } from './GoalsAspirations';
import { FeaturedProjects } from './FeaturedProjects';
import { Resume } from './Resume';
import { Feedback } from './Feedback';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';

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
      <ExpandableListItem
        primary="WELCOME & ABOUT ME"
        children={<WelcomeAboutMe />}
        defaultOpen={true}
        icon={<BubbleChartIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="FEATURED PROJECTS"
        children={<FeaturedProjects />}
        icon={<CodeIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="GOALS & ASPIRATIONS"
        children={<GoalsAspirations />}
        icon={<FlagIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="WORK EXPERIENCE"
        children={<Resume />}
        icon={<DescriptionIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="FEEDBACK"
        children={<Feedback />}
        icon={<ForumIcon />}
      ></ExpandableListItem>
    </Stack>
  );
};
