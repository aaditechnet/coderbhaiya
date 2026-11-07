# Coder bhaiya

Build a premium, modern, highly interactive and beginner-friendly programming education website named Coder Bhaiya.



1. Product Vision



Coder Bhaiya is a programming education platform where students learn from beginner to advanced level through simple explanations, examples, visual diagrams, coding exercises and guided practice.



The platform should feel like learning from a student's favourite family member: warm, caring, patient, encouraging and always ready to help.



Brand tagline:

“Coding Seekho, Confidence Badhao!”



Supporting tagline:

“Your Friendly Guide to the World of Coding.”



The website must look like a professional EdTech startup, with excellent visual design and a comfortable learning experience.



2. Visual Design



- Create a polished dark navy and deep-blue design system with electric blue, cyan and subtle violet accents.

- Use modern typography, attractive cards, balanced spacing, elegant rounded corners and subtle shadows.

- Add smooth scrolling, tasteful hover effects and clear interaction feedback.

- Use Lucide icons and reusable React components.

- Make the design welcoming rather than overly technical or intimidating.

- Ensure excellent readability, accessible colour contrast and mobile-friendly touch targets.

- Avoid unnecessary animations, clutter and excessive gradients.

- Keep branding elements easy to change in the future.



Important: I will upload my own character image in a later phase. Do not generate, invent or integrate an animated character yet. Keep a clean, reserved space in the design for a future personalized mentor and welcome experience.



3. Header and Navigation



Create a responsive navigation bar with:



- Coder Bhaiya logo and brand name.

- Home

- Learn

- Programming Languages

- DSA

- Visual Learning

- Coding Lab

- About

- Sign In and Sign Up buttons.



Make navigation intuitive for first-time users. Create a working mobile menu and clear navigation behaviour.



Sign In and Sign Up are frontend placeholders only in this phase. Do not implement real authentication yet.



4. Hero Section



Use this headline:



“Coding Mushkil Nahi, Bas Samjhane Wala Chahiye!”



Supporting text:



“Programming ko simple examples, visual explanations aur practical exercises ke saath seekho. Basics se advanced concepts tak, Coder Bhaiya tumhari coding journey ko easy banane mein help karega.”



Add two prominent buttons:



- Start Learning

- Explore Courses



Include a visually appealing code-editor illustration, programming symbols and elegant learning-related graphics. Keep an open area where my personalized mentor image can be introduced later.



On mobile, stack the content neatly and make buttons comfortable to tap.



5. Region-Aware Greetings and Language Preferences



Plan the frontend for a warm, multilingual experience.



Examples of the intended greeting style:



- India: “Hello beta! Welcome to Coder Bhaiya.”

- United States: “Hello brother! Welcome to Coder Bhaiya.”

- Other regions: Use an appropriate friendly greeting in the user's selected language.



Requirements:



- Provide a visible language selector.

- Include Hindi, English and a structure that can support more languages in future.

- Keep greeting text in a reusable localization structure so new languages can be added easily.

- Use the browser's language/locale as a possible initial preference, with a sensible fallback and a manual language selector.

- Do not assume a user's exact location or request precise location access.

- Do not implement invasive location tracking.

- Do not hardcode a greeting that cannot be changed.

- Actual personalized spoken greetings and the animated mentor will be implemented in a later phase.



For this first phase, create only the frontend foundation for language preferences and localized greeting text.



6. Separate Programming Language Sections



Create a dedicated Programming Languages area with distinct cards and separate entry points for each subject.



Include these as separate learning categories:



1. C Programming

2. C++ Programming

3. Python

4. Java

5. JavaScript

6. TypeScript

7. HTML & CSS

8. SQL and Database Fundamentals

9. PHP

10. Data Structures and Algorithms (DSA)



Do not combine all subjects into one generic course card.



Each category must have its own icon or visual, name, short description, beginner-friendly label and clear action button.



Create separate placeholder destinations or dedicated placeholder sections for these subjects so each can become its own complete learning area later.



For example, selecting Python should lead to the Python learning placeholder, while selecting C++ should lead to the C++ learning placeholder.



These are future learning areas; do not invent complete lessons or pretend that course functionality already exists.



7. Additional Learning Feature Sections



Create attractive, separate feature cards for:



AI Programming Tutor

Learn programming concepts with explanations and examples.



Visual Learning Engine

Understand arrays, pointers, linked lists, trees and algorithms through visual diagrams.



Coding Lab

A future workspace for understanding code, debugging and practising programming.



DSA Practice

A dedicated entry point for practising data structures and algorithms.



Algorithm Builder

A future area for exploring algorithm steps and execution flow.



Student Dashboard

A future area for viewing lessons completed and learning progress.



Each card must have a meaningful action. Where functionality is not implemented, show a clear and friendly Coming Soon message.



8. How Learning Works



Create a clear three-step learning journey:



1. Choose a language or topic.

2. Learn with simple explanations, examples and visual concepts.

3. Practise and improve your programming skills.



Use a clean visual layout that a complete beginner can understand immediately.



9. Friendly Student Experience



- Use encouraging, simple and welcoming language.

- Keep navigation predictable and consistent.

- Make buttons and cards respond appropriately.

- Use accessible keyboard interactions and readable text.

- Make layouts comfortable on Android phones, tablets and desktops.

- Avoid unnecessary pop-ups and distracting effects.

- Make it easy for beginners to understand where to start.

- Keep placeholders honest and do not show fake student statistics or fake testimonials.



10. About Section and Footer



Add a concise About section explaining that Coder Bhaiya aims to make programming easier and more accessible for every student.



Create a professional footer with the logo, tagline, quick links, learning categories, About and a Privacy Policy placeholder.



11. Technical Requirements



- Use React, TypeScript, Tailwind CSS and Lucide icons.

- Build reusable components and a maintainable project structure.

- Keep language-specific learning areas separate and easy to expand.

- Store brand text and greeting translations in a structure that is easy to update.

- Ensure the project builds and runs successfully.

- Verify mobile responsiveness and prevent horizontal overflow.

- Implement the navigation, language selector, scrolling and placeholder interactions included in this phase.

- Avoid unnecessary dependencies.



STRICT SCOPE FOR THIS FIRST TASK



Build only the frontend homepage and its initial navigation, language-preference foundation and learning-category placeholders.



Do not implement the personalized animated character, character animation, voice narration, onboarding walkthrough, real login/signup, database, backend, Gemini API, AI responses, real code execution or analytics yet.



I will provide my own character image in a later phase. Keep the code organised so that the image and interactive mentor can be integrated without rebuilding the homepage.



Prioritise beautiful design, excellent user interaction, student-friendly navigation, separate learning categories and future extensibility.



Before finishing, verify that the application loads correctly, navigation works, the language selector responds, subject cards lead to appropriate placeholders and the layout works on mobile and desktop.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://coderbhaiya.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dd94b0f4-2cbd-4e05-8ced-51dffcec7dec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
