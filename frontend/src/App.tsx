import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Customizer } from './components/Customizer';
import { Preview } from './components/Preview';
import { LandingPage } from './pages/LandingPage';

function ForgeApp() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-foreground">
      <Customizer />
      <Preview />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ForgeApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

