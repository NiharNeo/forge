import React from 'react';

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-headline italic text-primary">Forge</div>
        <div className="hidden md:flex items-center space-x-10">
          <a className="text-primary font-body font-semibold border-b-2 border-primary transition-colors duration-300" href="#">Features</a>
          <a className="text-muted font-body font-medium hover:text-primary transition-colors duration-300" href="#">Pricing</a>
          <a className="text-muted font-body font-medium hover:text-primary transition-colors duration-300" href="#">Docs</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden text-primary font-body font-semibold md:block hover:opacity-80 transition-all">Log In</button>
          <a href="/app" className="bg-primary text-background font-body px-6 py-2.5 rounded-md font-medium metal-shine active:scale-95 transition-transform inline-block">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
