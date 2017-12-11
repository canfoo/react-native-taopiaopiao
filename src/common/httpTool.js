/**
 * Created by canfoo on 2017/12/10.
 */
const _HOST = 'http://localhost:9090'
const delay = timeout => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('请求超时'), timeout * 1000)
    })
}

const get = ({url, params = {}, timeout}) => {
    const paramArr = []
    let urlStr = ''
    url = _HOST + url
    if (Object.keys(params).length !== 0) {
        for (const key in params) {
            paramArr.push(`${key}=${params[key]}`)
        }
    }
    if (paramArr.length) {
      urlStr = `${url}?${paramArr.join('&')}`
    } else {
      urlStr = url
    }

    if (timeout === undefined) {
        return fetch(urlStr)
    } else {
        return Promise.race([fetch(urlStr), delay(timeout)])
    }
}

export { get }
