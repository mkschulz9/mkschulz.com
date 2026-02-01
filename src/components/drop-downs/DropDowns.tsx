import { Stack } from '@mui/material';
import TagManager from 'react-gtm-module';
import { ExpandableList } from '../lib/ExpandableList';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import ForumIcon from '@mui/icons-material/Forum';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { WelcomeAboutMe } from './WelcomeAboutMe';
import { GoalsAspirations } from './GoalsAspirations';
import { FeaturedProjects } from './FeaturedProjects';
import { Experience } from './Experience/Experience';
import { Feedback } from './Feedback';

export interface DropDownsProps {
  activeSection: string | null;
  onSectionChange: (section: string | null) => void;
}
export const DropDowns: React.FC<DropDownsProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const handleToggle =
    (section: string, label: string) => (isOpen: boolean) => {
      onSectionChange(isOpen ? section : null);
      TagManager.dataLayer({
        dataLayer: {
          event: 'dropdown_toggle',
          dropdown_section: section,
          dropdown_label: label,
          dropdown_state: isOpen ? 'open' : 'closed',
        },
      });
    };

  return (
    <Stack
      sx={{
        width: '100%',
        gap: 1.5,
      }}
    >
      <Stack id="about" sx={{ scrollMarginTop: { xs: 120, md: 140 } }}>
        <ExpandableList
          primary="WELCOME & ABOUT ME"
          children={<WelcomeAboutMe />}
          defaultOpen={false}
          expanded={activeSection === 'about'}
          onToggle={handleToggle('about', 'WELCOME & ABOUT ME')}
          icon={<BubbleChartIcon />}
        ></ExpandableList>
      </Stack>
      <Stack id="projects" sx={{ scrollMarginTop: { xs: 120, md: 140 } }}>
        <ExpandableList
          primary="FEATURED PROJECTS"
          children={<FeaturedProjects />}
          expanded={activeSection === 'projects'}
          onToggle={handleToggle('projects', 'FEATURED PROJECTS')}
          icon={<CodeIcon />}
        ></ExpandableList>
      </Stack>
      <Stack id="timeline" sx={{ scrollMarginTop: { xs: 120, md: 140 } }}>
        <ExpandableList
          primary="PROFESSIONAL TIMELINE"
          children={<Experience />}
          expanded={activeSection === 'timeline'}
          onToggle={handleToggle('timeline', 'PROFESSIONAL TIMELINE')}
          icon={<WorkHistoryIcon />}
        ></ExpandableList>
      </Stack>
      <Stack id="goals" sx={{ scrollMarginTop: { xs: 120, md: 140 } }}>
        <ExpandableList
          primary="GOALS & ASPIRATIONS"
          children={<GoalsAspirations />}
          expanded={activeSection === 'goals'}
          onToggle={handleToggle('goals', 'GOALS & ASPIRATIONS')}
          icon={<FlagIcon />}
        ></ExpandableList>
      </Stack>
      {/* <ExpandableList
        primary="FEEDBACK"
        children={<Feedback />}
        icon={<ForumIcon />}
      ></ExpandableList> */}
    </Stack>
  );
};
