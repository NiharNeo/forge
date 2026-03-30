import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

const availableTones = [
  'Bold', 'Witty', 'Professional', 'Friendly', 'Technical', 
  'Poetic', 'Edgy', 'Warm', 'Minimal copy', 'Storytelling'
];

export function ToneChips() {
  const { tones, toggleTone } = useForgeStore();

  return (
    <div className="flex flex-wrap gap-2">
      {availableTones.map((tone) => {
        const isSelected = tones.includes(tone);
        return (
          <button
            key={tone}
            onClick={() => toggleTone(tone)}
            className={`
              px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border
              ${isSelected 
                ? 'bg-accent/20 border-accent text-accent-yellow' 
                : 'bg-background border-border text-muted hover:border-muted hover:text-foreground'
              }
            `}
          >
            {tone}
          </button>
        );
      })}
    </div>
  );
}
