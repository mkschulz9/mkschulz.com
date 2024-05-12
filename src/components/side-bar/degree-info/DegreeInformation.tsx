import React from 'react';
import { LinearProgress, Box, Stack, Typography } from '@mui/material';
import BulletPoint from '../../lib/BulletPoint';
import CoursesCompleted from './CoursesCompleted';
import { StyledTitle } from '../../lib/StyledTitle';

interface DegreeInformationProps {
    degreeType: string,
    degree: string,
    startDate: Date;
    endDate: Date;
    courses: string[];
}

const DegreeInformation: React.FC<DegreeInformationProps> = ({
    degreeType,
    degree,
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
        <Box sx={{ pt: 1 }}>
            <Stack spacing={0.25} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}>
                <StyledTitle fontSize={20}>{degreeType} {degree}:</StyledTitle>
                <BulletPoint label="Degree Progress:">
                    <Stack justifyContent='center' sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', pt: 0.25 }}>
                        <LinearProgress variant="determinate" value={completionPercentage} sx={{ width: '90%' }} />
                        <Typography variant="body2" sx={{ fontSize: '10px', mt: 0.5 }}>
                            ({completionPercentage.toPrecision(2)}% Complete)
                        </Typography>
                    </Stack>
                </BulletPoint>
                <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Typography variant="body2">
                        &bull; Graduation: {graduationDate}
                    </Typography>
                </Stack>
                <CoursesCompleted courses={courses} getColor={getColor} />
            </Stack >
        </Box >
    );
};

export default DegreeInformation;
