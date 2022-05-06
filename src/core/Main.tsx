import React, { ReactElement } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './navigation/Navigator';

/**
 * Main application component
 */
function Main(): ReactElement {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export { Main };
