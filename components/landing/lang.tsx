"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "hi" | "en";
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "en",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === "hi" ? "en" : "hi")) }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
