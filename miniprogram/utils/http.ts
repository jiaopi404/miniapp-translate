import { RequestOptions, ResponseContext } from '../types/http';

export default {
  request (option:RequestOptions) {
    return new Promise((resolve:Function, reject:Function) => {
      wx.request({
        url: option.url,
        method: option.method || 'POST',
        data: option.data,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res:ResponseContext) {
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        },
        fail (res:Object) {
          reject(res)
        }
      })
    })
  }
}
