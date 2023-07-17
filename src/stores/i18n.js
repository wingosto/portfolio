import { derived, writable } from "svelte/store";
import translations from "./translations";

const localeMap = { en: "English", pt: "Português" };

export const locale = writable(localStorage.getItem("lang") || "en");
locale.subscribe((value) => localStorage.setItem("lang", value));
export const locales = Object.keys(translations).map((l) => ({
  id: l,
  value: localeMap[l],
}));

function translate(locale, key) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let text = translations[locale][key];
  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  return text;
}

export const t = derived(locale, ($locale) => (key) => translate($locale, key));
