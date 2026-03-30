import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-40 pb-24 px-8 overflow-hidden min-h-[921px] flex flex-col items-center justify-center text-center">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto z-10">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-sm bg-panel-left border border-border text-primary font-label text-xs tracking-[0.2em] font-bold uppercase">
          The New Standard of Production
        </span>
        <h1 className="text-6xl md:text-8xl font-headline text-foreground mb-8 tracking-tight leading-[1.1]">
          Forge: Your <span className="italic text-primary">AI Design Twin</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Experience the precision of architectural engineering applied to UI development. Forge synchronizes your visual intent with production-ready architecture.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => navigate('/app')}
            className="metal-shine text-on-primary px-10 py-4 rounded-md font-body font-semibold shadow-[0_0_40px_rgba(0,104,95,0.3)] hover:shadow-[0_0_60px_rgba(0,104,95,0.5)] transition-all active:scale-95 flex items-center gap-2 group"
          >
            Start Building
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="bg-panel-left text-foreground px-10 py-4 rounded-md font-body font-semibold border border-border hover:bg-panel-right transition-all active:scale-95">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl relative">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-20 pointer-events-none"></div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            className="w-full h-[500px] object-cover rounded-xl shadow-2xl relative z-10 border border-border" 
            alt="Abstract 3D crystalline structure with metallic teal and gold accents reflecting studio light on a clean white background" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaZFvrMMeANdyJO4Ka2IO7wNimeDWeHq28JFAIjtzpOHYYN2whPYTrjxF8c2NJXnWajhgVhxdtbWn6P9a8ubaAx5CDFHWi0mOUw7ZYbjafA29K0nIgYh26RYe16HWpQfsujKYBw3JsN8ACV3WabLFraEknmpySHbaGxCetaCc7GySEY6divWE4HPj5hQHtIiul7zkZxFClxr_iPj9-Zt13EMcDWY2bGv5j2uJKUCLSol8ftlHYE_iYdK1kKsGlM0H4lpmMnkDoTpI"
          />
          <div className="absolute bottom-12 right-12 z-30 bg-panel-left/90 backdrop-blur-xl p-8 rounded-lg shadow-2xl max-w-sm hidden lg:block border border-border">
            <p className="font-headline text-xl mb-4 italic text-primary">"Architectural Alchemy"</p>
            <p className="text-sm text-muted leading-relaxed font-body">
              Forge interprets your design system as a living structure, not just a set of styles. Every component is forged with structural integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
