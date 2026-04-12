import React, { useState } from 'react';
import { Search, X, Plus, Trash2, Sparkles, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { BUILTIN_SKILLS, SKILL_CATEGORIES } from '../../providers/skills-library';
import type { Skill } from '../../types';

const FREE_SKILL_IDS = ['grammar-fixer', 'code-reviewer', 'brainstormer', 'tutor', 'fact-checker'];

export const SkillsPage: React.FC = () => {
  const { settings, updateSettings, customSkills, addCustomSkill, removeCustomSkill } = useStore();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customForm, setCustomForm] = useState({
    name: '',
    description: '',
    category: 'Writing',
    systemPrompt: '',
    icon: '🔧',
    tags: '',
  });

  const activeSkillIds = settings.activeSkillIds || [];
  const isPro = settings.isPro;

  const toggleSkill = (id: string, isProOnly: boolean) => {
    const current = activeSkillIds;
    if (current.includes(id)) {
      updateSettings({ activeSkillIds: current.filter(s => s !== id) });
      return;
    }
    if (isProOnly && !isPro) {
      navigate('/settings');
      return;
    }
    updateSettings({ activeSkillIds: [...current, id] });
  };

  const allSkills: Skill[] = [...BUILTIN_SKILLS, ...customSkills];

  const filtered = allSkills.filter((s) => {
    const matchSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = category === 'All' || s.category === category;
    return matchSearch && matchCategory;
  });

  const geminiSkills = filtered.filter((s) => s.category === 'Gemini Gems');
  const regularSkills = filtered.filter((s) => s.category !== 'Gemini Gems');

  const handleAddCustom = () => {
    if (!customForm.name.trim() || !customForm.systemPrompt.trim()) return;
    addCustomSkill({
      name: customForm.name.trim(),
      description: customForm.description.trim() || 'Custom skill',
      category: customForm.category,
      systemPrompt: customForm.systemPrompt.trim(),
      icon: customForm.icon || '🔧',
      tags: customForm.tags.split(',').map((t) => t.trim()).filter(Boolean),
      provider: 'all',
    });
    setCustomForm({ name: '', description: '', category: 'Writing', systemPrompt: '', icon: '🔧', tags: '' });
    setShowAddCustom(false);
  };

  const isSkillLocked = (skill: Skill) => !!(skill.proOnly && !isPro);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 shrink-0" style={{ borderBottom: '1px solid var(--oc-border)', background: 'var(--oc-surface)' }}>
        <div className="flex items-center gap-3 mb-1">
          <Sparkles size={20} style={{ color: 'var(--oc-teal)' }} />
          <h1 className="text-xl font-bold" style={{ color: 'var(--oc-text)' }}>Skills Library</h1>
          {activeSkillIds.length > 0 && (
            <span className="ml-auto text-xs rounded-full px-2 py-0.5 font-semibold"
              style={{ background: 'var(--oc-teal-dark)', color: 'white' }}>
              {activeSkillIds.length} active
            </span>
          )}
        </div>
        <p className="text-sm" style={{ color: 'var(--oc-muted)' }}>Activate skills to specialize AI responses</p>
      </div>

      {/* Pro banner */}
      {!isPro && (
        <div className="px-4 py-3 shrink-0 flex items-center justify-between gap-3"
          style={{ background: 'rgba(20,184,166,0.06)', borderBottom: '1px solid rgba(20,184,166,0.15)' }}>
          <div>
            <span className="text-sm font-semibold" style={{ color: 'var(--oc-teal)' }}>
              🔓 Unlock All Skills with Pro
            </span>
            <span className="text-xs ml-2" style={{ color: 'var(--oc-muted)' }}>
              5 free · 50+ unlocked with Pro
            </span>
          </div>
          <button
            onClick={() => navigate('/settings')}
            className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', color: 'var(--oc-pro)' }}>
            🌟 Upgrade — $5+/mo
          </button>
        </div>
      )}

      {/* Search + category filter */}
      <div className="px-4 pt-4 pb-2 shrink-0 space-y-3" style={{ background: 'var(--oc-bg)' }}>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--oc-muted)' }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills…"
            className="w-full rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none"
            style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--oc-muted)' }}>
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all border`}
              style={category === cat ? {
                background: 'var(--oc-teal-dark)',
                borderColor: 'var(--oc-teal)',
                color: 'white',
              } : {
                background: 'var(--oc-surface2)',
                borderColor: 'var(--oc-border)',
                color: 'var(--oc-muted)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Regular skills */}
        {regularSkills.length > 0 && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {regularSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isActive={activeSkillIds.includes(skill.id)}
                  locked={isSkillLocked(skill)}
                  onToggle={() => toggleSkill(skill.id, !!(skill.proOnly))}
                  onDelete={skill.isCustom ? () => removeCustomSkill(skill.id) : undefined}
                />
              ))}
            </div>
          </div>
        )}

        {/* Gemini Gems */}
        {geminiSkills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💎</span>
              <h2 className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#a78bfa' }}>Gemini Gems</h2>
              <span className="text-xs" style={{ color: 'var(--oc-muted)' }}>Gemini-optimized skills</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {geminiSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isActive={activeSkillIds.includes(skill.id)}
                  locked={isSkillLocked(skill)}
                  onToggle={() => toggleSkill(skill.id, !!(skill.proOnly))}
                  onDelete={skill.isCustom ? () => removeCustomSkill(skill.id) : undefined}
                  gemini
                />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Sparkles size={40} className="mb-3" style={{ color: 'var(--oc-border)' }} />
            <p className="text-sm" style={{ color: 'var(--oc-muted)' }}>No skills found</p>
            <p className="text-xs mt-1" style={{ color: 'rgba(100,116,139,0.5)' }}>Try a different search or category</p>
          </div>
        )}

        {/* Custom skills section */}
        <div className="pt-6" style={{ borderTop: '1px solid var(--oc-border)' }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--oc-text)' }}>Custom Skills</h2>
              <p className="text-xs mt-0.5" style={{ color: 'var(--oc-muted)' }}>{customSkills.length} custom skill{customSkills.length !== 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={() => setShowAddCustom((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-white text-xs rounded-lg transition-all oc-btn-primary"
            >
              <Plus size={12} />
              Add Custom
              {showAddCustom ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>

          {showAddCustom && (
            <div className="oc-card rounded-xl p-4 space-y-3 mb-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={customForm.name}
                  onChange={(e) => setCustomForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Skill name *"
                  className="rounded-lg px-3 py-2 text-sm focus:outline-none"
                  style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
                />
                <input
                  type="text"
                  value={customForm.icon}
                  onChange={(e) => setCustomForm((f) => ({ ...f, icon: e.target.value }))}
                  placeholder="Icon emoji"
                  className="rounded-lg px-3 py-2 text-sm focus:outline-none"
                  style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
                />
              </div>
              <input
                type="text"
                value={customForm.description}
                onChange={(e) => setCustomForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Short description"
                className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
              />
              <textarea
                value={customForm.systemPrompt}
                onChange={(e) => setCustomForm((f) => ({ ...f, systemPrompt: e.target.value }))}
                placeholder="System prompt (instructions for the AI) *"
                rows={3}
                className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none resize-none"
                style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
              />
              <input
                type="text"
                value={customForm.tags}
                onChange={(e) => setCustomForm((f) => ({ ...f, tags: e.target.value }))}
                placeholder="Tags (comma separated)"
                className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-text)' }}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAddCustom}
                  disabled={!customForm.name.trim() || !customForm.systemPrompt.trim()}
                  className="px-4 py-2 disabled:opacity-40 text-white text-sm rounded-lg transition-all oc-btn-primary"
                >
                  Save Skill
                </button>
                <button
                  onClick={() => setShowAddCustom(false)}
                  className="px-4 py-2 text-sm rounded-lg transition-colors"
                  style={{ background: 'var(--oc-surface2)', border: '1px solid var(--oc-border)', color: 'var(--oc-muted)' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Attribution */}
        <p className="text-center text-xs pb-4" style={{ color: 'rgba(100,116,139,0.4)' }}>
          Skill library by SerThrocken · ai-multimodel-controller
        </p>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{
  skill: Skill;
  isActive: boolean;
  locked: boolean;
  onToggle: () => void;
  onDelete?: () => void;
  gemini?: boolean;
}> = ({ skill, isActive, locked, onToggle, onDelete, gemini }) => (
  <div
    className="relative flex flex-col gap-2 p-3 rounded-xl transition-all oc-card-hover"
    style={locked ? {
      background: 'var(--oc-surface2)',
      border: '1px solid rgba(245,158,11,0.2)',
    } : isActive ? {
      background: gemini ? 'rgba(167,139,250,0.1)' : 'rgba(20,184,166,0.1)',
      border: gemini ? '1px solid rgba(167,139,250,0.4)' : '1px solid rgba(20,184,166,0.4)',
      boxShadow: gemini ? '0 0 12px rgba(167,139,250,0.1)' : '0 0 12px rgba(20,184,166,0.1)',
    } : {
      background: 'var(--oc-surface2)',
      border: '1px solid var(--oc-border)',
    }}
  >
    {/* Lock badge */}
    {locked && (
      <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
        <Lock size={9} style={{ color: 'var(--oc-pro)' }} />
      </div>
    )}

    {onDelete && !locked && (
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 p-0.5 transition-colors"
        style={{ color: 'var(--oc-muted)' }}
        title="Delete custom skill"
      >
        <Trash2 size={12} />
      </button>
    )}

    <div className="flex items-start gap-2">
      <span className="text-xl leading-none">{skill.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold leading-tight truncate" style={{ color: 'var(--oc-text)' }}>{skill.name}</div>
        <span className="inline-block text-xs rounded px-1 mt-0.5"
          style={gemini
            ? { color: '#a78bfa', background: 'rgba(167,139,250,0.15)' }
            : { color: 'var(--oc-teal)', background: 'rgba(20,184,166,0.1)' }}>
          {skill.category}
        </span>
      </div>
    </div>

    <p className="text-xs leading-snug line-clamp-2" style={{ color: 'var(--oc-muted)' }}>{skill.description}</p>

    <button
      onClick={onToggle}
      className="mt-auto w-full py-1.5 rounded-lg text-xs font-medium transition-all"
      style={locked ? {
        background: 'rgba(245,158,11,0.1)',
        border: '1px solid rgba(245,158,11,0.25)',
        color: 'var(--oc-pro)',
      } : isActive ? {
        background: gemini ? 'rgba(167,139,250,0.25)' : 'var(--oc-teal-dark)',
        border: gemini ? '1px solid rgba(167,139,250,0.4)' : '1px solid var(--oc-teal)',
        color: 'white',
      } : {
        background: 'var(--oc-surface)',
        border: '1px solid var(--oc-border)',
        color: 'var(--oc-muted)',
      }}
    >
      {locked ? '🔒 Pro Only' : isActive ? '✓ Active' : 'Activate'}
    </button>
  </div>
);

export { FREE_SKILL_IDS };
