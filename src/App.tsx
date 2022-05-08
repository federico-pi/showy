import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import { Main } from '~core/Main';

/**
 * The root application component
 */
const App = () => {
  useEffect(() => {
    const init = async () => {
      // Performing multiple sync and async function before dismissing the splashscreen
    };

    init().finally(() => {
      let timeout: ReturnType<typeof setTimeout>;

      /**
       * Adding a short timeout before fading the splashscreen
       * For demo purposes only
       */
      timeout = setTimeout(
        async () => await RNBootSplash.hide({ fade: true }),
        2250
      );

      return () => clearTimeout(timeout);
    });
  }, []);

  return <Main />;
};

export default App;
