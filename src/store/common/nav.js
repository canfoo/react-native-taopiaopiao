/**
 * Created by canfoo on 2017/12/10.
 */
import { observable, action } from 'mobx'

class Nav {
  @observable hot = true

  @action
  switchNav = style => {
    this.hot = style
  }
}

export default new Nav()
