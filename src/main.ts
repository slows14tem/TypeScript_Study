//타입 종류

/// 문자
// let str: string //undifined로 나오지만 향후 변수를 선언할 때 문자여야만 함
// let red: string = "Red"
// let green: string = "Green"
// let myColor: string = `My color is ${red}.`
// let yourColor: string = 'Your color is' + green

/// 숫자
// let num: number
// let integer: number = 6
// let float: number = 3.14
// let infinity: number = Infinity
// let nan: number = NaN

/// 불린
// let isBoolean: boolean
// let isDone: boolean = false

/// Null(명시적) / Undefined(암시적) - 모든 타입에 대한 하위 타입이라고 함(거의 사용할 일 없음)
// let nul: null
// let und: undefined
// nul = undefined //error
// nul = null
// let num: number
// num = 123
// console.log(nul)
// console.log(und)
// console.log(num)

/// 배열
// const fruits: string[] = ['Apple', 'Banana', 'Cherry']
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
// const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3] //string과 number를 둘 다 사용
// const array: [] = [1,2,3] //배열의 타입을 지정하지 않으면 오류 발생

/// 객체
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}
// //위의 방식은 엄격하지 않아서 거의 사용 안함
// interface User {
//   //반복 가능한 타입을 생성
//   name: String
//   age: number
//   isValid: boolean
// }
// const userA: User = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true
// }
// const userㅠ: User = {
//   name: 'Neo',
//   age: 22,
//   isValid: false
// }

/// 함수
// const add = function (x: number, y: number): number {
//   return x + y
// }
// const a: number = add(1, 2)
// const hello = function (): void {
//   //타입스크립트에서 함수에 리턴이 없으면 명시적으로 void가 됨
//   console.log('Hello World~')
// }
// const h: void = hello()


//자바스크립트에는 없는 타입스크립트의 추가 타입

/// Any (anything 아무거나 할당 가능) - 타입스크립트를 사용하는 이유가 없어지기 때문에 잘 안씀
// let hello: any = 'Hello World'
// hello = 123
// hello = false
// hello = null
// hello = {}
// hello = []
// hello = function () {}

/// Unknown (어떤 데이터가 할당될지 알 수 없음)
// const u: unknown = 123
// const any: any = u
// const boo: boolean = u
// const num: number = u
// const arr: string[] = u
// const obj: { x: string, y: number } = u

/// Tuple
// const tuple: [string, number, boolean] = ['a', 1, false]
// const users: [number, string, boolean][] 
//   = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]]

/// Void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`)
// }
// const hi: void = hello('world')

/// Never (절대 발생하지 않을 타입 - 배열 선언 자리에 아무것도 없으면 자동으로 never타입으로 선언됨)
// const nev: [] = []
// nev.push(3)

/// Union (여러개의 타입을 지정하고 싶을 때 사용)
// let union: string | number
// union = 'Hello type!'
// union = 123
// union = false

/// Intersection
// interface User {
//   name: string,
//   age: number
// }
// interface Validation {
//   isValid: boolean
// }
// const heropy: User & Validation = {
//   name: 'Neo',
//   age: 85,
//   isValid: true
// }