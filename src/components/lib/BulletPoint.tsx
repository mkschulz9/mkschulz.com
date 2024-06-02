import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

export interface BulletPointProps {
    label: string;
    children: ReactNode;
}

export const BulletPoint: React.FC<BulletPointProps> = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1
        }}>
            <Typography variant="body2" sx={{ minWidth: '122px' }}>
                &bull; {props.label}
            </Typography>
            {props.children}
        </Box>
    );
};