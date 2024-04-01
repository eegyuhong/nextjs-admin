import { useCollapsedStore } from '@/store';
import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export default function SiderTrigger() {
  const { collapsed, toggleCollapsed } = useCollapsedStore();

  return (
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => toggleCollapsed()}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  );
}
