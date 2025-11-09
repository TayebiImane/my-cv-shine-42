"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", label: "English", flag: "EN" },
  { code: "fr", label: "Français", flag: "FR" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en"); // valeur par défaut stable
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(i18n.language); // on met à jour la vraie langue après montage
  }, [i18n.language]);

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setLang(code);
    setOpen(false);
  };

  if (!mounted) return null; 

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        <span>{currentLang.flag}</span>
        <span>▼</span>
      </Button>

      {open && (
        <ul className="absolute right-0 mt-1 border rounded bg-white shadow-lg w-40 z-50">
          {languages.map((l) => (
            <li
              key={l.code}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => handleChangeLanguage(l.code)}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
