import { changeCollapsedsideBar, changeDarkModeStatus } from './actions';

export type DarkModeStatus = 'dark' | 'light';

export interface ThemeState {
  darkModeStatus: DarkModeStatus;
  collapsedSidebar: boolean;
}

export interface ThemeAction {
  type: string;
  payload?: any;
}

export type ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
) => ThemeState;

export const ACTION_TYPE = {
  CHANGE_DARKMODE_STATUS: 'darkModeStatus',
  CHANGE_COLLAPSED_SIDEBAR: 'collapsedSidebar',
};

export const themeReducer: ThemeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_DARKMODE_STATUS:
      return changeDarkModeStatus(state, action.payload);
    case ACTION_TYPE.CHANGE_COLLAPSED_SIDEBAR:
      return changeCollapsedsideBar(state, action.payload);
    default:
      return state;
  }
};
