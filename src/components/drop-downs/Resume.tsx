import React from 'react';
import { Stack } from '@mui/material';

export const Resume: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        display: 'flex',
        overflow: 'auto',
        bgcolor: 'secondary.main',
        maxWidth: '100%',
        width: '100%',
        pt: 2,
        pb: 2,
        borderRadius: '5px',
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSLH-R5kDEwVW14HjMZT6B1AGI6tVqfLq8jgljeeWmTAQuKoiFJwh1eI7u-wobrFCnePAp8jfeP0H80/pub?embedded=true"
        style={{
          width: '100%',
          maxWidth: '850px',
          height: '750px',
          border: 'none',
        }}
      ></iframe>
    </Stack>
  );
};
