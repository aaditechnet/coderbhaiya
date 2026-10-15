import type { Language } from "@/config/i18n";

export type ErrorCopy = { title: string; body: string; speech: string; retry: string; home: string; learn: string; details: string };

export const errorCopy: Record<string, ErrorCopy> = {
  en: {
    title: "Oops, this page tripped over a bug",
    body: "Don't worry — nothing you did is lost. Try again, or continue learning from another page.",
    speech: "Don't be scared of errors, beta. Debugging is part of coding too!",
    retry: "Try again", home: "Go to Home", learn: "Browse lessons", details: "Technical details",
  },
  hinglish: {
    title: "Oops, is page mein ek bug aa gaya",
    body: "Tension mat lo — dobara try karo, ya kisi aur page se learning continue karo.",
    speech: "Error se darna nahi beta. Debugging bhi coding ka part hai!",
    retry: "Phir se try karo", home: "Home par jao", learn: "Lessons dekho", details: "Technical details",
  },
  hi: {
    title: "उफ़, इस पेज में एक गड़बड़ी आ गई",
    body: "चिंता मत करो — दोबारा कोशिश करो, या किसी दूसरे पेज से सीखना जारी रखो।",
    speech: "एरर से डरना नहीं बेटा। डिबगिंग भी कोडिंग का हिस्सा है!",
    retry: "फिर से कोशिश करो", home: "होम पर जाओ", learn: "पाठ देखो", details: "तकनीकी जानकारी",
  },
};

export function getErrorCopy(language?: Language | string): ErrorCopy {
  return errorCopy[language ?? "en"] ?? errorCopy.en;
}
