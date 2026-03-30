import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

const layouts = [
  { name: 'Hero-led', icon: 'hero' },
  { name: 'Split screen', icon: 'split' },
  { name: 'Grid', icon: 'grid' },
  { name: 'Editorial scroll', icon: 'editorial' },
  { name: 'Sidebar', icon: 'sidebar' },
  { name: 'Fullscreen', icon: 'full' },
];

function LayoutIcon({ type, isSelected }: { type: string; isSelected: boolean }) {
  const fill = isSelected ? 'fill-accent-yellow' : 'fill-border';
  const stroke = isSelected ? 'stroke-accent-yellow' : 'stroke-border';
  
  if (type === 'hero') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <rect x="2" y="2" width="20" height="10" rx="1" className={`${fill} opacity-80`} />
        <rect x="2" y="14" width="6" height="8" rx="1" className={fill} />
        <rect x="9" y="14" width="6" height="8" rx="1" className={fill} />
        <rect x="16" y="14" width="6" height="8" rx="1" className={fill} />
      </svg>
    );
  }
  if (type === 'split') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <rect x="2" y="2" width="9" height="20" rx="1" className={`${fill} opacity-50`} />
        <rect x="13" y="2" width="9" height="20" rx="1" className={fill} />
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <rect x="2" y="2" width="9" height="9" rx="1" className={fill} />
        <rect x="13" y="2" width="9" height="9" rx="1" className={`${fill} opacity-50`} />
        <rect x="2" y="13" width="9" height="9" rx="1" className={`${fill} opacity-50`} />
        <rect x="13" y="13" width="9" height="9" rx="1" className={fill} />
      </svg>
    );
  }
  if (type === 'editorial') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <rect x="4" y="2" width="16" height="4" rx="0.5" className={fill} />
        <rect x="4" y="8" width="10" height="2" rx="0.5" className={`${fill} opacity-50`} />
        <rect x="4" y="12" width="16" height="4" rx="0.5" className={fill} />
        <rect x="4" y="18" width="12" height="2" rx="0.5" className={`${fill} opacity-50`} />
      </svg>
    );
  }
  if (type === 'sidebar') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <rect x="2" y="2" width="5" height="20" rx="1" className={`${fill} opacity-50`} />
        <rect x="9" y="2" width="13" height="20" rx="1" className={fill} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full p-2">
      <rect x="2" y="2" width="20" height="20" rx="1" className={fill} />
      <circle cx="12" cy="12" r="4" className="fill-background" />
    </svg>
  );
}

export function LayoutPicker() {
  const { layout, setLayout } = useForgeStore();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {layouts.map((l) => {
        const isSelected = layout === l.name;
        
        return (
          <button
            key={l.name}
            onClick={() => setLayout(l.name)}
            className={`
              flex flex-col items-center p-3 rounded-xl border transition-all duration-200
              ${isSelected 
                ? 'border-accent bg-accent/5 ring-1 ring-accent/50' 
                : 'border-border bg-background hover:border-muted'
              }
            `}
          >
            <div className="w-16 h-16 mb-2">
              <LayoutIcon type={l.icon} isSelected={isSelected} />
            </div>
            <span className={`text-xs font-semibold ${isSelected ? 'text-accent-yellow' : 'text-foreground'}`}>
              {l.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
