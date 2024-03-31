'use client';

import { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutContent from './content';
import LayoutSidebar from './sidebar';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <LayoutSidebar collapsed={collapsed} />
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <LayoutContent>{props.children}</LayoutContent>
      </Layout>
    </Layout>
  );
}
