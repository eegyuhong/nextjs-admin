import { ReactNode } from 'react';
import { ThemeProvider } from './theme';
import AntdConfigProvider from './antd';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <AntdConfigProvider>{children}</AntdConfigProvider>
    </ThemeProvider>
  );
};
