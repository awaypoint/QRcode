var wxbarcode = require('../../utils/index.js');

// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      title:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var app = getApp()
      let selectItem = app.globalData.selectQRcodeArr[options.id]
      this.setData({
          title: selectItem.title
      })
      wxbarcode.qrcode('qrcode-detail', selectItem.src, 500, 500);
    },

})