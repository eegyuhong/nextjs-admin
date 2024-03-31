import React from 'react';

export default function index(props: { children: React.ReactNode }) {
  return (
    <div>
      블링크
      {props.children}
    </div>
  );
}
