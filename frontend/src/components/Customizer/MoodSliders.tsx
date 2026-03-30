import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

interface SliderProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  value: number;
  onChange: (val: number) => void;
}

function Slider({ label, minLabel, maxLabel, value, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <span className="text-[10px] font-mono text-accent-yellow">{value}/100</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="styled-slider my-2"
      />
      <div className="flex justify-between">
        <span className="text-[10px] font-mono uppercase text-muted tracking-widest">{minLabel}</span>
        <span className="text-[10px] font-mono uppercase text-muted tracking-widest">{maxLabel}</span>
      </div>
    </div>
  );
}

export function MoodSliders() {
  const store = useForgeStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <Slider
        label="Density"
        minLabel="Minimal"
        maxLabel="Maximal"
        value={store.density}
        onChange={store.setDensity}
      />
      <Slider
        label="Tone"
        minLabel="Serious"
        maxLabel="Playful"
        value={store.playful}
        onChange={store.setPlayful}
      />
      <Slider
        label="Contrast"
        minLabel="Soft"
        maxLabel="High Contrast"
        value={store.contrast}
        onChange={store.setContrast}
      />
      <Slider
        label="Motion"
        minLabel="Static"
        maxLabel="Animated"
        value={store.motion}
        onChange={store.setMotion}
      />
    </div>
  );
}
