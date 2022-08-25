interface SamepleAddress {street:number, city:string}
interface SampleUser {
    name:string, age:number, address:SamepleAddress}

    let a11 :SamepleAddress = {street:1,city:'Dublin'}
    let u11 :SampleUser  = {name:'jhno', age:30, address:a11}
    
    let u21:SampleUser = {name:'est', age:37, address:a11}

    console.log(u11)
    console.log(u21)
