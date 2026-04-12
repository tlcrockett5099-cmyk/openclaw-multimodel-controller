import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';

export const Layout: React.FC = () => (
  <div className="flex h-screen overflow-hidden oc-bg-grid" style={{ background: 'var(--oc-bg)' }}>
    <Sidebar />
    <main className="flex-1 overflow-hidden flex flex-col pb-20 md:pb-0" style={{ background: 'transparent' }}>
      <Outlet />
    </main>
    <BottomNav />
  </div>
);
