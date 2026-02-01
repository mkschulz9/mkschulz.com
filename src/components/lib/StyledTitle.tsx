import { styled, Typography } from '@mui/material';

interface StyledTitleProps {
  fontSize: number;
}

export const StyledTitle = styled(Typography)<StyledTitleProps>(
  ({ fontSize }) => ({
    textAlign: 'center',
    fontSize: `${fontSize}px`,
    fontFamily: 'Space Grotesk, Manrope, sans-serif',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
  })
);
