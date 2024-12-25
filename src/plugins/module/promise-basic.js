/**
 * Promise 함수 호출 예제
 * resolve: 작업 성공시 호출
 * reject: 작업 실패시 호출
 * @param {*} value
 * @returns
 */

const promiseExample = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(value)
      } catch (error) {
        return reject(Error(error)) // 비동기 예제 던지기
      }
    }, 1000)
  })
}
