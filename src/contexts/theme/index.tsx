'use client';

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  DarkModeStatus,
  ThemeAction,
  ThemeReducer,
  ThemeState,
  themeReducer,
} from './reducer';

const ThemeContext = createContext<{
  data: ThemeState;
  dispatch: Dispatch<ThemeAction>;
} | null>(null);

export const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
  const [data, dispatch] = useReducer<ThemeReducer>(themeReducer, {
    darkModeStatus:
      typeof window !== 'undefined'
        ? (localStorage.getItem('theme') as DarkModeStatus) ?? 'light'
        : 'light',
    collapsedSidebar: false,
  });

  return <ThemeContext.Provider value={{ data, dispatch }} {...props} />;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used in ThemeProvider');
  }
  return context;
};
