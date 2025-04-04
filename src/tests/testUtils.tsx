import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { render as rtlRender } from '@testing-library/react';

// Custom render function with MantineProvider
export const render = (ui: ReactNode) => {
  return rtlRender(
    <MantineProvider>
      {ui}
    </MantineProvider>
  );
};
