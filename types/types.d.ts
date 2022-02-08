export interface Currency {
  code: string;
  name: string;
  symbol?: string | null;
}

export interface Language {
  code: string | null;
  name: string;
}

export interface Country {
  name: string;
  code: string;
  capital: string;
  region: string;
  currency: Currency;
  language: Language;
  flag: string;
  dialling_code: string;
}

export interface Options {
  label: string;
  value: string;
}

export interface QuestionCardProps {
  answerObject: Country;
  questionType:
    | "flagToCountry"
    | "capitalToCountry"
    | "currencyToCountry"
    | "languageToCountry"
    | "countryToFlag"
    | "countryToCapital"
    | "countryToCurrency"
    | "countryToLanguage";
  question: string;
  options: Options[];
}
