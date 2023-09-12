const isFetching: boolean = true
const isLoading: boolean = false 

let int: number = 41
const num: number = 3e21 
const float: number = 4.1
const message: string = 'Hello Typescript'
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = [ 'Hello', 'TS' ] 

//tuple

const passwordArr: [number, string ] = [12345, 'asd']
console.log (passwordArr)
//any

let variable: any = 'Saske'
variable = 42


function sayMyName (name: string): void {
  console.log (name) 
}

sayMyName("SDSD")

//type 

type ID = number | string 

let ID1: ID = 280899
let ID2: ID = '1234ad'

