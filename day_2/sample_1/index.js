var axios = require('axios').default
var promise = axios.get('https://jsonplaceholder.typicode.com/todos123')
promise.then (function(data){
    console.log(data.data)
})