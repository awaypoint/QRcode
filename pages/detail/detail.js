// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      title:'',
      img: '',
      des: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let app = getApp()
      let selectItem = app.globalData.selectQRcodeArr[options.id]
      this.setData({
          title: selectItem.title,
          img:selectItem.img,
          des: selectItem.describe
      })
    },

})