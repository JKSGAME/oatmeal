const fn = require('../functions')

describe('Modal tests', () => {

    test('making sure state is an object', () => {
        expect(typeof fn.state).toEqual('object')
    })

    test('making sure data is an empty array', () => {
        expect(fn.state.data.length).toBe(0)
    })

})

describe('Modal method tests', () => {
    afterEach(() => {
        fn.state.data = [],
        fn.state.pointValue = 0
    })

    test('adding something to state', () => {
        fn.addData(1)
        fn.addData(2)
        fn.addData('Challenge name')
        fn.addData(4)

        expect(fn.state.data.length).toBe(4)
        expect(typeof fn.state.data[0]).toBe('number')
        expect(typeof fn.state.data[2]).toBe('string')
    })

    test('points are adding up correctly', () => {
        fn.addData(1)
        fn.addData(2)
        fn.addData(3)

        expect(fn.state.pointValue).toEqual(1 + 2 + 3)
    })

    test('submit function clears data', () => {
        fn.addData(5)
        fn.addData(6)
        fn.addData(3)
        fn.submit()

        expect(fn.state.data.length).toBe(0)
        expect(fn.state.pointValue).toEqual(0)
    })
}) 