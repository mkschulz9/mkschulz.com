import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface BulletPointProps {
    label: string;
    children: ReactNode;
}

const BulletPoint: React.FC<BulletPointProps> = ({ label, children }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1
        }}>
            <Typography variant="body2" sx={{ minWidth: '122px' }}>
                &bull; {label}
            </Typography>
            {children}
        </Box>
    );
};

export default BulletPoint;
