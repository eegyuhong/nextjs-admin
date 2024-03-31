import { Inter, Noto_Sans_KR } from 'next/font/google';

export const InterFont = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const NotosansFont = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
