import Mock from "mockjs"

function promiseCallBack(data, type = 0) {
  return new Promise((resolve, reject) => {
    const info = Mock.mock(data)
    type === 0 && resolve(info)
    type === 1 && reject(info)
  })
}

const MockList = {
  '/login/index': {token: "546575677888446"}
}

function MockHandle(url, type = 0) {
  let data = MockList[url] || {}
  console.log(url);
  return promiseCallBack(data, type)
}

export default MockHandle
