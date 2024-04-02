import React from 'react';

export default function index(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="mx-auto">{props.children}</div>
    </div>
  );
}
