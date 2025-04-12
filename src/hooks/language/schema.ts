import { z } from 'zod';

export const enum SupportedLanguages {
  EN = 'en',
  ES = 'es',
  JA = 'ja',
  KO = 'ko',
  ZH_HANS = 'zh-hans',
  ZH_HANT = 'zh-hant',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN,
  SupportedLanguages.ES,
  SupportedLanguages.JA,
  SupportedLanguages.KO,
  SupportedLanguages.ZH_HANS,
  SupportedLanguages.ZH_HANT,
]);

export type Language = z.infer<typeof languageSchema>;
