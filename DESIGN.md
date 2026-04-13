# ComplyAnto Design System (DESIGN.md)

## Overview
This document outlines the core visual theme and design system for **ComplyAnto**, an AML/CFT regulatory consulting firm. AI agents should read this document to generate consistent, on-brand UI components across the entire project.

## Brand Identity
* **Brand Name:** ComplyAnto
* **Tagline:** AML Consulting / Consultant Core
* **Vibe/Aesthetic:** Professional, highly secure, trustworthy, enterprise-grade, financial, and authoritative. The UI should feel like a modern, high-end fintech or legal tech platform.

## Color Palette

### Primary Brand Colors
* **Dark Navy (Primary):** `#000080` - Used for main headings, primary logo text, and high-emphasis backgrounds.
* **Bright Blue (Secondary):** `#0088ff` - Used for primary actions, links, logo accents, and active states.

### UI Colors (Tailwind based)
* **Backgrounds:** 
  * Main: `bg-white`
  * Subtle/Off-white: `bg-slate-50` or `bg-slate-100`
  * Dark/Footer: `bg-slate-900` or `bg-[#0f172a]`
* **Text:**
  * Primary: `text-slate-900`
  * Secondary: `text-slate-500` or `text-slate-400`
* **Semantic/Feedback:**
  * Success/Secure: `emerald-500` to `emerald-700` (Used for "Secure Node Active" badges and trust signals)
  * Warning/Accent: `amber-500` (Used sparingly for alerts or specific highlights)

## Typography

### Font Families
1. **Playfair Display (Serif):** Used EXCLUSIVELY for the main "ComplyAnto" logo text (Weight: 900).
2. **Merriweather (Serif):** Used EXCLUSIVELY for the "AML Consulting" sub-text in the logo (Weight: 700).
3. **Inter / System Sans-Serif:** Used for ALL general UI, body text, headings, buttons, and navigation. 

### Typographic Scale & Rules
* **Navigation/Eyebrows:** Small, uppercase, widely tracked (e.g., `text-[11px] uppercase tracking-[0.2em] font-bold`).
* **Headings:** Clean, tight tracking (`tracking-tight`), usually dark navy or slate-900.
* **Body:** Highly legible, relaxed line height (`leading-relaxed`), slate-500.

## Component Guidelines

### Buttons & Interactive Elements
* **Primary Buttons:** Bright blue (`#0088ff`) background, white text, rounded corners (`rounded-xl` or `rounded-lg`), subtle hover transform or shadow.
* **Disabled/Inactive:** Slate backgrounds with slate-400 text, `cursor-not-allowed`.
* **Hover States:** Links should transition smoothly (`transition-colors duration-300`).

### Cards & Containers
* **Style:** White backgrounds, subtle borders (`border-slate-100`), and soft shadows (`shadow-sm` or `shadow-md`).
* **Backdrops:** Use `backdrop-blur-md` with semi-transparent backgrounds (like `bg-white/95`) for sticky headers to create a modern glass effect.

### Icons
* **Library:** Lucide React.
* **Style:** Keep stroke widths consistent (usually 2px). Use icons to reinforce security (Shield, Lock, FileCheck).

## AI Agent Instructions
When generating new components, pages, or modifying existing ones:
1. **ALWAYS** adhere to the `#000080` and `#0088ff` brand colors for primary elements.
2. **NEVER** use Playfair Display or Merriweather outside of the Logo component unless explicitly requested for a highly stylized editorial header.
3. **MAINTAIN** the "Secure/Enterprise" vibe by using generous whitespace, crisp borders, and avoiding overly playful animations.
4. **USE** Tailwind CSS utility classes for all styling.
