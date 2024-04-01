'use client';

import { useTheme } from '@/contexts/theme';
import NextTopLoader from 'nextjs-toploader';

export default function LayoutTopLoader() {
  const {
    data: { darkModeStatus },
  } = useTheme();
  const isDarkMode = darkModeStatus == 'dark';

  return (
    <NextTopLoader
      showSpinner={false}
      color={isDarkMode ? '#0092ff' : '#2299DD'}
      height={5}
    />
  );
}
