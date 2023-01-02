/// <reference types="react-scripts" />
import 'i18next';
// @ts-ignore
import ns_en from 'locales/en/ns1.json';
// @ts-ignore
import ns_ru from 'locales/ru/ns1.json';

declare module '*.svg' {
  const svg: string;
}

declare module '*.jpg' {
  const content: string;
}

declare module '*.ico' {
  const content: string;
}

declare module '*.png' {
  const content: string;
}

declare module '*.json' {
  const content: string;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns_en';
    resources: {
      ns_en: typeof ns_en;
      ns_ru: typeof ns_ru;
    };
  }
}
