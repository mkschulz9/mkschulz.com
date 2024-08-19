import React from 'react';
import { Chip, Stack, Typography } from '@mui/material';

export interface CoursesCompletedProps {
  courses: string[];
  getColor: (index: number) => string;
  coursesInProgress?: boolean;
}

export const CoursesCompleted: React.FC<CoursesCompletedProps> = props => {
  return (
    <Stack>
      <Typography variant="body2" minWidth={'122px'}>
        &bull;{' '}
        {props.coursesInProgress
          ? 'Courses In-progress:'
          : 'Courses Completed:'}
      </Typography>
      <Stack direction="row" flexWrap="wrap" width={'100%'}>
        {props.courses.map((course, index) => (
          <Chip
            key={index}
            label={course}
            sx={{
              padding: '4px',
              fontSize: '14px',
              backgroundColor: props.getColor(index),
              color: 'white',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
              },
              m: 0.5,
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
