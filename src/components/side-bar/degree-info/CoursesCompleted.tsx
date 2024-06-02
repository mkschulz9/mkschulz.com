import React from 'react';
import { Chip, Stack, Box, Typography } from '@mui/material';

export interface CoursesCompletedProps {
    courses: string[];
    getColor: (index: number) => string;
}

export const CoursesCompleted: React.FC<CoursesCompletedProps> = (props) => {
    return (
        <Box>
            <Typography variant="body2" sx={{ minWidth: '122px' }}>
                &bull; Courses Completed:
            </Typography>
            <Stack direction="row" flexWrap="wrap" sx={{
                width: '100%'
            }}>
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
                            m: 0.5
                        }}
                    />
                ))}
            </Stack>
        </Box >
    );
};
