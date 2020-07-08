const cloneArray = require('./cloneArray') 


test('properly clones array', () => {
    const array = [1, 2 ,3]
    expect(cloneArray(array)).toEqual(array)
    //One test is referencing values - .toEqual
})
test('properly clones array', () => {
    const array = [1, 2 ,3]
    expect(cloneArray(array)).not.toBe(array)
    //One test is referencing space in memory - .toBe
})
