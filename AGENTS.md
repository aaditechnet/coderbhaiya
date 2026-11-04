<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep brand copy, translations, and learning-area definitions in shared configuration so new languages and subjects can be added without restructuring pages.
- Use one dynamic `/learn/$slug` route for data-driven subject placeholders because each learning path shares the same honest pre-launch experience.
- Keep original character poses in one asset-pointer registry and mentor speech in shared translations so image selection and language expansion never require page restructuring.
- Keep lessons, quizzes and coding examples explicitly frontend-only; only exact supplied lab examples produce preview output, never evaluate arbitrary code or imply progress is saved.
- Keep the optional welcome guide in the shared shell and highlight the same placeholder account actions without inventing authentication.
- Keep the mentor context singleton and consumer hook separate from the provider component so live component refreshes cannot disconnect the shared guide state.
- Prepare Android through dependency-free web metadata and safe-area CSS; package the hosted SSR site in a separate native shell rather than changing the web bootstrap or publishing configuration.
- Keep the CS curriculum and projects in shared catalogs with stable topic IDs and separate dynamic topic/conversation routes, preserving legacy demo URLs and placeholder account buttons.
- Persist CS progress and private mentor history under owner-scoped Cloud policies; student authentication is a separate explicit account entry so legacy demos retain their frontend-only behavior.
- Use the generated Lovable AI Gateway SDK contract on server boundaries and AI Elements for conversation rendering; keep arbitrary code execution unsupported.
