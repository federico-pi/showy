import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from '~core/Main';

// The React Query client for caching the data
const queryClient = new QueryClient();

/**
 * The root app component
 */
const App = () => {
  useEffect(() => {
    const init = async () => {
      // Performing multiple sync and async function before dismissing the splashscreen
    };

    init().finally(() => {
      let timeout: ReturnType<typeof setTimeout>;

      timeout = setTimeout(
        async () => await RNBootSplash.hide({ fade: true }),
        1750
      );

      return () => clearTimeout(timeout);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
