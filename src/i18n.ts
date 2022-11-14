import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationVI from "./locales/vi/translation.json";
import translationJP from "./locales/jp/translation.json";

const resources = {
  en: {
    translations: translationEN,
  },
  vi: {
    translations: translationVI,
  },
  jp: {
    translations: translationJP,
  },
};

i18n.use(initReactI18next).init({
  lng: "vi",
  resources,
  fallbackLng: "vi",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
