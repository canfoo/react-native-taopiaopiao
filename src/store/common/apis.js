/**
 * Created by canfoo on 2017/12/10.
 */
import { observable, action, runInAction } from 'mobx'
import { get } from '../../common/httpTool'
import { requestInterceptor } from '../../common/descriptor'

class Apis {
  @observable swiperList = []

  @action
  async fetchSwiperList () {
    const response = await this.getRequest()
    if (response && response.errno === 0) {
      runInAction(() => {
        this.swiperList.replace(response.data.data.returnValue)
      })
    }
  }

  @requestInterceptor(true, '获取轮播图数据失败')
  getRequest () {
    return get({url: '/movie/swiper', timeout: 30}).then(res => res.json())
  }
}

export default new Apis()
