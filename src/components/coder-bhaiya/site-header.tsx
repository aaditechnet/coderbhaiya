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

const nav = [
  { key: "home", to: "/" },
  { key: "learn", to: "/learn" },
  { key: "languages", to: "/programming-languages" },
  { key: "dsa", to: "/dsa" },
  { key: "visual", to: "/visual-learning" },
  { key: "lab", to: "/coding-lab" },
  { key: "about", to: "/about" },
] as const;

export function SiteHeader() {
  const { language, setLanguage, text } = useLanguage();
  const [placeholder, setPlaceholder] = useState("");

  const LanguageSelect = ({ mobile = false }: { mobile?: boolean }) => (
    <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
      <SelectTrigger className={mobile ? "h-11 w-full" : "h-10 w-[112px]"} aria-label="Choose language">
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
      <header className="sticky top-0 z-50 border-b border-border bg-header-backdrop backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1480px] items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Coder Bhaiya home" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><BrandMark /></Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex" aria-label="Main navigation">
            {nav.map((item) => <Link key={item.key} to={item.to} activeOptions={{ exact: item.to === "/" }} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "bg-accent text-foreground" }}>{text[item.key]}</Link>)}
          </nav>
          <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
            <LanguageSelect />
            <Button variant="ghost" onClick={() => setPlaceholder("Sign In")}>{text.signIn}</Button>
            <Button onClick={() => setPlaceholder("Sign Up")}>{text.signUp}</Button>
          </div>
          <div className="ml-auto lg:hidden">
            <Sheet>
              <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Open navigation menu"><Menu /></Button></SheetTrigger>
              <SheetContent className="w-[88vw] max-w-sm overflow-y-auto">
                <SheetHeader className="text-left"><SheetTitle><BrandMark /></SheetTitle><SheetDescription>Your next coding step is always easy to find.</SheetDescription></SheetHeader>
                <nav className="mt-7 flex flex-col gap-1" aria-label="Mobile navigation">
                  {nav.map((item) => <SheetClose asChild key={item.key}><Link to={item.to} className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground">{text[item.key]}</Link></SheetClose>)}
                </nav>
                <div className="mt-6 border-t border-border pt-6"><LanguageSelect mobile /></div>
                <div className="mt-4 grid grid-cols-2 gap-2"><Button variant="outline" onClick={() => setPlaceholder("Sign In")}>{text.signIn}</Button><Button onClick={() => setPlaceholder("Sign Up")}>{text.signUp}</Button></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <ComingSoon open={Boolean(placeholder)} title={placeholder} onClose={() => setPlaceholder("")} />
    </>
  );
}
