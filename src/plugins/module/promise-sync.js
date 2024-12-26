
const foo = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      const result = await longFunc(i) // await만 사용하여 결과를 기다림
      console.log('동기-순서 : ' + result) // 각 Promise가 완료된 후에 실행됨
    } catch (error) {
      console.error(error)
    }
  }
  return 'done'
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
