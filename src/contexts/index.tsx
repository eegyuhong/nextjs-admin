import { ReactNode } from 'react';
import SessionProvider from './session';
import { ThemeProvider } from './theme';
import AntdConfigProvider from './antd';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <AntdConfigProvider>{children}</AntdConfigProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};
