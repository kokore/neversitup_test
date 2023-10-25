const findOddInArray = require("./findOddInArray")

test('input [7]' , () => {
    expect(findOddInArray([7])).toEqual(7)
});

test('input [0]' , () => {
    expect(findOddInArray([0])).toEqual(0)
});

test('input [1,1,2]' , () => {
    expect(findOddInArray([1,1,2])).toEqual(2)
});

test('input [0,1,0,1,0]' , () => {
    expect(findOddInArray([0,1,0,1,0])).toEqual(0)
});

test('input [1,2,2,3,3,3,4,3,3,3,2,2,1]' , () => {
    expect(findOddInArray([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4)
});