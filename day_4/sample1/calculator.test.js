var calculator = require('./calculator')

describe("testing the calculator functionality", () => {
    test("testing the sum functionality", ()=>{
        let result = calculator.sum(1,2)
        expect(result).toBe(3)
    })

    test ("testing the diff functionality",  ()=>{
        let result = calculator.diff(2,1)
        expect(result).toBe(1)
    })

    test ("testing the product functionality",  ()=>{
        let result = calculator.product(2,1)
        expect(result).toBe(2)
    })

    //skip using xtest
    xtest ("testing the sum2 functionality",  ()=>{
        let result = calculator.sum(2.3,1.1234567)
        expect(result).toBe(3.4234567)
    })
})