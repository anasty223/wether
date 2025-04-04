import { ReactNode } from 'react';

import { render as rtlRender } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

// Custom render function with MantineProvider
export const render = (ui: ReactNode) => {
  return rtlRender(
    <ChakraProvider>
      {ui}
    </ChakraProvider>
  );
};
