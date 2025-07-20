# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 What is lucide-react?
lucide-react is a modern icon library for React, built with beautiful and minimal SVG icons. It’s the official React wrapper for the Lucide icon set, which is an open-source fork of the Feather Icons project.
Very lightweight
Fully tree-shakable (only includes icons you use)
Based on clean, consistent outline-style icons
Works well with Tailwind and modern design systems


react-icons is a very popular and flexible icon library that acts as a wrapper for many icon packs, including:

FontAwesome (fa)
Material Icons (md)
Feather Icons (fi)
Bootstrap Icons (bs)
Hero Icons, Remix, etc.
You can use hundreds of icons from different styles in one package


diference between them is 
Feature	lucide-react	react-icons
Icon Styles	Only Lucide (outline-style)	Multiple packs (FontAwesome, Material, etc.)
Bundle Size	Very small (tree-shakable)	Larger (can grow depending on icon sets used)
Customization	Easy with Tailwind or CSS	Customizable too
Simplicity	Minimal, clean look	Varies (some icons are bold, some are outline)
Best For	Clean UIs, dashboards, Tailwind apps	When you need many icon types or specific sets
Installation Size	Small (about ~30KB used icons)	Medium to large depending on how many icons used
