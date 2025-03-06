// TRANSLATION
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// LOCALES
import enJSON from "./locale/en.json";
import esJSON from "./locale/es.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: { translation: { ...enJSON } },
    es: { translation: { ...esJSON } },
  },
});

