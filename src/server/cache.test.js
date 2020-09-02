import Cache from './cache.js';

const SAMPLE_KEY = 'SAMPLE_KEY';
const SAMPLE_1 = 'Aragorn';

const CACHE_SIZE = 3;

test('Cache size is correct', () => {
  const cache = new Cache(CACHE_SIZE);
  cache.setKey(SAMPLE_KEY, SAMPLE_1);
  cache.setKey('sample', 'Arwen');
  expect(cache.keyList).toHaveLength(2)
});

test('Cache can retrieve items', () => {
  const cache = new Cache(CACHE_SIZE);
  cache.setKey(SAMPLE_KEY, SAMPLE_1);
  const result = cache.getKey(SAMPLE_KEY);
  expect(result).toEqual(SAMPLE_1)
});

test('Cache can delete items', () => {
  const cache = new Cache(CACHE_SIZE);
  cache.setKey(SAMPLE_KEY, SAMPLE_1);
  const result = cache.getKey(SAMPLE_KEY);
  expect(result).toEqual(SAMPLE_1)
  cache.deleteKey(SAMPLE_KEY);
  expect(cache.getKey(SAMPLE_KEY)).toEqual(undefined)
});

test('retrieving an empty item has no results', () => {
  const cache = new Cache(CACHE_SIZE);
  expect(cache.getKey(SAMPLE_KEY)).toEqual(undefined)
});


test('Cache has a maximum size limit of 4', () => {
  const cache = new Cache(CACHE_SIZE);
  [1,2,3,4,5,6,7].forEach(value=>cache.setKey(`key-${value}`, value));
  expect(cache.keyList).toHaveLength(CACHE_SIZE);
  expect(cache.getKey('key-1')).toEqual(undefined);
  expect(cache.getKey('key-7')).toEqual(7);
});


test('Using "get" updates an item in keylist', () => {
  const cache = new Cache(CACHE_SIZE);
  [1,2,3,4,5,6,7].forEach(value=>{
    cache.setKey(`key-${value}`, value);
    cache.getKey('key-1');
  });
  expect(cache.keyList).toHaveLength(CACHE_SIZE)
  expect(cache.getKey('key-1')).toEqual(1)
  expect(cache.getKey('key-2')).toEqual(undefined);
  expect(cache.getKey('key-7')).toEqual(7)
});
