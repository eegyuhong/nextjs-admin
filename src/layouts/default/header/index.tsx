import { Layout, theme } from 'antd';
import SiderTrigger from './components/SiderTrigger';
import BreadCrumb from './components/BreadCrumb';

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Header } = Layout;

export default function LayoutHeader({ collapsed, setCollapsed }: Props) {
  const { colorBgContainer } = theme.useToken().token;
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex items-center">
        <SiderTrigger collapsed={collapsed} setCollapsed={setCollapsed} />
        <BreadCrumb />
      </div>
    </Header>
  );
}
