// custom exception
function eligibility(age) {
    if (age < 18) {
        throw "age is less than 18"
    } else if (age > 60) {
        throw "age is greater than 60"
    }
    return "valid age"
}
try {
    eligibility(10)
}
catch (e) {
    console.log(e)
}
finally {
    console.log('this will always run')
}

try {
    let result = eligibility(45)
    console.log("result is ", result)
}
catch (e) {
    console.log(e)
}