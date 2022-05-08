import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import { Main } from '~core/Main';

/**
 * Root application component
 */
const App = () => {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    /**
     * Short timeout before fading the splashscreen
     * For demo purposes only
     */
    timeout = setTimeout(
      async () => await RNBootSplash.hide({ fade: true }),
      2250
    );

    return () => clearTimeout(timeout);
  }, []);

  return <Main />;
};

export default App;
