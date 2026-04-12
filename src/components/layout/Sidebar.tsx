import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  MessageSquare, Plug, Settings, Zap, Menu, X, History,
  Brain, Sparkles, ChevronDown, ChevronUp, Star,
} from 'lucide-react';
import { useStore } from '../../store';
import { PATREON_URL } from '../../constants';

const MAX_RECENT = 5;

const NAV = [
  { to: '/',            icon: MessageSquare, label: 'Chat'        },
  { to: '/skills',      icon: Sparkles,      label: 'Skills'      },
  { to: '/memory',      icon: Brain,         label: 'Memory Bank' },
  { to: '/history',     icon: History,       label: 'History'     },
  { to: '/connections', icon: Plug,          label: 'Connections' },
  { to: '/settings',    icon: Settings,      label: 'Settings'    },
];

export const Sidebar: React.FC = () => {
  const providers      = useStore(s => s.providers);
  const conversations  = useStore(s => s.conversations);
  const settings       = useStore(s => s.settings);
  const memories       = useStore(s => s.memories);
  const setActiveConv  = useStore(s => s.setActiveConversation);
  const navigate       = useNavigate();

  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [showRecentChats, setShowRecentChats] = useState(true);

  const enabledCount   = providers.filter(p => p.enabled).length;
  const activeSkillIds = settings.activeSkillIds || [];
  const starredCount   = conversations.reduce((a, c) => a + c.messages.filter(m => m.starred).length, 0);

  const recentChats = [...conversations]
    .sort((a, b) => new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime())
    .slice(0, MAX_RECENT);

  /* ── Mobile drawer content ─────────────────────────────────── */
  const MobileDrawer = (
    <div className="flex flex-col h-full animate-oc-left" style={{
      background: 'var(--oc-surface)',
      borderRight: '1px solid var(--oc-border)',
    }}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5" style={{ borderBottom: '1px solid var(--oc-border)' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center oc-glow-teal-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, var(--oc-teal-dark), var(--oc-cyan))' }}>
          <Zap size={18} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-sm oc-gradient-text">AI-MC</div>
          <div className="text-xs" style={{ color: 'var(--oc-muted)' }}>MultiModel Controller</div>
        </div>
        <button onClick={() => setMobileOpen(false)} className="ml-auto p-1 rounded-lg hover:bg-white/5" style={{ color: 'var(--oc-muted)' }}>
          <X size={18} />
        </button>
      </div>

      {/* Stats strip */}
      <div className="flex items-center gap-3 px-4 py-2 text-xs" style={{ borderBottom: '1px solid rgba(26,58,74,0.5)' }}>
        <span className="flex items-center gap-1" style={{ color: 'var(--oc-teal)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {enabledCount} active
        </span>
        {activeSkillIds.length > 0 && (
          <span className="flex items-center gap-1" style={{ color: 'var(--oc-cyan)' }}>
            <Sparkles size={10} />
            {activeSkillIds.length} skills
          </span>
        )}
        {memories.length > 0 && (
          <span className="flex items-center gap-1" style={{ color: '#a78bfa' }}>
            <Brain size={10} />
            {memories.length}
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive ? 'text-white' : 'hover:text-white hover:bg-white/5'
              }`
            }
            style={({ isActive }) => isActive ? {
              background: 'linear-gradient(135deg, rgba(13,148,136,0.25), rgba(6,182,212,0.15))',
              border: '1px solid rgba(20,184,166,0.35)',
              color: 'var(--oc-teal)',
              boxShadow: '0 0 12px rgba(20,184,166,0.15)',
            } : { color: 'var(--oc-muted)', border: '1px solid transparent' }}
          >
            <Icon size={17} />
            {label}
            {label === 'Connections' && enabledCount > 0 && (
              <span className="ml-auto text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                style={{ background: 'var(--oc-teal-dark)', color: 'white' }}>
                {enabledCount}
              </span>
            )}
            {label === 'Chat' && starredCount > 0 && (
              <span className="ml-auto flex items-center gap-1 text-xs" style={{ color: 'var(--oc-pro)' }}>
                <Star size={10} className="fill-current" />{starredCount}
              </span>
            )}
            {label === 'Skills' && activeSkillIds.length > 0 && (
              <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(6,182,212,0.2)', color: 'var(--oc-cyan)' }}>
                {activeSkillIds.length}
              </span>
            )}
          </NavLink>
        ))}

        {/* Recent chats */}
        {recentChats.length > 0 && (
          <div className="pt-3">
            <button onClick={() => setShowRecentChats(v => !v)}
              className="flex items-center justify-between w-full px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white"
              style={{ color: 'var(--oc-muted)', letterSpacing: '0.08em' }}>
              Recent Chats
              {showRecentChats ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
            </button>
            {showRecentChats && (
              <div className="space-y-0.5 mt-1">
                {recentChats.map(conv => (
                  <button key={conv.id}
                    onClick={() => { setActiveConv(conv.id); setMobileOpen(false); navigate('/'); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs truncate transition-all hover:bg-white/5"
                    style={{ color: 'var(--oc-muted)' }}
                    title={conv.title}>
                    {conv.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3" style={{ borderTop: '1px solid var(--oc-border)' }}>
        {settings.isPro ? (
          <div className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold oc-glow-pro"
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: 'var(--oc-pro)' }}>
            🌟 Pro Active
          </div>
        ) : (
          <a href={PATREON_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-all"
            style={{ background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.2)', color: 'var(--oc-teal)' }}>
            ✦ Upgrade to Pro
          </a>
        )}
        <p className="text-center text-xs mt-2" style={{ color: 'rgba(100,116,139,0.5)' }}>
          v1.1.0 · SerThrocken
        </p>
      </div>
    </div>
  );

  /* ── Desktop icon-rail ─────────────────────────────────────── */
  const DesktopRail = (
    <div className="flex flex-col h-full items-center py-4 gap-1" style={{
      background: 'var(--oc-surface)',
      borderRight: '1px solid var(--oc-border)',
      width: 68,
    }}>
      {/* Logo icon */}
      <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center cursor-default flex-shrink-0 animate-oc-pulse"
        style={{ background: 'linear-gradient(135deg, var(--oc-teal-dark), var(--oc-cyan))' }}>
        <Zap size={18} className="text-white" />
      </div>

      {NAV.map(({ to, icon: Icon, label }) => (
        <NavLink key={to} to={to} end={to === '/'}
          className="relative group flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-150"
          style={({ isActive }) => isActive ? {
            background: 'linear-gradient(135deg, rgba(13,148,136,0.3), rgba(6,182,212,0.2))',
            border: '1px solid rgba(20,184,166,0.4)',
            color: 'var(--oc-teal)',
            boxShadow: '0 0 14px rgba(20,184,166,0.2)',
          } : {
            color: 'var(--oc-muted)',
            border: '1px solid transparent',
          }}
        >
          {({ isActive }) => (
            <>
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.75} />
              {/* Active left indicator */}
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-full"
                  style={{ background: 'var(--oc-teal)', boxShadow: '0 0 8px var(--oc-teal)' }} />
              )}
              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute left-14 z-50 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-xl"
                style={{
                  background: 'var(--oc-surface2)',
                  border: '1px solid var(--oc-border)',
                  color: 'var(--oc-text)',
                }}>
                {label}
              </span>
              {/* Badge */}
              {label === 'Connections' && enabledCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center font-bold"
                  style={{ background: 'var(--oc-teal-dark)', fontSize: 9 }}>
                  {enabledCount}
                </span>
              )}
              {label === 'Skills' && activeSkillIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
                  style={{ background: 'var(--oc-cyan)', color: '#020914', fontSize: 9 }}>
                  {activeSkillIds.length}
                </span>
              )}
            </>
          )}
        </NavLink>
      ))}

      {/* Spacer + Pro badge at bottom */}
      <div className="mt-auto flex flex-col items-center gap-2">
        {settings.isPro ? (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base oc-glow-pro"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}
            title="Pro Active">
            🌟
          </div>
        ) : (
          <a href={PATREON_URL} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all"
            style={{ background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.2)', color: 'var(--oc-teal)' }}
            title="Upgrade to Pro">
            ✦
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop icon rail */}
      <aside className="hidden md:flex flex-col flex-shrink-0" style={{ width: 68 }}>
        {DesktopRail}
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(v => !v)}
        className="md:hidden fixed top-3 left-3 z-50 w-10 h-10 rounded-xl flex items-center justify-center transition-all"
        style={{
          background: mobileOpen ? 'rgba(20,184,166,0.15)' : 'var(--oc-surface)',
          border: '1px solid var(--oc-border)',
          color: mobileOpen ? 'var(--oc-teal)' : 'var(--oc-muted)',
        }}>
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex" onClick={e => e.target === e.currentTarget && setMobileOpen(false)}>
          <div className="w-64 flex flex-col shadow-2xl">{MobileDrawer}</div>
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
};
