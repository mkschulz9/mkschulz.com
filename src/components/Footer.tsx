import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        p: 2,
        textAlign: 'center',
        mt: 1,
        borderRadius: '16px',
        border: '1px solid rgba(148, 163, 184, 0.16)',
        background: 'rgba(11, 16, 32, 0.7)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Typography variant="caption" color="text.secondary">
        &copy; {new Date().getFullYear()} Matthew Schulz. All rights reserved.
      </Typography>
    </Stack>
  );
};
