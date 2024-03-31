import { Layout } from 'antd';
import SidebarMenu from './components/Menu';
import SidebarLogo from './components/Logo';

interface Props {
  collapsed: boolean;
}

const { Sider } = Layout;

export default function LayoutSidebar({ collapsed }: Props) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <SidebarLogo />
      <SidebarMenu />
    </Sider>
  );
}
