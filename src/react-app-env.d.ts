/// <reference types="react-scripts" />
import 'i18next';
import ns_en from './locales/en/ns1.json';
import ns_ru from './locales/ru/ns1.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns_en';
    resources: {
      ns_en: typeof ns_en;
      ns_ru: typeof ns_ru;
    };
  }
}
