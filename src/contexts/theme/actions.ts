import { DarkModeStatus, ThemeState } from './reducer';

/**
 * change dark mode status
 */
export const changeDarkModeStatus = (
  oldState: ThemeState,
  status: DarkModeStatus,
) => {
  const newState = {
    ...oldState,
    darkModeStatus: status,
  };
  return newState;
};

/**
 * change collapsed sidebar
 */
export const changeCollapsedsideBar = (
  oldState: ThemeState,
  collapsed: boolean,
) => {
  const newState = {
    ...oldState,
    collapsedSidebar: collapsed,
  };
  return newState;
};
