/**
 * 비동기 함수 호출
 */
const foo = () => {
  for (let i = 0; i < 10; i++) {
    longFunc(i)
      .then(result => {
        console.log('비동기-순서 : ' + result) // 결과 도출까지 랜덤한 시간이 순차적으로 부여되기 때문에 실행된 순서가 곧 i값이 된다.
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const time = Math.random() * 1000
    console.log(time)
    setTimeout(() => {
      resolve(i)
    }, time)
  })
}

export default {
  foo
}
