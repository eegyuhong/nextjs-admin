'use client';

import { ConfigProvider, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from '../theme';

const { darkAlgorithm, defaultAlgorithm } = theme;

export default function AntdConfigProvider(props: {
  children: React.ReactNode;
}) {
  const { data } = useTheme();
  const { darkModeStatus } = data;

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm:
            darkModeStatus === 'dark' ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {props.children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
