import EngineeringIcon from '@mui/icons-material/Engineering';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import React from 'react';

interface ExperienceCardProps {
  year: number;
  title: string;
  institution: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = props => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {props.year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <EngineeringIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography color="text.secondary">{props.institution}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
