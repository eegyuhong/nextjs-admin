'use client';

import { SessionProvider as Provider } from 'next-auth/react';

export default function SessionProvider(props: { children: React.ReactNode }) {
  return <Provider>{props.children}</Provider>;
}
