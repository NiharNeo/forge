import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background w-full py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-xl font-headline text-foreground">Forge</div>
          <p className="text-muted text-sm tracking-wide max-w-xs font-body">© 2024 Forge AI. Architecting the future. Built with precision and intent.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-bold font-body uppercase tracking-[0.2em] text-muted">Product</span>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Features</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Pricing</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Docs</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-bold font-body uppercase tracking-[0.2em] text-muted">Company</span>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Contact</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-bold font-body uppercase tracking-[0.2em] text-muted">Social</span>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">Twitter</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">LinkedIn</a>
            <a className="text-muted font-body hover:text-primary transition-colors text-sm" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
