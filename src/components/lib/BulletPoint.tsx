import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface BulletPointProps {
    label: string;
    children: ReactNode;
    horizontal?: boolean;
}

const BulletPoint: React.FC<BulletPointProps> = ({ label, children, horizontal = false }) => {
    return (
        <Box display={horizontal ? "flex" : "block"} alignItems={horizontal ? "center" : undefined}>
            <Typography variant="body2" sx={{ fontWeight: 700, mr: horizontal ? 1 : 0 }}>
                &bull; {label}
            </Typography>
            {children}
        </Box>
    );
};

export default BulletPoint;
