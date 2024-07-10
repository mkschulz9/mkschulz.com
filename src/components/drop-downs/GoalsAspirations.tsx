import React, { useState } from 'react';
import { Stack, Button, Popover, Typography, Box, Paper } from '@mui/material';
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
    position: { top: '0%', left: '-38%' },
  },
  {
    id: 2,
    title: '1 Year Goal',
    description:
      'After one year, my goals are to graduate from my Master’s program at USC and receive three job offers for full-time employment.',
    position: { top: '20%', left: '-22%' },
  },
  {
    id: 3,
    title: '3 Year Goal',
    description:
      'Within three years, I aim to progress from a new graduate role to a team lead position at my current company.',
    position: { top: '40%', left: '-3%' },
  },
  {
    id: 4,
    title: '5 Year Goal',
    description:
      'After five years, I aim to start my own tech company that is not only successful but also positively influences the lives of others.',
    position: { top: '60%', left: '-8%' },
  },
  {
    id: 5,
    title: '10 Year Goal',
    description:
      'In ten years, I aspire to grow my company to over one million users while keeping the higher purpose of positive impact a focus.',
    position: { top: '76%', left: '15%' },
  },
  {
    id: 6,
    title: 'Long-term Vision',
    description:
      'I aim to continuously stay updated with the latest and greatest advancements in computer science. I aspire to give back to young professionals and students starting in the field through mentorship.',
    position: { top: '92%', left: '38%' },
  },
];

export const GoalsAspirations: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
    <Box>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 2,
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
          Explore an interactive roadmap of my goals and aspirations! This
          visual guide represents key milestones I aim to achieve in the coming
          years. Each waypoint corresponds to a specific goal or vision, marked
          by its expected time frame.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Click on the points on the roadmap to uncover more about the
          progressive goals I have set for myself.
        </Typography>
      </Paper>
      <Stack
        sx={{
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${city_roadmap})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        {goalsData.map(goal => (
          <Button
            key={goal.id}
            sx={{
              top: goal.position.top,
              left: goal.position.left,
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
          </Button>
        ))}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{ maxWidth: '800px' }}
        >
          <Stack sx={{ p: 0.5, pl: 1.5 }}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">{selectedGoal?.title}</Typography>
              <Button onClick={handleClose}>
                <ClearIcon />
              </Button>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {selectedGoal?.description}
            </Typography>
            <Stack sx={{ alignItems: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontSize: '0.75rem' }}>
                {selectedGoal?.id}
              </Typography>
            </Stack>
          </Stack>
        </Popover>
      </Stack>
    </Box>
  );
};
