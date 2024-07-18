import { Timeline } from '@mui/lab';
import React from 'react';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = ({}) => {
  return (
    <Timeline position="alternate">
      <ExperienceCard
        year={2021}
        title="Graduated with A.S. in Computer Science"
        institution="Diablo Valley College"
      />
      <ExperienceCard
        year={2022}
        title="Lead Software Engineer/Mentor"
        institution="SchedGo (now EduRoute)"
      />
      <ExperienceCard
        year={2023}
        title="Graduated with B.S. in Computer Science"
        institution="University of California, Davis"
      />
      <ExperienceCard
        year={2023}
        title="STEM Instructor"
        institution="STEMNETICS"
      />
      <ExperienceCard
        year={2024}
        title="ML Student Researcher"
        institution="USC AutoDrive Lab"
      />
      <ExperienceCard
        year={2024}
        title="Integration Engineer Intern"
        institution="NASA Deep Space Network (Peraton)"
      />
    </Timeline>
  );
};
