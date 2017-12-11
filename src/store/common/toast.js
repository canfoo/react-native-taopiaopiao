/**
 * Created by canfoo on 2017/12/10.
 */
import { observable, action } from 'mobx'

class Nav {
  @observable toast = null

  @action
  getToastRef = ref => {
    this.toast = ref
  }

  @action
  show = (msg, delays) => {
    this.toast ? this.toast.show(msg, delays || undefined) : alert(msg)
  }
}

export default new Nav()
