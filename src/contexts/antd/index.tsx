'use client';

import { ConfigProvider, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from '../theme';

const { darkAlgorithm, defaultAlgorithm } = theme;

export default function AntdConfigProvider(props: {
  children: React.ReactNode;
}) {
  const {
    data: { darkModeStatus },
  } = useTheme();

  const isDarkMode =
    darkModeStatus === 'dark' ||
    (darkModeStatus === 'system' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? true
      : false;

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {props.children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
