var wxbarcode = require('../../utils/index.js');

Page({
    data: {
        tabArr: [],
        qrArr: [],
        scrollHeight: 0,
    },

    onLoad() {
        let systemInfo = wx.getSystemInfoSync()
        this.setData({
            scrollHeight: systemInfo.windowHeight,
            qrArr: this.qrArrList[0],
            tabArr: this.tabArrList
        })
        let thisQrArr = this.data.qrArr
        var app = getApp()
        app.globalData.selectQRcodeArr = thisQrArr
        for (let i in thisQrArr){
          let qrItem = thisQrArr[i]
          wxbarcode.qrcode('qrcode-' + i, qrItem.src, 250, 250);
        }
    },

    chooseTab(e) {
        let index = e.currentTarget.dataset.index
        let tabArr = this.data.tabArr
        for (let i in tabArr) {
            tabArr[i].selected = i == index
        }
        this.setData({
            tabArr: tabArr,
            qrArr: this.qrArrList[index]
        })

        let thisQrArr = this.data.qrArr
        var app = getApp()
        app.globalData.selectQRcodeArr = thisQrArr
        for (let i in thisQrArr) {
          let qrItem = thisQrArr[i]
          wxbarcode.qrcode('qrcode-' + i, qrItem.src, 250, 250);
        }
    },
    tabArrList:[{
      text: '棋牌',
      selected: true
    }, {
      text: '其他',
      selected: false
    }],

    qrArrList: [
      [
        { src: 'http://www.baidu.com', title: "zsl"}, 
        { src: 'http://www.baidu.com', title: "zsl2"}, 
        { src: 'http://www.baidu.com', title: "zsl3"}
      ],[]
    ],
    linkTo:function(e){
      let index = e.currentTarget.dataset.index
      let thisQrArr = this.data.qrArr[index]
      wx.navigateTo({
        url: "../detail/detail?id="+index
      })
    }
})