import axios from 'axios';
import {
    search as availableSearch,
    lookup as availableLookup
} from './parameterKeys.json';
import {
    makeSearchEncodedPair,
    replaceSpaces,
    onlyAvailableParameterKeys
} from "./functions";

const buildQueryString = (searchParams, availableKeys) => {
    const searchPair = makeSearchEncodedPair(searchParams);
    const filterAvailableKeys = onlyAvailableParameterKeys(availableKeys);

    return Object.keys(searchParams)
      .filter(filterAvailableKeys)
      .map(searchPair)
      .map(replaceSpaces)
      .join('&');
};

export const iTunesSearch = searchParams => {
    const queryString = buildQueryString(searchParams, availableSearch);
    return axios.get(`https://itunes.apple.com/search?${queryString}`);
};

export const iTunesLookup = searchParams => {
    const queryString = buildQueryString(searchParams, availableLookup);
    return axios.get(`https://itunes.apple.com/lookup?${queryString}`);
};