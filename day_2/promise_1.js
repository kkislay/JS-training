let sample_promise =new Promise(function (onSuccess, onFailure){
    //here we will write the code which will fetch data from server
    onSuccess()
    onFailure()
})
sample_promise.then(function(value){
    console.log('this will be called on success')
}, function (error){
    console.log('this will be called on failure')
})