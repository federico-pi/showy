import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Main } from '~core/Main';

EStyleSheet.build({ $rem: 16 });

/**
 * The root app component
 */
const App = () => {
  useEffect(() => {
    // Performing multiple sync and async function before dismissing the splashscreen
    const init = async () => {};

    init().finally(async () => await RNBootSplash.hide({ fade: true }));
  }, []);

  return <Main />;
};

export default App;
