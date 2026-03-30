import React, { useRef, useEffect } from 'react';
import { useForgeStore } from '../store/forgeStore';
import { Code, Download, Sparkles } from 'lucide-react';

export function Preview() {
  const store = useForgeStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-scroll iframe or handle content injections if needed
  useEffect(() => {
    if (iframeRef.current && store.generatedHTML) {
      // In a real app we might want to do more complex injection, 
      // but srcDoc handles raw HTML strings perfectly for this use case.
    }
  }, [store.generatedHTML]);

  const handleDownload = () => {
    if (!store.generatedHTML) return;
    const blob = new Blob([store.generatedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `forge-${store.aesthetic.toLowerCase()}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleViewCode = () => {
    // For now, just log or simple alert, could be expanded to a modal
    if (store.generatedHTML) {
      console.log(store.generatedHTML);
      alert("Code logged to console. In a full version, this opens a syntax highlighter modal.");
    }
  };

  return (
    <div className="flex-1 h-screen bg-panel-right flex flex-col relative overflow-hidden">
      {/* Top Toolbar */}
      <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-panel-right/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex space-x-1.5 border border-border px-3 py-1.5 rounded-full items-center">
            <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{store.aesthetic} Engine</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handleViewCode}
            disabled={!store.generatedHTML}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-muted hover:text-foreground hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed border border-transparent hover:border-border"
          >
            <Code size={14} /> View HTML
          </button>
          <button 
            onClick={handleDownload}
            disabled={!store.generatedHTML}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-background bg-foreground hover:bg-accent-yellow transition-colors disabled:opacity-30 disabled:bg-border disabled:text-muted disabled:cursor-not-allowed"
          >
            <Download size={14} /> Download ZIP
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative bg-black/50 overflow-hidden">
        {!store.generatedHTML && !store.isGenerating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none">
            <Sparkles size={48} className="mb-6 text-muted" strokeWidth={1} />
            <p className="font-display text-xl text-muted tracking-wide">Your generated website will appear here</p>
          </div>
        )}

        {(store.generatedHTML || store.isGenerating) && (
          <div className="w-full h-full bg-white transition-all duration-500">
            <iframe
              ref={iframeRef}
              srcDoc={store.generatedHTML}
              className="w-full h-full border-none bg-white"
              title="Forge Live Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}

        {/* Loading Overlay */}
        {store.isGenerating && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
            <div className="w-16 h-16 border-2 border-border border-t-accent-yellow rounded-full animate-spin mb-6" />
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-yellow animate-pulse">
              Compiling {store.aesthetic} Identity...
            </div>
            {store.generatedHTML && (
              <div className="mt-4 text-[10px] font-mono text-muted w-96 text-center truncate px-4 opacity-50">
                Streaming bytes...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
