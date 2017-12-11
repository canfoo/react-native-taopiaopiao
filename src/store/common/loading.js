/**
 * Created by canfoo on 2017/12/10.
 */
import { observable, action } from 'mobx'

class Loading {
  @observable show = false
  @observable count = 0

  @action
  showLoading () {
    this.count++
    this.show = true
  }

  @action
  hideLoading () {
    this.count--
    if (this.count === 0) {
      window.setTimeout(() => {
        this.show = false
      }, 500) // 延时为了更好显示loading效果
    }
  }
}

export default new Loading()
