export const onlyAvailableParameterKeys = availableParameterKeys =>
  key => availableParameterKeys.includes(key);

export const makeSearchEncodedPair = searchParams =>
  key => `${key}=${encodeURIComponent(searchParams[key])}`;

export const replaceSpaces = str =>
  str.replace(/ /g, '+');
