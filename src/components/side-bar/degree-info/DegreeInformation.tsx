import React from 'react';
import { LinearProgress, Box, Stack, Typography } from '@mui/material';
import BulletPoint from '../../lib/BulletPoint';
import CoursesCompleted from './CoursesCompleted';

interface DegreeInformationProps {
    startDate: Date;
    endDate: Date;
    courses: string[];
}

const DegreeInformation: React.FC<DegreeInformationProps> = ({
    startDate,
    endDate,
    courses
}) => {
    const calculateCompletionPercentage = () => {
        const start = startDate.getTime();
        const end = endDate.getTime();
        const now = new Date().getTime();

        if (now >= end) return 100;
        if (now < start) return 0;
        return ((now - start) / (end - start)) * 100;
    };

    const completionPercentage = calculateCompletionPercentage();
    const graduationDate = endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const colors = ['#e57373', '#64b5f6', '#81c784', '#ffb74d', '#ba68c8'];
    const getColor = (index: number) => colors[index % colors.length];


    return (
        <Box sx={{ width: '100%', mt: 2, overflow: 'auto' }}>
            <Typography variant="h6" padding={1.5} textAlign='center'>M.S. Degree Information:</Typography>
            <Stack direction="column" spacing={1}>
                <BulletPoint label="Degree Progress:">
                    <Stack direction="column" spacing={0.5} textAlign='center'>
                        <LinearProgress variant="determinate" value={completionPercentage} sx={{ width: '100%' }} />
                        <Typography variant="body2" sx={{ fontSize: '0.78rem', mt: 0.5 }}>
                            ({completionPercentage.toPrecision(2)}% Complete)
                        </Typography>
                    </Stack>
                </BulletPoint>
                <BulletPoint label="Exp. Graduation:" horizontal={true}>
                    <Typography sx={{ fontSize: '0.85rem', mt: 0.5 }}>{graduationDate}</Typography>
                </BulletPoint>
                <CoursesCompleted courses={courses} getColor={getColor} />
            </Stack>
        </Box>
    );
};

export default DegreeInformation;
