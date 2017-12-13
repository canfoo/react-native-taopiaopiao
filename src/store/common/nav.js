/**
 * Created by canfoo on 2017/12/10.
 */
import {
  observable,
  action,
  autorun
} from 'mobx'
import Apis from './apis'

class Nav {
  @observable hot = true

  @action
  switchNav = style => {
    this.hot = style
  }
}

const NavInstance = new Nav()

autorun(() => {
  if (!NavInstance.hot && !Apis.comingFilmList.slice().length) {
    console.log('ks1')
    Apis.fetchComingFilmList({limit: 20, offset: 0})
  }
})

export default NavInstance
