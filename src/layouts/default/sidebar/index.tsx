'use client';

import { useCollapsedStore } from '@/store';
import { Layout } from 'antd';
import SidebarMenu from './components/Menu';
import SidebarLogo from './components/Logo';

const { Sider } = Layout;

export default function LayoutSidebar() {
  const { collapsed } = useCollapsedStore();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <SidebarLogo />
      <SidebarMenu />
    </Sider>
  );
}
