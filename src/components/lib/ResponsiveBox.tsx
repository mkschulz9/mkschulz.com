import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface ResponsiveBoxProps {
    children: ReactNode;
}

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                gap: 0.5,
            }}
        >
            {props.children}
        </Box>
    );
};