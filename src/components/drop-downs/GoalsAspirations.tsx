import React, { useRef, useState } from 'react';
import { Stack, Popover, Typography, Paper, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import city_roadmap from '../../assets/city_roadmap.jpeg';
import background from '../../assets/background.jpg';
import ClearIcon from '@mui/icons-material/Clear';

const goalsData = [
  {
    id: 1,
    title: '6 Month Goal',
    description:
      'Within six months, I aim to publish at least one research paper based on my work at the USC AutoDrive Lab.',
    left: '-38%',
  },
  {
    id: 2,
    title: '1 Year Goal',
    description:
      'After one year, my goals are to graduate from my Master’s program at USC and receive three job offers for full-time employment.',
    left: '-22%',
  },
  {
    id: 3,
    title: '3 Year Goal',
    description:
      'Within three years, I aim to progress into a team lead position at my current company and lead projects that produce substantial value.',
    left: '-3%',
  },
  {
    id: 4,
    title: '5 Year Goal',
    description:
      'After five years, I aim to start my own tech company that is not only successful but also positively influences the lives of others.',
    left: '-8%',
  },
  {
    id: 5,
    title: '10 Year Goal',
    description:
      'In ten years, I aspire to grow my company to over one million users while keeping the higher purpose of positive impact a focus.',
    left: '15%',
  },
  {
    id: 6,
    title: 'Long-term Vision',
    description:
      'I aim to stay updated with the latest advancements in computer science and give back to young professionals through mentorship.',
    left: '38%',
  },
];

export const GoalsAspirations: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  interface Goal {
    id: number;
    title: string;
    description: string;
    position: { top: string; left: string };
  }
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    goal: any
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedGoal(goal);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedGoal(null);
  };

  return (
    <Stack>
      <Paper
        elevation={3}
        sx={{
          p: 2.5,
          mb: 1.5,
          mt: -1,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">
          Explore my goals and aspirations! This roadmap represents key
          milestones I aim to achieve in the coming years. Each waypoint
          corresponds to a specific goal or vision, marked by its expected time
          frame.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Click on the points below to learn about the progressive goals I have
          set for myself.
        </Typography>
      </Paper>
      <Stack
        ref={anchorRef}
        sx={{
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${city_roadmap})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {goalsData.map(goal => (
          <IconButton
            color="primary"
            key={goal.id}
            sx={{
              left: goal.left,
            }}
            onClick={e => handleClick(e, goal)}
          >
            {
              <Typography
                variant="caption"
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '4px',
                  mr: -0.3,
                }}
              >
                {goal.id}
              </Typography>
            }
            {
              <LocationOnIcon
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '40px',
                }}
              />
            }
          </IconButton>
        ))}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorRef.current}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          sx={{ maxWidth: '88%' }}
        >
          <Stack sx={{ p: 0.5, pl: 1, pr: 1 }}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography color="primary" variant="h6">
                {selectedGoal?.title}
              </Typography>
              <IconButton onClick={handleClose} size="small" color="primary">
                <ClearIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {selectedGoal?.description}
            </Typography>
            <Stack sx={{ alignItems: 'center', pt: 0.5 }}>
              <Typography
                color="primary"
                variant="subtitle1"
                sx={{ fontSize: '0.75rem' }}
              >
                {selectedGoal?.id}
              </Typography>
            </Stack>
          </Stack>
        </Popover>
      </Stack>
    </Stack>
  );
};
