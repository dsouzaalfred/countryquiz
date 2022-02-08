import { Options, Country } from "@/types/types";

export const getRandomIndex = (length: number) =>
  Math.floor(Math.random() * length);

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

export const shuffleArray = (array: Options[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
