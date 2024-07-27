import EngineeringIcon from '@mui/icons-material/Engineering';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography, Collapse, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface ExperienceCardProps {
  year: number;
  title: string;
  institution: string;
  description: string;
  defaultOpen?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = props => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isBtwnMdLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [expanded, setExpanded] = useState(props.defaultOpen ?? false);

  const logScreenWidth = () => {
    console.log('Current screen width:', window.innerWidth);
  };

  useEffect(() => {
    logScreenWidth(); // Log initial width
    window.addEventListener('resize', logScreenWidth); // Log width on resize
    return () => window.removeEventListener('resize', logScreenWidth); // Clean up event listener
  }, []);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent
        m={isXs || isBtwnMdLg ? '' : 'auto 0'}
        mt={isXs || isBtwnMdLg ? 1.5 : ''}
        variant="body2"
        color="text.secondary"
      >
        {props.year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector
          sx={{
            display: isXs || isBtwnMdLg ? 'none' : 'block',
          }}
        />{' '}
        <TimelineDot color="primary" sx={{ justifyContent: 'center' }}>
          <EngineeringIcon />
        </TimelineDot>
        <TimelineConnector
          sx={{
            display: isXs || isBtwnMdLg ? 'none' : 'block',
          }}
        />{' '}
      </TimelineSeparator>
      <TimelineContent sx={{ cursor: 'pointer' }} onClick={toggleDropdown}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography color="text.secondary">{props.institution}</Typography>
        <Collapse in={expanded}>
          <Typography variant="body2" mt={1}>
            {props.description}
          </Typography>
        </Collapse>
      </TimelineContent>
    </TimelineItem>
  );
};
