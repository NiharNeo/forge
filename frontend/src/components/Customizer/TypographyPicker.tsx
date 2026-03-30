import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

const typographies = [
  { name: 'Grotesque', desc: 'geometric, modern', style: 'font-display font-black tracking-tighter' },
  { name: 'Serif', desc: 'editorial, classic', style: 'font-serif italic' },
  { name: 'Mono', desc: 'technical, terminal', style: 'font-mono' },
  { name: 'Display', desc: 'expressive, loud', style: 'font-display italic font-bold' },
  { name: 'Humanist', desc: 'warm, readable', style: 'font-sans font-light' },
  { name: 'Mixed', desc: 'display + mono pair', style: 'font-serif font-bold' },
];

export function TypographyPicker() {
  const { typography, setTypography } = useForgeStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {typographies.map((t) => {
        const isSelected = typography === t.name;
        
        return (
          <button
            key={t.name}
            onClick={() => setTypography(t.name)}
            className={`
              flex flex-col p-4 rounded-xl border transition-all duration-200
              ${isSelected 
                ? 'border-accent bg-accent/5 ring-1 ring-accent/50' 
                : 'border-border bg-background hover:bg-border/30 hover:border-muted'
              }
            `}
          >
            <div className="h-16 flex items-center justify-center w-full mb-2">
              <span className={`text-4xl ${t.style} ${isSelected ? 'text-accent-yellow' : 'text-foreground'}`}>
                {t.name === 'Mixed' ? <><span className="font-serif">A</span><span className="font-mono text-3xl">a</span></> : 'Aa'}
              </span>
            </div>
            <div className="text-left w-full mt-auto">
              <h3 className={`font-bold text-sm ${isSelected ? 'text-accent-yellow' : 'text-foreground'}`}>
                {t.name}
              </h3>
              <p className="text-[10px] text-muted">{t.desc}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
