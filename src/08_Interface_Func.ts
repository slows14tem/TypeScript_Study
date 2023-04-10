// 인터페이스(Interface)
// 함수 타입 - 호출 시그니처(Call Signature)

// interface GetName {
//   (message: string): string
//   // 함수의 매개변수 message의 타입이 string이고 
//   // 이 함수가 반환하는 타입은 string이 된다
// }
// interface User {
//   name: string
//   age: number
//   getName: GetName
// }
// const heropy: User = {
//   name: 'Heropy',
//   age: 85,
//   getName(message: string) {
//     console.log(message)
//     return this.name
//   }
// }
// heropy.getName('Hello~')
