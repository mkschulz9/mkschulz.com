import { styled, Typography } from '@mui/material';

interface StyledTitleProps {
  fontSize: number;
}

export const StyledTitle = styled(Typography)<StyledTitleProps>(({ fontSize }) => ({
  textAlign: 'left',
  fontSize: `${fontSize}px`,
  fontFamily: 'Comfortaa',
  fontWeight: 'bold',
}));
