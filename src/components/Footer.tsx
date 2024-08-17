import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        p: 1,
        textAlign: 'center',
        mt: 1,
      }}
    >
      <Typography variant="caption">
        &copy; {new Date().getFullYear()} Matthew Schulz. All rights reserved.
      </Typography>
    </Stack>
  );
};
