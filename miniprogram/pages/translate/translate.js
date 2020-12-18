// miniprogram/pages/translate/translate.js
// import { request } from '../../utils/http'
const CryptoJs = require('crypto-js');
import * as Util from '../../utils/util';
import Http from '../../utils/http'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    formData: {
      content: '18629287141'
    }
  },

  /**
   * 表单输入 change handler
   * @param event
   */
  formInputChange (event) {
    this.setData({
      formData: {
        content: event.detail.value
      }
    })
  },

  bindTranslate () {
    console.log('input value: ', this.data.formData.content);
    this.queryToYouDao({ query: this.data.formData.content })
  },

  queryToYouDao ({ query } ) {
    console.log('Util is: ', Util)
    const appKey = '7dd76978737827f8';
    const key = 'LaAhd9Me9A6LFKuuOmidRjaDbTUkYvpX';
    const salt = Util.getUUid();
    const curtime = Math.round(+new Date() / 1000) + '';
    const from = 'zh-CHS';
    const to = 'en';
    const str1 = appKey + Util.truncate(query) + salt + curtime + key;
    const sign = CryptoJs.SHA256(str1).toString(CryptoJs.enc.Hex);

    Http.request({
      url: 'http://openapi.youdao.com/api',
      method: 'POST',
      data: {
        q: query,
        appKey,
        salt,
        from,
        to,
        sign,
        signType: 'v3',
        curtime
      }
    }).then(res => {
      console.log('res of get from you dao is: ', res)
    }).catch(err => {
      console.log('err is: ', err)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
