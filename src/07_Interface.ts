// 인터페이스(Interface) - 인터페이스를 하나의 타입으로 사용하는 것

// 선택적 속성 - ? (있어도 되고 없어도 됨)
// 읽기전용 속성 - readonly

// interface User {
//   name: string
//   readonly age: number
//   isValid?: boolean
// }
// const heropy: User = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true
// }
// heropy.isValid = false;
// heropy.age = 22 (readonly라서 에러 발생)

// const neo: User = {
//   name: 'Neo',
//   age: 102
// }

// 함수 타입 - 호출 시그니처(Call Signature)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 확장(상속)