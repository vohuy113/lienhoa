import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../i18n/en.json";
import translationVI from "../i18n/vn.json";
const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};
const lng = localStorage.getItem("lng") || "en";
i18n.use(initReactI18next).init({
  resources,
  lng,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
