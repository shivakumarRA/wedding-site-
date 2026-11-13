"use client";

import { motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { getDictionary, type Dict, type Lang, type Side } from "@/data/content";

type Ctx = {
  lang: Lang;
  side: Side;
  t: Dict;
  setLang: (l: Lang) => void;
  setSide: (s: Side) => void;
};

const LangCtx = createContext<Ctx | null>(null);
const LANG_KEY = "invite-lang";
const SIDE_KEY = "invite-side-girl";

export function LanguageProvider({
  children,
  defaultSide = "bride",
}: {
  children: ReactNode;
  defaultSide?: Side;
}) {
  const [lang, setLangState] = useState<Lang>("en");
  const [side, setSideState] = useState<Side>(defaultSide);

  // Sync side if prop changes (e.g., navigating between / and /bride)
  useEffect(() => {
    setSideState(defaultSide);
  }, [defaultSide]);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY);
      if (savedLang === "te" || savedLang === "en") setLangState(savedLang);
    } catch {}
  }, []);

  const t = getDictionary(lang, side);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {}
  }, []);

  const setSide = useCallback((s: Side) => {
    setSideState(s);
    try {
      localStorage.setItem(SIDE_KEY, s);
    } catch {}
  }, []);

  return (
    <LangCtx.Provider value={{ lang, side, t, setLang, setSide }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang must be used inside <LanguageProvider>");
  return c;
}

/** English / తెలుగు segmented toggle with a sliding gold pill. */
export function LangToggle({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang } = useLang();
  const options: { id: Lang; label: string }[] = [
    { id: "en", label: "English" },
    { id: "te", label: "తెలుగు" },
  ];
  const border = tone === "light" ? "border-champagne/60" : "border-gold/50";
  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex rounded-full border ${border} p-0.5 ${
        tone === "light" ? "bg-ink/30" : "bg-ivory/80"
      } ${className}`}
    >
      {options.map((o) => {
        const active = lang === o.id;
        return (
          <button
            key={o.id}
            onClick={() => setLang(o.id)}
            aria-pressed={active}
            lang={o.id}
            className={`relative z-10 rounded-full px-3 py-1 text-[0.72rem] font-normal tracking-wide transition-colors duration-300 sm:px-3.5 ${
              active
                ? "text-ivory"
                : tone === "light"
                ? "text-ivory/85 hover:text-champagne"
                : "text-gold-deep hover:text-ink"
            } ${o.id === "te" ? "font-telugu text-[0.78rem]" : ""}`}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${tone}`}
                className="absolute inset-0 -z-10 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** Side selector: Groom's Family / Bride's Family (వరుడి వైపు / వధువు వైపు) */
export function SideToggle({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { side, setSide, t, lang } = useLang();
  const options: { id: Side; label: string }[] = [
    { id: "bride", label: t.nav.brideSide },
    { id: "groom", label: t.nav.groomSide },
  ];
  const border = tone === "light" ? "border-champagne/60" : "border-gold/50";

  return (
    <div
      role="group"
      aria-label="Family Side"
      className={`relative inline-flex rounded-full border ${border} p-0.5 ${
        tone === "light" ? "bg-ink/30" : "bg-ivory/80"
      } ${className}`}
    >
      {options.map((o) => {
        const active = side === o.id;
        return (
          <button
            key={o.id}
            onClick={() => {
              setSide(o.id);
              if (typeof window !== "undefined") {
                const targetPath = o.id === "groom" ? "/groom" : "/";
                if (window.location.pathname !== targetPath) {
                  window.history.pushState(null, "", targetPath);
                }
              }
            }}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-3 py-1 text-[0.72rem] font-normal tracking-wide transition-colors duration-300 sm:px-3.5 ${
              active
                ? "text-ivory"
                : tone === "light"
                ? "text-ivory/85 hover:text-champagne"
                : "text-gold-deep hover:text-ink"
            } ${lang === "te" ? "font-telugu text-[0.78rem]" : ""}`}
          >
            {active && (
              <motion.span
                layoutId={`side-pill-${tone}`}
                className="absolute inset-0 -z-10 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
