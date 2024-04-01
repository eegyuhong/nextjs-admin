import type { Metadata } from 'next';
import { NotosansFont } from '@/common/font';
import { AppProviders } from '@/contexts';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Next.js Admin',
  description: 'Next.js Admin',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={NotosansFont.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
