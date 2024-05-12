import React from 'react';
import { Stack } from '@mui/material';
import SideBar from './side-bar/SideBar';
import ResponsiveBox from './lib/ResponsiveBox';

const App: React.FC = () => {
  return (
    <ResponsiveBox>
      <SideBar />
      <Stack sx={{ border: '2px solid grey', width: '100%', }}>PLACEHOLDER</Stack>
    </ResponsiveBox>
  );
};

export default App;
//<ExpandableListItem primary="Education" children={undefined}></ExpandableListItem>
//<ExpandableListItem primary="Work Experience" children={undefined}></ExpandableListItem>
//<ExpandableListItem primary="Projects" children={undefined}></ExpandableListItem>
//<ExpandableListItem primary="Leadership & Involvement" children={undefined}></ExpandableListItem>