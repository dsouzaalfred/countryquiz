import { Options, Country } from "@/types/types";

export const getRandomIndex = (length: number) =>
  Math.floor(Math.random() * length);

export const getFourOptions = (length: number) => {
  var arr = [];
  while (arr.length < 4) {
    var r = getRandomIndex(length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

export const shuffleArray = (array: Options[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const constructFlagOptions = (
  options: number[],
  data: Country[]
): Options[] => {
  const arr = options.map((option) => {
    const country = data[option];
    return { label: country.name, value: country.code };
  });
  return arr;
};

export const constructCapitalOptions = (
  options: number[],
  data: Country[]
): Options[] => {
  const arr = options.map((option) => {
    const country = data[option];
    return { label: country.capital, value: country.code };
  });
  return arr;
};

export const constructLanguageOptions = (
  options: number[],
  data: Country[]
): Options[] => {
  const arr = options.map((option) => {
    const country = data[option];
    return { label: country.language.name, value: country.code };
  });
  return arr;
};

export const constructCurrencyOptions = (
  options: number[],
  data: Country[]
): Options[] => {
  const arr = options.map((option) => {
    const country = data[option];
    return { label: country.currency.name, value: country.code };
  });
  return arr;
};
