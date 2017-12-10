/**
 * Created by ljunb on 2017/5/25.
 */
import {observable, action} from 'mobx'

class Nav {
  @observable hot = true

  @action
  switchNav = style => {
    this.hot = style
  }
}

export default new Nav()
