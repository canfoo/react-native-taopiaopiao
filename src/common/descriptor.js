/**
 * Created by canfoo on 2017/12/10.
 */
import toastInstance from '../store/common/toast'
import loadingInstance from '../store/common/loading'

function errorHandle(errorMessage, handle) {
  if (handle) {
    handle(errorMessage || '请求失败')
  } else {
    toastInstance.show(errorMessage || '请求失败')
  }
}

export const requestInterceptor = (loading, errorMessage, errHandle) => {
  return (target, propertyKey, descriptor) => {
    const original = descriptor.value
    descriptor.value = async(...args) => {
      let result = null
      if (loading) {
        loadingInstance.showLoading()
      }
      try {
        result = await original.apply(target, args)
      } catch (e) {
        errorHandle(e.message, errHandle)
      } finally {
        if (loading) {
          loadingInstance.hideLoading()
        }
      }
      if (result && result.errno !== 0) {
        errorHandle(errorMessage || result.msg, errHandle)
      }
      return result
    }
    return descriptor
  }
}
