import React from 'react';
import { LinearProgress, Box, Stack, Typography } from '@mui/material';
import BulletPoint from '../../lib/BulletPoint';
import CoursesCompleted from './CoursesCompleted';
import uscLogo from '../../../assets/usc_logo.png';
import ucdavisLogo from '../../../assets/ucdavis_logo.png';

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

    const colors = [
        '#c62828', // Dark Red
        '#1565c0', // Dark Blue
        '#2e7d32', // Dark Green
        '#ef6c00', // Dark Orange
        '#6a1b9a', // Dark Purple
        '#00838f', // Dark Teal
        '#f9a825', // Dark Yellow
        '#5d4037', // Dark Brown
        '#455a64', // Dark Grey Blue
        '#512da8', // Deep Purple
        '#ad1457', // Dark Pink
        '#283593', // Dark Indigo
        '#0277bd', // Dark Light Blue
        '#558b2f', // Dark Light Green
        '#9e9d24', // Dark Lime
        '#d84315', // Deep Dark Orange
        '#757575', // Dark Grey
        '#4e342e', // Dark Deep Brown
        '#d81b60', // Deep Pink
        '#3f51b5'  // Indigo
    ];

    const getColor = (index: number) => colors[index % colors.length];

    let logo = null;
    if (degreeType === 'M.S.') {
        logo = uscLogo;
    } else {
        logo = ucdavisLogo;
    }

    return (
        <Box sx={{ pt: 1 }}>
            <Stack spacing={0.25} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 0.75 }}>
                    <img src={logo} style={{ maxWidth: '70%', height: 'auto' }} />
                </Box>
                <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Typography variant="body2">
                        &bull; Degree: {degreeType} {degree}
                    </Typography>
                </Stack>
                <BulletPoint label="Degree Progress:">
                    <Stack justifyContent='center'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            alignItems: 'center',
                            pt: 0.25
                        }}>
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
