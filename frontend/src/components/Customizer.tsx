import React from 'react';
import { useForgeStore } from '../store/forgeStore';
import { AestheticGrid } from './Customizer/AestheticGrid';
import { MoodSliders } from './Customizer/MoodSliders';
import { ToneChips } from './Customizer/ToneChips';
import { LayoutPicker } from './Customizer/LayoutPicker';
import { TypographyPicker } from './Customizer/TypographyPicker';
import { PalettePicker } from './Customizer/PalettePicker';
import { MotionToggles } from './Customizer/MotionToggles';
import { ConfigSummary } from './Customizer/ConfigSummary';
import { Sparkles } from 'lucide-react';
import { generateWebsite } from '../lib/claudeApi';

export function Customizer() {
  const store = useForgeStore();

  const handleGenerate = async () => {
    store.setIsGenerating(true);
    store.setGeneratedHTML(''); // Clear previous
    
    try {
      let fullHtml = '';
      await generateWebsite(store, (chunk) => {
        fullHtml += chunk;
        store.setGeneratedHTML(fullHtml);
      });
    } catch (err) {
      console.error(err);
      alert("Generation failed. Check console and API key.");
    } finally {
      store.setIsGenerating(false);
    }
  };

  return (
    <div className="w-full lg:w-[600px] h-screen overflow-y-auto bg-panel-left border-r border-border text-foreground flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-panel-left/95 backdrop-blur-sm z-10">
        <div className="font-display font-bold text-2xl tracking-tighter text-accent-yellow">forge</div>
        <div className="px-3 py-1 bg-border/50 rounded-full text-[10px] font-mono uppercase tracking-[1.5px] text-muted border border-border">
          Dev DNA: <span className="text-green-400">Connected</span>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="flex-1 p-8 flex flex-col gap-16">
        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">1. Aesthetic Preset</h2>
          <AestheticGrid />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">2. Mood Dials</h2>
          <MoodSliders />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">3. Tone of Voice</h2>
          <ToneChips />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">4. Layout Structure</h2>
          <LayoutPicker />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">5. Typography Feel</h2>
          <TypographyPicker />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">6. Colour Palette</h2>
          <PalettePicker />
        </section>

        <section>
          <h2 className="text-[10px] uppercase font-mono tracking-[1.5px] text-muted mb-6">7. Motion + Interaction</h2>
          <MotionToggles />
        </section>
      </div>

      {/* Generation Console */}
      <div className="p-8 border-t border-border bg-background/50">
        <ConfigSummary />
        
        <textarea
          value={store.userPrompt}
          onChange={(e) => store.setUserPrompt(e.target.value)}
          placeholder="Describe your website... e.g. A portfolio for a motion designer who works with brands"
          className="w-full bg-background border border-border rounded-xl p-4 min-h-[120px] text-sm focus:outline-none focus:border-accent transition-colors resize-none mb-6 text-foreground placeholder-muted font-sans"
        />

        <button
          onClick={handleGenerate}
          disabled={store.isGenerating || !store.userPrompt.trim()}
          className="w-full py-4 bg-foreground text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent-yellow transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
        >
          {store.isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-background/20 border-t-background rounded-full animate-spin" />
              Forging Architecture...
            </>
          ) : (
            <>
              Generate with Forge <Sparkles size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
