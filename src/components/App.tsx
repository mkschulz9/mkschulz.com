import React from 'react';
import { SideBar } from './side-bar/SideBar';
import { ResponsiveBox } from './lib/ResponsiveBox';
import { DropDowns } from './drop-downs/DropDowns';
import { ThemeProvider, createTheme } from '@mui/material';

export const App: React.FC = ({}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1434A4',
      },
      secondary: {
        main: '#F3F4F4',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveBox>
        <SideBar />
        <DropDowns />
      </ResponsiveBox>
    </ThemeProvider>
  );
};
