var a =10
if (a>10){
    let result ='greater than 10' //declared as let and can't be acccessed outside of the scope
}
else {
     let result='less than 10'
}
// cons is also using the same scope as let 
console.log(result)