const countSmileys = require('./countSmileys')

test('input `[`:)`, `;(`, `;}`, `:-D`]`' , () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toEqual(2)
});

test('input `[`;D`, `:-(`, `:-)`, `;~)`]`' , () => {
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3)
});

test('input `[`;]`, `:[`, `;*`, `:$`, `;-D`]`' , () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1)
});