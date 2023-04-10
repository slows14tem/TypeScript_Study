// 인터페이스(Interface)
// 확장(상속)

// 상속
// interface UserA {
//   name: string
//   age: number
// }
// interface UserB extends UserA {
//   isvalid: boolean
// }

// const heropy: UserA = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true // 오류 발생
// }
// const neo: UserB = {
//   name: 'Neo',
//   age: 102,
//   isvalid: true
// }


// 확장
// interface FullName {
//   firstName: string
//   lastName: string
// }
// interface FullName {
//   middleName: string
//   lastName: boolean // 같은 이름의 인터페이스와 다른 타입으로 지정하면 에러 발생
// }

// const fullName: FullName = {
//   firstName: 'Tomas',
//   middleName: 'Sean',
//   lastName: 'Connery'
// }