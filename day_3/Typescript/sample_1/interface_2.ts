interface Human {name:string, age:number}
interface worker extends Human {
    job:string
}
interface manager extends worker {
    bonus:number
}
