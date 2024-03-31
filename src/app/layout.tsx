import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NotosansFont } from '@/common/font';
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
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
