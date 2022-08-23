const axios = require('axios').default
const { parse } = require('json2csv');
const fields = ['userId', 'id', 'title','completed'];

var myData1 =[{'field1':'abc', 'field2': 'data'},]
const opts = { fields };
axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res =>{

  const csv = parse(res.data, opts);
  console.log(csv);
})
