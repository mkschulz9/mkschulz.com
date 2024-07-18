import React from 'react';
import { SideBar } from './side-bar/SideBar';
import { ResponsiveBox } from './lib/ResponsiveBox';
import { DropDowns } from './drop-downs/DropDowns';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export const App: React.FC = ({}) => {
  const theme = createTheme({
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
