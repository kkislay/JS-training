let a1: string = 'hello'
let a2: number = 3.44
let a3: boolean = true
let a4: boolean = false

console.log(a4)

let a5 : number [] = [10,20,30]

let a6 : Array<number> = [10,20,30]

let a7: any = ['hello', 78, 'aaa', true] // Any is used when we don't know the data type
a7 =1
let a8:[string, number] = ['', -1]
a8[0] = 'hello'
a8[1]=23
console.log(a8)