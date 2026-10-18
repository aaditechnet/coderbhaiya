# Coder Bhaiya — Android packaging preparation

## What is ready

The existing TanStack Start website, routes, language preferences, original mentor images, and frontend learning demos are preserved. The site has a scalable viewport, display name, branded icons and manifest, touch-sized controls, safe-area spacing, scrollable dialogs, and portrait/landscape layouts. Browser zoom remains available. No native project, APK, offline cache, new dependency, authentication, or publishing change was added.

The website is hosted/SSR, not a standalone folder to copy from a web build into an APK. The smallest conversion is a native Android WebView shell loading the existing HTTPS website:

**https://coderbhaiya.lovable.app**

It needs internet access, including access to the existing image CDN and Google Fonts. The manifest supplies web app identity; it does not create an APK or control native system bars.

## Generate a real APK (separate step)

Use the free **Android Studio**, its Android SDK, bundled JDK, and Gradle. Create a separate Android application project (do not replace this website project), set the app label to **Coder Bhaiya**, and choose your permanent unique application ID. Use the supplied `public/app-icon-512.png` with Android Studio's Image Asset tool to produce adaptive/legacy launcher icons, including a foreground safe zone. The web icon itself is not an adaptive Android icon.

Configure the native shell:

- Add only `android.permission.INTERNET`; keep cleartext traffic disabled and load the HTTPS URL above. No API key is needed.
- Enable JavaScript and DOM storage for the existing React interactions and language preference. Keep file/content access off; do not add a JavaScript-to-native bridge or broad device permissions.
- Use a WebViewClient: allow internal HTTPS navigation on the existing website host within the WebView, open external HTTPS links with the system browser, and explicitly handle approved `mailto:`/`tel:` intents. Reject unexpected schemes and never bypass TLS certificate errors. CDN images/fonts may load as subresources without allowing external top-level navigation.
- Use Android Back handling that dismisses an open web dialog/menu first, then goes back through WebView history, then exits normally at the first page. Implement with Android's supported back APIs and test gesture navigation; avoid trapping users or adding website-only back overrides.
- Set `android:windowSoftInputMode="adjustResize"`, keep zoom/accessibility text sizing available, and test the editor with the keyboard open. Modern target SDKs need native IME/inset handling as well; the viewport tag is only a browser hint.
- Prefer sensor-driven portrait and landscape, without a forced orientation lock (`screenOrientation="unspecified"` or omit the setting). The web manifest's `orientation: any` does not set native orientation.
- Use the existing light theme: primary **#1674E9**, background **#FAFCFF**, dark navy foreground. Native status/navigation bars should have light backgrounds and dark icons. On modern Android, edge-to-edge is enforced: apply `WindowInsetsCompat` system-bar/display-cutout padding to the WebView container so content stays outside bars and cutouts. Do not assume WebView forwards native insets to CSS. If forwarding insets instead, avoid applying them twice. Website safe-area CSS supports browsers that expose these insets.
- Add a native loading indicator and a friendly connection-error view with Retry for top-level loading failures; retain the website's existing recovery behavior. Do not substitute failed subresource requests for the whole page. Do not promise offline use.
- Turn WebView debugging off for release; keep Android System WebView current on test devices. No service worker or stale page cache was introduced.

Once website changes are published through the existing publishing workflow, build a debug APK for local testing, then generate a **signed release APK** using Android Studio's “Generate Signed App Bundle / APK”. Keep the signing keystore and passwords private and backed up. Google Play distribution typically needs a signed AAB and a Play developer account (separate from installing an APK directly).

## Device acceptance checklist

Before calling the APK ready, test on a real Android phone/emulator with an up-to-date WebView:

- 320–430px-equivalent portrait screens, landscape, tablet, larger system text and font scale.
- Status/navigation bars, cutouts, gesture and three-button navigation; no covered content or double safe-area spacing.
- Hardware/system Back, menu close, dialog close, internal navigation and external links.
- All three languages, guide replay/skip, subject lessons, lab Run/Clear/Restore/custom-code notice, quiz and visual steps.
- Editor keyboard opening/closing, scroll to output, rotation while interacting.
- All original images; cold load, slow network, offline error and Retry.

Browser checks are not native WebView certification. Native status bars, keyboard, system Back, signing, and APK installation remain to be configured and tested in that separate shell.