/** ------------------------------
 * # 이름 없는 단일 모듈 반환1
 * import anonymous from './primise.js'
 * anonymous() // kin 출력
 */
/* export default function kin () {
  console.log('kin')
} */

/** ------------------------------
 * # 이름 없는 단일 모듈 반환2
 * import anonymous from './primise.js'
 * anonymous() // bye 출력
 */
const bye = () => {
  console.log('bye')
}
// export default bye

/** ------------------------------
 * # 다중 모듈 {구조분해할당} - 함수 이름으로 접근
 * import { hi } from './primise.js'
 */
export const hi = () => {
  console.log('hi')
}

/** ------------------------------
 * 이름 없는 객체 타입 단일 모듈 반환
 * import anonymous from './primise.js'
 * anonymous.foo() // foo 출력
 */
const foo = () => {
  console.log('foo')
}
export default {
  foo
}
