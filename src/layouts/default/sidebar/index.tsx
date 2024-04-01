'use client';

import { Layout } from 'antd';
import SidebarMenu from './components/Menu';
import SidebarLogo from './components/Logo';
import { useTheme } from '@/contexts/theme';

const { Sider } = Layout;

export default function LayoutSidebar() {
  const { data } = useTheme();
  const { collapsedSidebar } = data;

  return (
    <Sider trigger={null} collapsible collapsed={collapsedSidebar}>
      {<SidebarLogo />}
      {<SidebarMenu />}
    </Sider>
  );
}
