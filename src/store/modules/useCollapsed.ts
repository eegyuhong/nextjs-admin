import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SidebarState {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const NAME = 'collapsedStore';
export const useCollapsedStore = create<SidebarState>()(
  devtools(
    (set) => ({
      collapsed: false,
      toggleCollapsed: () =>
        set(({ collapsed }) => ({ collapsed: !collapsed })),
    }),
    { name: NAME },
  ),
);
