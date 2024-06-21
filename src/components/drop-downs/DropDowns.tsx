import { Stack } from '@mui/material';
import { ExpandableListItem } from '../lib/ExpandableListItem';
import { AboutMe } from './AboutMe';
import { Education } from './blank';
import { ProjectDemos } from './FeaturedProjects';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';

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
        children={<Education />}
        icon={<FlagIcon />}
      ></ExpandableListItem>
    </Stack>
  );
};
