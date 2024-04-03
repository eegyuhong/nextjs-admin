'use client';

import { Layout, theme } from 'antd';
import SiderTrigger from './components/SiderTrigger';
import BreadCrumb from './components/BreadCrumb';
import DarkModeTrigger from './components/DarkModeTrigger';
import UserDropdown from './components/UserDropdown';

const { Header } = Layout;

export default function LayoutHeader() {
  const { colorBgContainer } = theme.useToken().token;

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <SiderTrigger />
          <BreadCrumb />
        </div>
        <div className="flex items-center">
          <DarkModeTrigger />
          <UserDropdown />
        </div>
      </div>
    </Header>
  );
}
