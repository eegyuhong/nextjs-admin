import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ISidebarState {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const NAME = 'collapsedStore';
export const useCollapsedStore = create<ISidebarState>()(
  devtools(
    (set) => ({
      collapsed: false,
      toggleCollapsed: () =>
        set(({ collapsed }) => ({ collapsed: !collapsed })),
    }),
    { name: NAME },
  ),
);
