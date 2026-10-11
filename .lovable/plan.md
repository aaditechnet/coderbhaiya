# Coder Bhaiya Frontend Plan

## Goal
Build a polished, beginner-friendly EdTech experience that feels warm and encouraging, while clearly marking future functionality as unavailable rather than pretending it exists.

## Homepage experience
- Replace the blank starter page with a premium dark navy/deep-blue Coder Bhaiya homepage using semantic design tokens, electric blue/cyan highlights, restrained violet accents, rounded surfaces, and accessible contrast.
- Add a responsive shared header with the Coder Bhaiya logo/wordmark, all requested navigation links, Hindi/English selector, placeholder Sign In/Sign Up actions, and an accessible mobile menu.
- Build the supplied hero copy and calls to action, a custom code-editor learning visual made from interface elements and Lucide symbols, and a deliberately reserved mentor area that can accept the user's character image later without restructuring.
- Add distinct language/category cards, future learning-feature cards, the three-step learning journey, concise About content, and a professional footer. No fake metrics, testimonials, or completed course claims.

## Navigation and placeholder destinations
- Create separate routes for Learn, Programming Languages, DSA, Visual Learning, Coding Lab, and About so header links have real, shareable destinations.
- Create a reusable learning-area placeholder layout with dedicated routes for C, C++, Python, Java, JavaScript, TypeScript, HTML & CSS, SQL/database fundamentals, PHP, and DSA.
- Give every category its own icon, beginner label, description, and action; each action opens the matching subject destination.
- Make future feature actions open clear, friendly “Coming Soon” feedback or their relevant placeholder page. Sign In and Sign Up remain honest frontend placeholders.

## Language foundation
- Centralize brand copy, supported languages, greetings, navigation labels, and reusable translations in maintainable configuration.
- Initialize from the browser locale with a sensible English fallback, allow manual Hindi/English switching, and remember the choice locally in the browser.
- Use broad locale conventions only—no location permission or precise tracking. Keep the greeting model extensible for future languages and mentor voice support.

## Interaction and accessibility
- Add smooth in-page movement where appropriate, visible keyboard focus, predictable hover/pressed feedback, reduced-motion support, and comfortable touch targets.
- Ensure mobile layouts stack cleanly, menus can be opened and dismissed accessibly, cards never overflow, and the interface remains readable on Android phones, tablets, and desktop screens.
- Keep animation subtle and purposeful; do not add a generated character, voice, authentication, AI, code execution, data storage, analytics, or backend work.

## Technical structure
- Use reusable React/TypeScript sections and shared data-driven card components, with Lucide icons and the existing Tailwind v4 setup.
- Put shared site chrome in the root layout, page content in TanStack routes, translation/brand values in standalone frontend configuration, and reusable visual elements in focused components.
- Add unique metadata for every public route and record the reusable content/routing structure as a project architecture rule.

## Verification
- Run the existing routing test and add focused tests for every requested route, subject destination, and locale fallback behavior.
- Check the preview end-to-end on desktop and mobile: menu behavior, language switching and persistence, header links, hero actions, all subject-card destinations, Coming Soon feedback, keyboard focus, and horizontal overflow.
- Confirm the final preview builds cleanly with no runtime or console errors.
