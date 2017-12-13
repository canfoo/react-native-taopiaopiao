/**
 * Created by canfoo on 2017/12/10.
 */
import { observable, action, runInAction } from 'mobx'
import { get } from '../../common/httpTool'
import { requestInterceptor } from '../../common/descriptor'

class Apis {
  @observable swiperList = []
  @observable hotFilmList = []
  @observable comingFilmList = []

  @action
  async fetchSwiperList () {
    const response = await this.getSwiperListRequest()
    if (response && response.errno === 0) {
      const lists = []
      lists = response.data.data.returnValue.map((item) => {
        return `https://gw.alicdn.com/${item.smallPicUrl}`
      })
      runInAction(() => {
        this.swiperList.replace(lists)
      })
    }
  }

  @requestInterceptor(true, '获取轮播图数据失败')
  getSwiperListRequest () {
    return get({url: '/movie/swiper', timeout: 30}).then(res => res.json())
  }

  @action
  async fetchHotFilmList (params) {
    const response = await this.getHotFilmListRequest(params)
    if (response && response.errno === 0) {
      runInAction(() => {
        this.hotFilmList.replace(response.data.data.returnValue)
      })
    }
  }

  @requestInterceptor(true, '获取热映列表失败')
  getHotFilmListRequest (params) {
    return get({url: '/movie/hot/', params, timeout: 30}).then(res => res.json())
  }

  @action
  async fetchComingFilmList (params) {
    const response = await this.getComingFilmListRequest(params)
    if (response && response.errno === 0) {
      runInAction(() => {
        this.comingFilmList.replace(response.data.data.returnValue)
      })
    }
  }

  @requestInterceptor(true, '获取热映列表失败')
  getComingFilmListRequest (params) {
    return get({url: '/movie/coming/', params, timeout: 30}).then(res => res.json())
  }
}

export default new Apis()
