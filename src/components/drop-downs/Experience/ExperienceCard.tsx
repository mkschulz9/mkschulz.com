import EngineeringIcon from '@mui/icons-material/Engineering';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography, Collapse } from '@mui/material';
import React, { useState } from 'react';

interface ExperienceCardProps {
  year: number;
  title: string;
  institution: string;
  description: string;
  defaultOpen?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = props => {
  const [expanded, setExpanded] = useState(props.defaultOpen ?? false);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

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
      <TimelineContent sx={{ cursor: 'pointer' }} onClick={toggleDropdown}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography color="text.secondary">{props.institution}</Typography>
        <Collapse in={expanded}>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {props.description}
          </Typography>
        </Collapse>
      </TimelineContent>
    </TimelineItem>
  );
};
