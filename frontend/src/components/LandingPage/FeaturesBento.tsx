import { useNavigate } from 'react-router-dom';

export function FeaturesBento() {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-panel-left border border-border p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-110 transition-transform"></div>
            <span className="material-symbols-outlined text-primary text-4xl mb-6">content_paste_go</span>
            <h3 className="text-3xl mb-4 font-headline text-foreground">Paste Reference</h3>
            <p className="text-muted mb-8 max-w-md font-body">Drop any screenshot, wireframe, or moodboard. Forge decodes the spatial logic and visual rhythm instantly.</p>
            <div className="aspect-video bg-background rounded-lg border border-border overflow-hidden">
              <img className="w-full h-full object-cover opacity-80" alt="Close up of a designer's hand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUs-KIyLGJ-cb95Y_OJ_ghJKHkPbKYZTRWgw90t40xmCWlj8DsNzqpN0b-zKmmoxuDDXbTqr06Z33SRWSBnhPHtPXWezH0VYJKC5gOmjgBngofDuEyNVfasBNvOKNn3yoisEJHuO_iTMRSoe6ExIo0QRIGSuZCEcnTyf-WrTihiXgW7w2XwjG4CeqfsdPtLkJyoJEcVKnFJJ2sv524fDiRQMIHrwjAat_ybOlq4nHusg5Oqs6aj-o4-N4Qqs4GDr5YOF1wGbz4VX4"/>
            </div>
          </div>
          
          <div className="md:col-span-5 bg-panel-right border border-border p-10 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">terminal</span>
              <h3 className="text-3xl mb-4 font-headline text-foreground">Upload GitHub</h3>
              <p className="text-muted font-body">Connect your repo to teach Forge your coding patterns, components, and preferred tech stack.</p>
            </div>
            <div className="mt-12 bg-background border border-border p-4 rounded font-mono text-xs text-primary-fixed leading-loose overflow-hidden">
              <p className="opacity-50 text-muted">// Learning architecture...</p>
              <p className="text-foreground">forge analyze --repo=main-app</p>
              <p className="text-secondary-fixed-dim">✓ Pattern detected: Compound Components</p>
              <p className="text-primary-fixed">✓ Styling detected: Tailwind CSS</p>
            </div>
          </div>

          <div className="md:col-span-5 bg-panel-right border border-border p-10 rounded-xl">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">dynamic_form</span>
            <h3 className="text-3xl mb-4 font-headline text-foreground">Generate Boilerplate</h3>
            <p className="text-muted font-body">Go from visual inspiration to structured, type-safe code in seconds. No more empty screen syndrome.</p>
            <div className="mt-10 flex gap-2 overflow-hidden">
              <div className="w-1/2 h-40 bg-panel-left rounded-lg border border-border shadow-sm"></div>
              <div className="w-1/2 h-40 bg-panel-left rounded-lg border border-border shadow-sm opacity-50 translate-y-4"></div>
            </div>
          </div>

          <div className="md:col-span-7 bg-panel-left border border-border p-10 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">history_edu</span>
              <h3 className="text-3xl mb-4 font-headline text-foreground">Remember Changes</h3>
              <p className="text-muted font-body">Forge learns from your manual refinements. Your personal AI design twin grows smarter with every PR you merge.</p>
            </div>
            <div className="w-full md:w-64 h-64 bg-background rounded-full flex items-center justify-center p-8 border-4 border-border shadow-inner">
              <div className="text-center">
                <p className="text-4xl font-headline text-primary">98%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted mt-2">Consistency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background border-t border-border text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00685f22,transparent)]"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-headline mb-8">Ready to architect?</h2>
          <p className="text-muted text-xl mb-12 font-body">Join the elite engineering teams using Forge to bridge the gap between imagination and production.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/app')}
              className="bg-primary hover:bg-primary-container text-foreground px-10 py-5 rounded-md font-bold font-body text-lg shadow-[0_0_30px_rgba(0,104,95,0.4)] transition-all"
            >
              Start Your Workspace
            </button>
            <button className="border border-border hover:bg-panel-left text-foreground px-10 py-5 rounded-md font-body font-bold text-lg transition-all">Talk to Sales</button>
          </div>
        </div>
      </section>
    </>
  );
}
