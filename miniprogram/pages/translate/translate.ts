// miniprogram/pages/translate/translate.js
// import { request } from '../../utils/http'
const CryptoJs = require('crypto-js');
import * as Util from '../../utils/util';
import Http from '../../utils/http'
import { YouDaoResp } from '../../types/youdao'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    languageFlag: false,
    formData: {
      content: '18629287141'
    },
    translateData: {}
  },

  /**
   * 表单输入 change handler
   * @param event
   */
  formInputChange (event: { detail: { value: string; }; }) {
    this.setData({
      formData: {
        content: event.detail.value
      }
    });
  },

  /**
   * 点击切换语言
   */
  handleSwitchLanguage () {
    this.setData({
      languageFlag: !this.data.languageFlag
    });
  },

  bindTranslate () {
    console.log('input value: ', this.data.formData.content);
    this.queryToYouDao(this.data.formData.content)
  },
  /**
   * 播放发音
   * @param event
   */
  bindPlayPhonetic (event: any) {
    const { speech: speechUrl } = event.currentTarget.dataset
    console.log('speechUrl is: ', speechUrl)
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = speechUrl
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  /**
   * 向 openAPI 进行请求
   * @param query
   */
  queryToYouDao (query:string) {
    const appKey = '7dd76978737827f8';
    const key = 'LaAhd9Me9A6LFKuuOmidRjaDbTUkYvpX';
    const salt = Util.getUUid();
    const curtime = Math.round(+new Date() / 1000) + '';
    const from = this.data.languageFlag ? 'en' : 'zh-CHS';
    const to = this.data.languageFlag ? 'zh-CHS' : 'en';
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
        curtime,
        strict: 'true'
      }
    }).then((res:YouDaoResp) => {
      this.setData({
        translateData: res
      })
    }).catch(err => {
      console.log('err is: ', err)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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

  }
})
