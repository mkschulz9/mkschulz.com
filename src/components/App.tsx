import React from 'react';
import { Box, Stack, Typography, Avatar, Paper } from '@mui/material';
import SideBar from './side-bar/SideBar';
import { ExpandableListItem } from './lib/ExpandableListItem';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ExpandableListItem primary="Education" children={undefined}></ExpandableListItem>
        <ExpandableListItem primary="Work Experience" children={undefined}></ExpandableListItem>
        <ExpandableListItem primary="Projects" children={undefined}></ExpandableListItem>
        <ExpandableListItem primary="Leadership & Involvement" children={undefined}></ExpandableListItem>
      </Box>
    </Box>
  );
};

export default App;
