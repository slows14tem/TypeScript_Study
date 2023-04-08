// 타입 가드 (Guards)

// function logText(el: Element) {
//   console.log(el.textContent)
// }

// Element라고 단언을 사용하면 코드에서 에러는 사라지지만 실제 h1 테그가 없기 때문에 콘솔에서 에러 발생
// 값이 존재 할때만 코드가 실행되게 해서 에러를 방어했다고 해서 타입 가드?

// const h1El = document.querySelector('h1')
// if (h1El instanceof HTMLHeadingElement) {
//   logText(h1El)
// }

// function add(val: string | number | boolean) {
//   let res = 'Result => '
//   if (typeof val === 'number') {
//     res += val.toFixed(2)
//   } 
//   if (typeof val === 'string') {
//     res += val.toUpperCase()
//   }
//   console.log(res)
// }

// add(3.141592)
// add('hello world')