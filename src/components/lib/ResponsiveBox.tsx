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
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        gap: 0.5,
      }}
    >
      {props.children}
    </Stack>
  );
};
