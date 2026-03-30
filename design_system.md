# Design System Specification: Aether Forge

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Architect."** 

Forge is not just a tool; it is an intelligent force that shapes digital space. This system rejects rigid layouts in favor of an editorial, high-fashion aesthetic.

### Key Principles:
*   **Intentional Asymmetry:** Breaking the 12-column grid.
*   **Tonal Depth:** Layered "glass" surfaces.
*   **Aggressive Typography Scales:** Massive high-contrast display type.

## 2. Colors & Surface Architecture
Deep amethysts and electric violets.

### Tokens:
- **Background:** `#26022e`
- **Primary:** `#f4bdff`
- **Primary Container:** `#e894ff`
- **Secondary:** `#c3c0ff`
- **Surface:** `#26022e`
- **Surface Variant:** `#4c2652`
- **Tertiary:** `#79ddff`

### Surface Hierarchy:
*   **Base:** `surface` (#26022e)
*   **Submerged:** `surface_container_lowest` (#1f0027)
*   **Elevated:** `surface_container_high` (#401a47)
*   **Peak:** `surface_bright` (#512a57)

## 3. Typography
- **Font Family:** Inter
- **Display & Headline:** Tight letter-spacing (-0.04em), heavy weights.
- **Body & Labels:** Generous leading (1.6), standard tracking.

## 4. Components
- **Buttons:** Primary has gradient fill (`primary` to `primary_container`), `lg` roundedness.
- **AI Generation Cards:** `surface_container_highest` background, `xl` roundedness.
- **Input Fields:** `surface_container_lowest` background, focus on bottom edge highlight.

## 5. Do's and Don'ts
- **DO** use whitespace as a structural element.
- **DON'T** use pure black or grey.
- **DON'T** use 1px dividers; use spacing instead.
