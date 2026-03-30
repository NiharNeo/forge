import React from 'react';
import { useForgeStore } from '../../store/forgeStore';

export function ConfigSummary() {
  const store = useForgeStore();

  return (
    <div className="bg-[#050505] border border-border rounded-xl p-4 mb-6 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto text-muted shadow-inner">
      <div className="flex justify-between mb-2 pb-1 border-b border-white/5">
        <span className="text-accent-yellow">Config Hash:</span>
        <span className="opacity-50">dev_dna_link_active</span>
      </div>
      <div className="grid grid-cols-[100px_1fr] gap-x-4">
        <span className="text-white/40">aesthetic</span>
        <span className="text-white">{store.aesthetic}</span>
        
        <span className="text-white/40">palette</span>
        <span className="text-white">{store.palette.name}</span>
        
        <span className="text-white/40">layout</span>
        <span className="text-white">{store.layout}</span>
        
        <span className="text-white/40">typography</span>
        <span className="text-white">{store.typography}</span>
        
        <span className="text-white/40">tone</span>
        <span className="text-white">{store.tones.join(', ') || 'None'}</span>
        
        <span className="text-white/40">density</span>
        <span className="text-white">{store.density}/100</span>
        
        <span className="text-white/40">contrast</span>
        <span className="text-white">{store.contrast}/100</span>
        
        <span className="text-white/40">playful</span>
        <span className="text-white">{store.playful}/100</span>
        
        <span className="text-white/40">motion</span>
        <span className="text-white">{store.motion}/100</span>
        
        <span className="text-white/40 mt-1 pt-1 border-t border-white/5">effects</span>
        <span className="text-white mt-1 pt-1 border-t border-white/5">
          anim: {store.animations ? 'on' : 'off'} · 
          hover: {store.hoverFx ? 'on' : 'off'} · 
          cursor: {store.cursorFx ? 'on' : 'off'} · 
          scroll: {store.scrollReveals ? 'on' : 'off'}
        </span>
      </div>
    </div>
  );
}
