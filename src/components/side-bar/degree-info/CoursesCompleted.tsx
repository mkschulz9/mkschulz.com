import React, { useEffect, useMemo, useState } from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export interface CoursesCompletedProps {
  courses: string[];
  getColor: (index: number) => string;
  coursesInProgress?: boolean;
}

export const CoursesCompleted: React.FC<CoursesCompletedProps> = props => {
  const courses = useMemo(() => props.courses, [props.courses]);
  const [activeCourse, setActiveCourse] = useState(0);

  useEffect(() => {
    if (courses.length === 0) return undefined;
    const interval = window.setInterval(() => {
      setActiveCourse(prev => (prev + 1) % courses.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [courses.length]);

  const color = props.getColor(activeCourse);

  return (
    <Stack>
      <Typography variant="body2" minWidth={'122px'}>
        &bull;{' '}
        {props.coursesInProgress ? 'Courses In-progress:' : 'Featured Courses:'}
      </Typography>
      <Box sx={{ display: 'inline-flex', width: 'fit-content' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Chip
              label={courses[activeCourse]}
              sx={{
                padding: '4px',
                fontSize: '14px',
                backgroundColor: color,
                color: 'white',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
                m: 0.5,
                borderRadius: '12px',
                boxShadow: '0px 8px 18px rgba(15, 23, 42, 0.35)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Stack>
  );
};
