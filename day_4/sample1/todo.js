const axios = require('axios').default

class ToDo{
    async fetchFromServer(){
         let data=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
         return data.data
    }
}
module.exports = ToDo