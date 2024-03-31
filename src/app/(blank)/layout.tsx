import { BlankLayout } from '@/layouts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BlankLayout>{children}</BlankLayout>;
}
