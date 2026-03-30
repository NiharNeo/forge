import { create } from 'zustand';

interface ForgeState {
  aesthetic: string;
  palette: { name: string; bg: string; mid: string; accent: string };
  layout: string;
  typography: string;
  tones: string[];
  density: number;
  playful: number;
  contrast: number;
  motion: number;
  animations: boolean;
  hoverFx: boolean;
  cursorFx: boolean;
  scrollReveals: boolean;
  userPrompt: string;
  generatedHTML: string;
  isGenerating: boolean;

  setAesthetic: (val: string) => void;
  setPalette: (val: { name: string; bg: string; mid: string; accent: string }) => void;
  setLayout: (val: string) => void;
  setTypography: (val: string) => void;
  toggleTone: (val: string) => void;
  setDensity: (val: number) => void;
  setPlayful: (val: number) => void;
  setContrast: (val: number) => void;
  setMotion: (val: number) => void;
  setAnimations: (val: boolean) => void;
  setHoverFx: (val: boolean) => void;
  setCursorFx: (val: boolean) => void;
  setScrollReveals: (val: boolean) => void;
  setUserPrompt: (val: string) => void;
  setGeneratedHTML: (val: string) => void;
  setIsGenerating: (val: boolean) => void;
}

export const useForgeStore = create<ForgeState>((set) => ({
  aesthetic: 'Brutalist',
  palette: { name: 'Dark mono', bg: '#111111', mid: '#333333', accent: '#e8ff47' },
  layout: 'Hero-led',
  typography: 'Grotesque',
  tones: ['Bold', 'Technical'],
  density: 70,
  playful: 30,
  contrast: 80,
  motion: 60,
  animations: true,
  hoverFx: true,
  cursorFx: false,
  scrollReveals: true,
  userPrompt: '',
  generatedHTML: '',
  isGenerating: false,

  setAesthetic: (aesthetic) => set({ aesthetic }),
  setPalette: (palette) => set({ palette }),
  setLayout: (layout) => set({ layout }),
  setTypography: (typography) => set({ typography }),
  toggleTone: (tone) => set((state) => ({
    tones: state.tones.includes(tone) 
      ? state.tones.filter(t => t !== tone)
      : [...state.tones, tone]
  })),
  setDensity: (density) => set({ density }),
  setPlayful: (playful) => set({ playful }),
  setContrast: (contrast) => set({ contrast }),
  setMotion: (motion) => set({ motion }),
  setAnimations: (animations) => set({ animations }),
  setHoverFx: (hoverFx) => set({ hoverFx }),
  setCursorFx: (cursorFx) => set({ cursorFx }),
  setScrollReveals: (scrollReveals) => set({ scrollReveals }),
  setUserPrompt: (userPrompt) => set({ userPrompt }),
  setGeneratedHTML: (generatedHTML) => set({ generatedHTML }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
}));
