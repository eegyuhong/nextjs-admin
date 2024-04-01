'use client';

import { Layout, theme } from 'antd';
import SidebarMenu from './components/Menu';
import SidebarLogo from './components/Logo';
import { useTheme } from '@/contexts/theme';

const { Sider } = Layout;

export default function LayoutSidebar() {
  const { colorBgLayout } = theme.useToken().token;
  const { data } = useTheme();
  const { collapsedSidebar } = data;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsedSidebar}
      style={{ background: colorBgLayout }}
    >
      <SidebarLogo />
      <SidebarMenu />
    </Sider>
  );
}
