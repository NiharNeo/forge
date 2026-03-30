import React from 'react';
import { NavBar } from '../components/LandingPage/NavBar';
import { HeroSection } from '../components/LandingPage/HeroSection';
import { FlowDiagram } from '../components/LandingPage/FlowDiagram';
import { FeaturesBento } from '../components/LandingPage/FeaturesBento';
import { Footer } from '../components/LandingPage/Footer';

export function LandingPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen dark">
      <NavBar />
      <HeroSection />
      <FlowDiagram />
      <FeaturesBento />
      <Footer />
    </div>
  );
}
