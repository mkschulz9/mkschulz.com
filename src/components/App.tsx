import React from 'react';
import SideBar from './side-bar/SideBar';
import ResponsiveBox from './lib/ResponsiveBox';
import DropDowns from './drop-downs/DropDowns';



const App: React.FC = () => {
  return (
    <ResponsiveBox>
      <SideBar />
      <DropDowns />
    </ResponsiveBox >
  );
};

export default App;