import React from 'react';

export function FlowDiagram() {
  return (
    <section className="py-24 bg-panel-right border-y border-border">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-headline mb-16 text-foreground">The Forge Pipeline</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <svg className="absolute top-1/2 left-0 w-full h-1 hidden md:block -z-0 opacity-20" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 2">
            <path d="M0 1H1000" stroke="url(#line_grad)" strokeDasharray="8 8" strokeWidth="2"></path>
            <defs>
              <linearGradient id="line_grad" x1="0" x2="1000" y1="0" y2="0">
                <stop stopColor="#00685f"></stop>
                <stop offset="1" stopColor="#904d00"></stop>
              </linearGradient>
            </defs>
          </svg>
          
          <div className="z-10 bg-panel-left p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border border-border shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">content_paste</span>
            <span className="text-xs font-bold tracking-widest uppercase">Reference</span>
          </div>
          <div className="hidden md:block text-primary/30">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>
          
          <div className="z-10 bg-panel-left p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border border-border shadow-sm">
            <span className="material-symbols-outlined text-secondary text-3xl mb-2">analytics</span>
            <span className="text-xs font-bold tracking-widest uppercase">Analyze</span>
          </div>
          <div className="hidden md:block text-primary/30">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>

          <div className="z-10 bg-panel-left p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border border-border shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">auto_awesome</span>
            <span className="text-xs font-bold tracking-widest uppercase">Generate</span>
          </div>
          <div className="hidden md:block text-primary/30">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>

          <div className="z-10 bg-panel-left p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border border-border shadow-sm">
            <span className="material-symbols-outlined text-secondary text-3xl mb-2">architecture</span>
            <span className="text-xs font-bold tracking-widest uppercase">Build</span>
          </div>
          <div className="hidden md:block text-primary/30">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>

          <div className="z-10 bg-surface-container-lowest p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border border-outline-variant/20 shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">memory</span>
            <span className="text-xs font-bold tracking-widest uppercase">Remember</span>
          </div>
        </div>
      </div>
    </section>
  );
}
