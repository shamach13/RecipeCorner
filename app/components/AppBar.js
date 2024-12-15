import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content 
        title="RECIPE CORNER" 
        titleStyle={{ textAlign: 'center', flex: 1 }}  // This will center the title
      />
    </Appbar.Header>
  );
};

export default AppBar;
