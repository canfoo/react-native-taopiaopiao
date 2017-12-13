/**
 * Created by canfoo on 2017/12/13.
 */
import { observable, action } from 'mobx'

class FilmDetail {
  @observable data = {}

  @action
  updateData = data => {
    this.data = data
  }

}

export default new FilmDetail()
