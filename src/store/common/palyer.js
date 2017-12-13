/**
 * Created by canfoo on 2017/12/13.
 */
import { observable, action } from 'mobx'
import Util from '../../common/util'

class Player {
  @observable uri = ''
  @observable cover = ''
  @observable show = false

  @action
  playVideo (uri, cover) {
    this.uri = Util.httpToHttps(uri)
    this.cover = cover
    this.show = true
  }

  @action
  closeVideo () {
    this.show = false
  }
}

export default new Player()
