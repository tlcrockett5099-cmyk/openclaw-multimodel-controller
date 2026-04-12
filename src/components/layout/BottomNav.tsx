import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, History, Settings, Sparkles } from 'lucide-react';

const items = [
  { to: '/',         icon: MessageSquare, label: 'Chat'     },
  { to: '/skills',   icon: Sparkles,      label: 'Skills'   },
  { to: '/history',  icon: History,       label: 'History'  },
  { to: '/settings', icon: Settings,      label: 'Settings' },
];

export const BottomNav: React.FC = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex justify-center pointer-events-none"
    style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}>
    <nav
      className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-2xl shadow-2xl"
      style={{
        background: 'rgba(7,15,31,0.92)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(20,184,166,0.25)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(20,184,166,0.08)',
      }}
    >
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink key={to} to={to} end={to === '/'}
          className="relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-150"
          style={({ isActive }) => isActive ? {
            background: 'linear-gradient(135deg, rgba(13,148,136,0.25), rgba(6,182,212,0.15))',
            color: 'var(--oc-teal)',
          } : { color: 'var(--oc-muted)' }}>
          {({ isActive }) => (
            <>
              <Icon size={21} strokeWidth={isActive ? 2.5 : 1.75} />
              <span style={{ fontSize: 10 }}>{label}</span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: 'var(--oc-teal)', boxShadow: '0 0 6px var(--oc-teal)' }} />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  </div>
);
