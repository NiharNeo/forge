import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

interface ToggleProps {
  label: string;
  subtitle: string;
  enabled: boolean;
  onChange: (val: boolean) => void;
}

function Toggle({ label, subtitle, enabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors cursor-pointer" onClick={() => onChange(!enabled)}>
      <div>
        <div className="text-sm font-bold text-foreground">{label}</div>
        <div className="text-[10px] text-muted">{subtitle}</div>
      </div>
      <button
        role="switch"
        aria-checked={enabled}
        onClick={(e) => { e.stopPropagation(); onChange(!enabled); }}
        className={`
          relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none 
          ${enabled ? 'bg-accent' : 'bg-border'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-2' : '-translate-x-2'}
          `}
        />
      </button>
    </div>
  );
}

export function MotionToggles() {
  const store = useForgeStore();

  return (
    <div className="flex flex-col">
      <Toggle 
        label="Page load animations" 
        subtitle="Staggered fade-in on page load" 
        enabled={store.animations} 
        onChange={store.setAnimations} 
      />
      <Toggle 
        label="Hover micro-interactions" 
        subtitle="Buttons lift, cards tilt on hover" 
        enabled={store.hoverFx} 
        onChange={store.setHoverFx} 
      />
      <Toggle 
        label="Cursor effects" 
        subtitle="Custom cursor or trailing glow" 
        enabled={store.cursorFx} 
        onChange={store.setCursorFx} 
      />
      <Toggle 
        label="Scroll-triggered reveals" 
        subtitle="Sections animate as user scrolls" 
        enabled={store.scrollReveals} 
        onChange={store.setScrollReveals} 
      />
    </div>
  );
}
