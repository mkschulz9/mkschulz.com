import React from 'react';
import { List, ListItem, Chip } from '@mui/material';
import BulletPoint from '../../lib/BulletPoint';

interface CoursesCompletedProps {
    courses: string[];
    getColor: (index: number) => string;
}

const CoursesCompleted: React.FC<CoursesCompletedProps> = ({ courses, getColor }) => {
    return (
        <BulletPoint label="Courses Completed:">
            <List dense>
                {courses.map((course, index) => (
                    <ListItem key={index}>
                        <Chip
                            label={course}
                            sx={{
                                height: 'auto',
                                padding: '5px',
                                fontSize: '1rem',
                                backgroundColor: getColor(index),
                                color: 'white',
                                '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                },
                                justifyContent: 'start',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </BulletPoint>
    );
};

export default CoursesCompleted;
