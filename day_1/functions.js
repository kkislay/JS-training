// functions are reusable iunits
//m`kes code modular`

function add (a,b){
    console.log(a+b)
}

add(20,30)

function square (x)
{return x*x}

console.log(square(10))

var a = 138742658427329

var sum = function(a,b){   // variable function
    console.log(a+b)
}
sum(1,2)

var sub = function(a,b){
    console.log(a-b)
}
sub(2,1)

function perform (a,b,operation){
    operation(a,b)
}
// known as meta programming. you can pass function as parameter for function

perform(100,20, sum)
perform(100,20, sub)