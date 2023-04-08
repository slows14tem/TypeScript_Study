// 타입 단언 (Assertion)
// '단언' - 주저하지 않고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !


// 1) 

// 단언 키워드 as 사용
// const el = document.querySelector('body') as HTMLBodyElement
// el.textContent = 'Hello world?!'

// Non-null 단언 연산자 - ! 사용
// const el = document.querySelector('body')
// el!.textContent = 'Hello world?!'

// 타입 가드 (단언 연산자를 사용하지 않고 if문 사용해서 el이 확정적일 때만 동작하도록 코딩)
// const el = document.querySelector('body')
// if (el) {
//   el.textContent = 'Hello world?!'  
// }



// 2)

// 단언 키워드 as 사용
// function getNumber(x: number | null | undefined) {
//   return Number((x as number).toFixed(2)) // null, undifiend가 들어갈 수 있는데 숫자로 단언해버림(잘못된 코드)
// }
// getNumber(3.1415926535)
// getNumber(null)

// Non-null 단언 연산자 - ! 사용
// function getNumber(x: number | null | undefined) {
//   return Number(x!.toFixed(2)) // null, undifiend가 들어갈 수 있는데 숫자로 단언해버림(잘못된 코드)
// }
// getNumber(3.1415926535)
// getNumber(null)

// 타입 가드 적용
// function getNumber(x: number | null | undefined) {
//   if (x) {
//     return Number(x!.toFixed(2))
//   }
// }
// getNumber(3.1415926535)
// getNumber(null)



// 3)
// 단언 키워드 as 사용 (특정 타입이라고 단언해야 하는 경우는 as키워드 필요)
// function getValue(x: string | number, isNumber: boolean) {
//   if(isNumber) {
//     return Number((x as number).toFixed(2))
//   }
//   return (x as string).toUpperCase()
// }
// getValue('hello world', false)  //'HELLO WORLD'
// getValue(3.1415926535, true)  //3.14




// 할당 단언(Assertion)
// 타입스크립트에서는 초기화하기 전에 사용하면 에러 발생하는데 할당단언을 통해서 undefied로 초기화되게 함

// let num!: number
// console.log(num)
