import { Locales } from "@/i18n/locales";

import en from "@/i18n/en.json";
import es from "@/i18n/es.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.ES]: es
};

export const defaultLocale = Locales.ES;