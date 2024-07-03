import { Stack } from '@mui/material';
import { ExpandableListItem } from '../lib/ExpandableListItem';
import { AboutMe } from './AboutMe';
import { GoalsAspirations } from './GoalsAspirations';
import { ProjectDemos } from './FeaturedProjects';
import { Resume } from './Resume';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import DescriptionIcon from '@mui/icons-material/Description';

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
        children={<AboutMe />}
        defaultOpen={true}
        icon={<BubbleChartIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="FEATURED PROJECTS"
        children={<ProjectDemos />}
        icon={<CodeIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="GOALS & ASPIRATIONS"
        children={<GoalsAspirations />}
        icon={<FlagIcon />}
      ></ExpandableListItem>
      <ExpandableListItem
        primary="Resume"
        children={<Resume />}
        icon={<DescriptionIcon />}
      ></ExpandableListItem>
    </Stack>
  );
};
