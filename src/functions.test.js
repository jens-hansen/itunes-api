import { makeSearchEncodedPair, onlyAvailableParameterKeys, replaceSpaces } from './functions';

test('onlyAvailableParameterKeys returns only allowed values in array', () => {
    const availableParameterKeys = ['key1', 'key2'];
    const input = ['key0', 'key1', 'key3', 'key2', 'key4'];

    expect(
      input.filter(onlyAvailableParameterKeys(availableParameterKeys))
    )
      .toEqual(availableParameterKeys);
});

test('makeSearchEncodedPair combines key of object with its value seperated by an equal sign', () => {
    const searchParams = { key1: 'value1', key2: 2, anotherKey: true }
    const result = ['key1=value1', 'key2=2', 'anotherKey=true'];
    const searchPair = makeSearchEncodedPair(searchParams);

    expect(Object.keys(searchParams).map(searchPair))
      .toEqual(result);
});

test('makeSearchEncodedPair encodes chars in value-part', () => {
    const searchParams = { key1: 'withoutspecialchars', key2: '*.has=speciäl_-üÖ' }
    const result = [
        'key1=withoutspecialchars',
        'key2=*.has%3Dspeci%C3%A4l_-%C3%BC%C3%96'
    ];

    const searchPair = makeSearchEncodedPair(searchParams);

    expect(Object.keys(searchParams).map(searchPair))
      .toEqual(result);
});

test('replaceSpaces replaces all spaces with plus-signs', () => {
    const input = ' t h i s is an akward string ';
    const result = '+t+h+i+s+is+an+akward+string+';

    expect(replaceSpaces(input)).toEqual(result);
});