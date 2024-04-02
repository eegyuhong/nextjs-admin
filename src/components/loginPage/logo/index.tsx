import React from 'react';

interface Props {
  className?: string;
}

export default function LoginLogo({ className }: Props) {
  return (
    <div
      className={`${className} h-40 rounded-md bg-slate-500 opacity-20`}
    ></div>
  );
}
