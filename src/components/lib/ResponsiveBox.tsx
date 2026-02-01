import { Stack } from '@mui/material';
import { ReactNode } from 'react';

export interface ResponsiveBoxProps {
  children: ReactNode;
}

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = props => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        width: '100%',
        gap: { xs: 2, md: 3 },
        mt: 0.5,
        alignItems: 'flex-start',
      }}
    >
      {props.children}
    </Stack>
  );
};
