const permutations = require("./permutations")

test('input `a`' , () => {
    expect(permutations('a')).toEqual(['a'])
});

test('input `ab`' , () => {
    expect(permutations('ab')).toEqual(['ab', 'ba'])
});

test('input `abc`' , () => {
    expect(permutations('abc')).toEqual(['abc','acb','bac','bca','cab','cba'])
});

test('input `aabb`' , () => {
    expect(permutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
});