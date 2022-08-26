var calculator = require('./calculator')

describe("parameter calculator testing", () => {
test.each([[2,1,3],[5,2,7]])(
    '%i+ %i =%i',(ip1, ip2, op) => {
        expect(calculator.sum(ip1,ip2)).toBe(op)
    }
)
    })