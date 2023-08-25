export const countCharactersRecursively = (value: any, max: number) => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    let totalCharacters = 0;
    for (const item of value) {
      totalCharacters += countCharactersRecursively(item, max);
      if (totalCharacters > max) break;
    }

    return totalCharacters;
  } else if (typeof value === 'object' && value !== null) {
    let totalCharacters = 0;
    for (const key in value)
      if (key in value) {
        totalCharacters += countCharactersRecursively(value[key], max);
        if (totalCharacters > max) break;
      }

    return totalCharacters;
  }
  return 0;
};
