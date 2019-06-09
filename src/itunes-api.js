import axios from 'axios'
import {
    lookup as availableLookup,
    search as availableSearch,
} from './parameterKeys.json'
import {
    makeSearchEncodedPair,
    replaceSpaces,
    onlyAvailableParameterKeys,
} from './functions'

const buildQueryString = (searchParams, availableKeys) => {
    const searchPair = makeSearchEncodedPair(searchParams)
    const filterAvailableKeys = onlyAvailableParameterKeys(availableKeys)

    return Object.keys(searchParams)
        .filter(filterAvailableKeys)
        .map(searchPair)
        .map(replaceSpaces)
        .join('&')
}

export const search = searchParams => {
    const queryString = buildQueryString(searchParams, availableSearch)
    return axios
        .get(`https://itunes.apple.com/search?${queryString}`)
        .then(res => res.data)
}

export const lookup = searchParams => {
    const queryString = buildQueryString(searchParams, availableLookup)
    return axios
        .get(`https://itunes.apple.com/lookup?${queryString}`)
        .then(res => res.data)
}
