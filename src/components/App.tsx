import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { SideBar } from './side-bar/SideBar';
import { ResponsiveBox } from './lib/ResponsiveBox';
import { DropDowns } from './drop-downs/DropDowns';

export const App: React.FC = ({}) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 521,
        md: 769,
        lg: 867,
        xl: 1000,
      },
    },
    palette: {
      primary: {
        main: '#1434A4',
      },
      secondary: {
        main: '#FCFCFC',
      },
      background: {
        default: '#F3F4F4',
        paper: '#F3F4F4',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#F3F4F4',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveBox>
        <SideBar />
        <DropDowns />
      </ResponsiveBox>
    </ThemeProvider>
  );
};
