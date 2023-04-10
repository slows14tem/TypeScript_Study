// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
// interface Fruits {
//   [item: number]: string
//    index 가능한 인터페이스를 생성한 것
// }
// const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
// console.log(fruits[0])

// 객체
// interface User {
//   [key: string]: unknown
//   name: string
//   age: number
// }
// const heropy: User = {
//   name: 'Heropy',
//   age: 85
// }
// heropy['isValid'] = true
// heropy['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
// // 인덱스 표기법으로 원하는 인덱스를 추가함
// console.log(heropy)

// interface Payload {
//   [key: string]: unknown
// }
// function logValues(payload: Payload) {
//   for (const key in payload) {
//     console.log(payload[key])
//   }
// }

// interface User {
//   [key: string]: unknown
//   name: string
//   age: number
//   isValid: boolean
// }
// const heropy: User = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true
// }
// logValues(heropy)