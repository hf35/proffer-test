"use client";

import { locales, localeLabels } from "@/i18n/locales";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(locale: string) {
    router.push(`/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`);
  }

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} />

      <select
        value={currentLocale}
        onChange={(e) => switchTo(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeLabels[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}
