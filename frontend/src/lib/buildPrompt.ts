export function getAestheticInstructions(aesthetic: string): string {
  switch (aesthetic) {
    case 'Brutalist':
      return "Use heavy black borders (3-4px solid). Monospace or ultra-bold grotesque font. Black or near-black background. Acid yellow or red accent. Asymmetric layout. Uppercase headings. No border-radius. Raw, industrial feel.";
    case 'Y2K':
      return "Iridescent chrome effects using CSS gradients. Bubbly border-radius (20px+). Pink, cyan, and white color scheme. Bold italic headings. Star symbols (*) and slashes (/) as decorative elements. Early 2000s internet feel.";
    case 'Editorial':
      return "Serif font for headings (Playfair Display or similar). Warm off-white background. Narrow readable column for text. Magazine-style pull quotes. Thin hairline borders. Refined, publishing-house feel.";
    case 'Minimal':
      return "Maximum whitespace. Single font weight (regular). Ultra-thin borders or none. Monochromatic. Let the content breathe. Nothing decorative that doesn't serve a purpose.";
    case 'Glassmorphism':
      return "backdrop-filter: blur(20px) on cards. Semi-transparent backgrounds (rgba). Subtle gradient backgrounds. Frosted glass panels. Soft glows. Light and airy.";
    case 'Retro Terminal':
      return "Dark background (#0d1117 or #000). Green (#00ff41) or amber text. Monospace font everywhere. Blinking cursor animation. Scanline effect using CSS. Command-line aesthetic.";
    case 'Luxury':
      return "Very dark background. Gold (#c9a84c) or copper accent. Serif or high-contrast sans font. Generous padding. Understated, confident layout. No flashiness — just presence.";
    default:
      return "Clean, modern, highly polished professional design.";
  }
}

export function getTypographyInstructions(typography: string): string {
  switch (typography) {
    case 'Grotesque': return "Font-family must be a geometric, heavy sans-serif. Headings should be font-weight 800 or 900. Tight letter-spacing.";
    case 'Serif': return "Font-family must be a classic serif like Playfair Display, Merriweather, or Georgia. Elegant, high-contrast strokes.";
    case 'Mono': return "All text must be monospace (e.g., Space Mono, Fira Code, Courier). Technical, grid-like alignment.";
    case 'Display': return "Headings must be italic or slanted sans-serif. Very expressive and loud. Huge font sizes.";
    case 'Humanist': return "Font-family must be a warm, readable, light-weight sans-serif (e.g., Inter, Open Sans). Highly legible.";
    case 'Mixed': return "Use a high-contrast serif for headings and a monospace font for body text or labels. A striking juxtaposition.";
    default: return "Use a clean sans-serif stack.";
  }
}

export function getLayoutInstructions(layout: string): string {
  return `Implement a ${layout} layout architecture precisely. Ensure the CSS Grid/Flexbox structures natively support this topology. Avoid basic stacked layouts unless explicitly requested.`;
}

export function getToneInstructions(tones: string[]): string {
  return `The copywriting must strictly follow these tonal guidelines: ${tones.join(', ')}. Do not use generic filler text or standard marketing speak.`;
}

export function buildSystemPrompt(config: any): string {
  return `You are an expert web designer. Generate a complete, self-contained single-file HTML website.

RULES:
1. Return ONLY raw HTML. No markdown. No code fences. No explanation.
2. All CSS must be inside a <style> tag in <head>.
3. All JS must be inside a <script> tag before </body>.
4. Use Google Fonts via @import.
5. Make it fully responsive.
6. Write real, specific, non-generic copy — no lorem ipsum.
7. The design must be OPINIONATED and memorable, not generic.

AESTHETIC: ${config.aesthetic}
${getAestheticInstructions(config.aesthetic)}

PALETTE:
Background: ${config.palette.bg}
Midground: ${config.palette.mid}
Accent: ${config.palette.accent}
Use ONLY these colors as your primary palette. Map them expertly to backgrounds, borders, and text.

TYPOGRAPHY: ${config.typography}
${getTypographyInstructions(config.typography)}

LAYOUT: ${config.layout}
${getLayoutInstructions(config.layout)}

TONE: ${config.tones.join(', ')}
${getToneInstructions(config.tones)}

DENSITY: ${config.density}/100
${config.density > 60 ? 'Pack content in. Less whitespace. Sections flow tightly into each other. High information density.' : 'Generous whitespace. Let elements breathe. Lots of negative space. Minimalist sizing.'}

CONTRAST: ${config.contrast}/100
${config.contrast > 70 ? 'High contrast boundaries. Sharp distinctions between elements. Make text pop violently.' : 'Soft contrast. Subtle tonal shifts between panels. Easy on the eyes.'}

MOTION & INTERACTION:
${config.animations ? '- On page load: stagger all elements with 0.1s to 0.4s delays using CSS @keyframes and animation properties.' : '- Strictly NO page load animations. Instant render.'}
${config.hoverFx ? '- Hover effects: cards translateY(-4px), buttons scale(1.02) or invert colors, add 0.3s transitions to all interactive elements.' : '- Strictly NO hover effects.'}
${config.cursorFx ? '- Implementation requirement: Add a custom trailing cursor or dot using vanilla JavaScript tracking mousemove. Hide default cursor if necessary.' : '- No custom cursor. Use default pointers.'}
${config.scrollReveals ? '- Scroll reveals: Implement an IntersectionObserver in JS to add an .in-view class to sections as they enter the viewport, triggering CSS fade/slide ups.' : '- No scroll animations. All elements visible immediately.'}

NEVER DO THIS:
- Never use Inter, Roboto, or Arial as the main font. Use characteristic Google Fonts.
- Never use the generic AI purple gradient on a white background.
- Never center everything. Maintain strong architectural alignment.
- Never use generic hero text like "Welcome to our website" or "Empowering the future".
- Never use placeholder lorem ipsum.
- Never produce a website that looks like a standard Bootstrap/Tailwind template.

Return only the raw, minified HTML string.`;
}
