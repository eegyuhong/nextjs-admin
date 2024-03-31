'use client';

import { Layout, theme } from 'antd';

const { Content } = Layout;

export default function LayoutContent(props: { children: React.ReactNode }) {
  const { colorBgContainer, borderRadiusLG } = theme.useToken().token;

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {props.children}
    </Content>
  );
}
