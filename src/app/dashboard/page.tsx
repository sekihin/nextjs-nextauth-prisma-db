'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

const App: React.FC<Props> = ({ children, session }) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
};

export default App;
