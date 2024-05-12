import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ResponsiveBoxProps {
    children: ReactNode;
}

const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                gap: 0.5,
            }}
        >
            {children}
        </Box>
    );
};

export default ResponsiveBox;
