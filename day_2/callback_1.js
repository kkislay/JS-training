function square (n){
    console.log(n*n)
}

function cube(n){
    console.log(n*n*n)
}

// callback is calling function

function perform(a, callback){
    console.log('input passed is ', a)
callback(a)
}

perform(20, square)
perform(30, cube)