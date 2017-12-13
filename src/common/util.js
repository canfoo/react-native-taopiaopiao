/**
 * Created by canfoo on 2017/12/13.
 */
export default {
  httpToHttps(url) {
    const reg = /^http:/
    if (reg.test(url)) {
      return url.replace(reg, () => {
        return 'https:'
      })
    }
    return url
  },
  getObjById(data, id) {
    let length = data.length
    for (let i = 0; i < length; i++) {
      let item = data[i]
      if (+item.id === +id) {
        return item
      }
    }
    return {}
  }
}
