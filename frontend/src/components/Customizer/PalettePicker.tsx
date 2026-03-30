import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

const palettes = [
  { name: 'Dark mono', bg: '#111111', mid: '#333333', accent: '#e8ff47' },
  { name: 'Ocean', bg: '#0a1628', mid: '#1d4ed8', accent: '#38bdf8' },
  { name: 'Warm paper', bg: '#faf7f2', mid: '#292524', accent: '#d97706' },
  { name: 'Neon cyber', bg: '#050014', mid: '#7c3aed', accent: '#f0abfc' },
  { name: 'Earth', bg: '#1c1207', mid: '#78350f', accent: '#d4a574' },
  { name: 'Mint', bg: '#f0fdf4', mid: '#166534', accent: '#86efac' },
  { name: 'Y2K chrome', bg: '#e8e8f0', mid: '#ff6ec7', accent: '#00e5ff' },
  { name: 'Custom', bg: 'transparent', mid: 'transparent', accent: 'css-pattern' },
];

export function PalettePicker() {
  const { palette, setPalette } = useForgeStore();

  return (
    <div className="flex flex-col gap-3">
      {palettes.map((p) => {
        const isSelected = palette.name === p.name;
        const isCustom = p.name === 'Custom';
        
        return (
          <button
            key={p.name}
            onClick={() => setPalette(p)}
            className={`
              flex items-center justify-between p-3 rounded-xl border transition-all duration-200
              ${isSelected 
                ? 'border-accent bg-accent/5 ring-1 ring-accent/50' 
                : 'border-border bg-background hover:bg-border/30 hover:border-muted'
              }
            `}
          >
            <span className={`text-sm font-semibold ${isSelected ? 'text-accent-yellow' : 'text-foreground'}`}>
              {p.name}
            </span>
            <div className="flex gap-1">
              {isCustom ? (
                <>
                  <div className="w-6 h-6 rounded-md bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#333_2px,#333_4px)] border border-border" />
                  <div className="w-6 h-6 rounded-md bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#555_2px,#555_4px)] border border-border" />
                  <div className="w-6 h-6 rounded-md bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#777_2px,#777_4px)] border border-border" />
                </>
              ) : (
                <>
                  <div className="w-6 h-6 rounded-md border border-black/20" style={{ backgroundColor: p.bg }} />
                  <div className="w-6 h-6 rounded-md border border-black/20" style={{ backgroundColor: p.mid }} />
                  <div className="w-6 h-6 rounded-md border border-black/20" style={{ backgroundColor: p.accent }} />
                </>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
