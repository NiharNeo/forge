import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

const presets = [
  { name: 'Brutalist', desc: 'Raw, high contrast, bold', swatch: 'bg-black border-2 border-white' },
  { name: 'Y2K', desc: 'Retro chrome, neon, bubbly', swatch: 'bg-gradient-to-tr from-pink-500 to-cyan-400' },
  { name: 'Editorial', desc: 'Magazine, serif, refined', swatch: 'bg-[#faf7f2] border border-[#d1cdba]' },
  { name: 'Minimal', desc: 'Clean, negative space', swatch: 'bg-white border border-gray-200' },
  { name: 'Glassmorphism', desc: 'Layered, soft, translucent', swatch: 'bg-blue-500/20 backdrop-blur-md border border-white/20' },
  { name: 'Retro Terminal', desc: 'Green on black, mono', swatch: 'bg-[#0d1117] border border-[#00ff41]' },
  { name: 'Luxury', desc: 'Dark gold, premium, serif', swatch: 'bg-[#1a1814] border border-[#c9a84c]' },
  { name: 'Custom', desc: 'Build from scratch', swatch: 'bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#222_2px,#222_4px)]' },
];

export function AestheticGrid() {
  const { aesthetic, setAesthetic } = useForgeStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {presets.map((preset) => {
        const isSelected = aesthetic === preset.name;
        
        return (
          <button
            key={preset.name}
            onClick={() => setAesthetic(preset.name)}
            className={`
              flex flex-col text-left p-3 rounded-xl border transition-all duration-200
              ${isSelected 
                ? 'border-accent bg-accent/5 ring-1 ring-accent/50' 
                : 'border-border bg-background hover:bg-border/30 hover:border-muted'
              }
            `}
          >
            <div className={`w-full h-12 rounded-lg mb-3 ${preset.swatch}`} />
            <h3 className={`font-display font-semibold text-sm mb-1 ${isSelected ? 'text-accent-yellow' : 'text-foreground'}`}>
              {preset.name}
            </h3>
            <p className="text-[10px] text-muted leading-tight">{preset.desc}</p>
          </button>
        );
      })}
    </div>
  );
}
