import en from "./locales/en.json";

export const LOCALES: {
  [prop: string]: {
    [prop: string]: string[];
  };
} = {
  en
};

function capitalize(a: string) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}

export function match(a: string, b: string, locale: string = "en"): boolean {
  if (locale == "" || locale === null) {
    locale = "en";
  }
  if (!LOCALES[locale]) {
    throw new Error(`Locale '${locale}' not supported`);
  }
  a = capitalize(a);
  b = capitalize(b);
  if (LOCALES[locale][a] && LOCALES[locale][a].indexOf(b) >= 0) {
    return true;
  }
  if (LOCALES[locale][b] && LOCALES[locale][b].indexOf(a) >= 0) {
    return true;
  }
  return false;
}

export function hypocoristics(a: string, locale: string = "en"): string[] {
  if (locale == "" || locale === null) {
    locale = "en";
  }
  if (!LOCALES[locale]) {
    throw new Error(`Locale '${locale}' not supported`);
  }
  // if supplied string is a main name, return its shorten versions
  if (LOCALES[locale][a]) {
    return LOCALES[locale][a];
  }

  // otherwise, return all matchings incl. main names
  const found: string[] = [];
  for (const [key, value] of Object.entries(LOCALES[locale])) {
    if (value.indexOf(a) >= 0) {
      found.push(key, ...value);
    }
  }
  return found;
}
