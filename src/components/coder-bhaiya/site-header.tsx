import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Languages, Menu } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { ComingSoon } from "./coming-soon";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { supportedLanguages, type LanguageCode } from "@/config/i18n";
import { useLanguage } from "@/context/language-context";
import { useMentorGuide } from "@/context/use-mentor-guide";

const nav = [
  { key: "home", to: "/" },
  { key: "learn", to: "/learn" },
  { key: "languages", to: "/programming-languages" },
  { key: "dsa", to: "/dsa" },
  { key: "visual", to: "/visual-learning" },
  { key: "lab", to: "/coding-lab" },
  { key: "about", to: "/about" },
  { key: "dashboard", to: "/dashboard" },
] as const;

export function SiteHeader() {
  const { language, setLanguage, text } = useLanguage();
  const { step } = useMentorGuide();
  const [placeholder, setPlaceholder] = useState("");

  const LanguageSelect = ({ mobile = false }: { mobile?: boolean }) => (
    <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
      <SelectTrigger className={mobile ? "h-11 w-full" : "h-10 w-[124px]"} aria-label="Choose language">
        <Languages className="size-4 text-primary" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {supportedLanguages.map((item) => <SelectItem value={item.code} key={item.code}>{item.label}</SelectItem>)}
      </SelectContent>
    </Select>
  );

  return (
    <>
      <header className="site-header sticky top-0 z-50 border-b border-border bg-header-backdrop backdrop-blur-xl">
        <div className="mx-auto grid h-[76px] max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:gap-6 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Coder Bhaiya home" className="min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:shrink-0"><BrandMark /></Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 2xl:flex" aria-label="Main navigation">
            {nav.map((item) => <Link key={item.key} to={item.to} activeOptions={{ exact: item.to === "/" }} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "bg-accent text-foreground" }}>{text[item.key]}</Link>)}
          </nav>
          <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
            <LanguageSelect />
            <Button variant="ghost" className={step === 1 ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""} onClick={() => setPlaceholder("Sign In")}>{text.signIn}</Button>
            <Button className={step === 1 ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""} onClick={() => setPlaceholder("Sign Up")}>{text.signUp}</Button>
          </div>
          <div className="ml-auto md:ml-0 2xl:hidden">
            <Sheet>
              <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Open navigation menu"><Menu /></Button></SheetTrigger>
              <SheetContent className="mobile-navigation w-[88vw] max-w-sm overflow-y-auto">
                <SheetHeader className="text-left"><SheetTitle><BrandMark /></SheetTitle><SheetDescription>Your next coding step is always easy to find.</SheetDescription></SheetHeader>
                <nav className="mt-7 flex flex-col gap-1" aria-label="Mobile navigation">
                  {nav.map((item) => <SheetClose asChild key={item.key}><Link to={item.to} className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground">{text[item.key]}</Link></SheetClose>)}
                </nav>
                <div className="mt-6 border-t border-border pt-6"><LanguageSelect mobile /></div>
                <div className={`mt-4 grid grid-cols-2 gap-2 ${step === 1 ? "rounded-md ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}><Button variant="outline" onClick={() => setPlaceholder("Sign In")}>{text.signIn}</Button><Button onClick={() => setPlaceholder("Sign Up")}>{text.signUp}</Button></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {step === 1 && <div className="border-b border-primary/30 bg-card px-5 py-3 md:hidden"><div className="mx-auto flex max-w-7xl gap-3"><Button variant="outline" className="ring-2 ring-primary" onClick={() => setPlaceholder("Sign In")}>{text.signIn}</Button><Button className="ring-2 ring-primary" onClick={() => setPlaceholder("Sign Up")}>{text.signUp}</Button></div></div>}
      <ComingSoon open={Boolean(placeholder)} title={placeholder} onClose={() => setPlaceholder("")} />
    </>
  );
}
