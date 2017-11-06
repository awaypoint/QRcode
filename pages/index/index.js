Page({
    data: {
        tabArr: [],
        qrArr: [],
        allQrArr:[],
        scrollHeight: 0,
    },

    onLoad() {
      const self = this
      let app = getApp()
      let systemInfo = wx.getSystemInfoSync()
      self.setData({
          scrollHeight: systemInfo.windowHeight,
      })
      let selectedId = 1
      wx.request({
        url: 'https://community.wuhaamoj.com/getQRcodeCat',
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let data = res.data
          if (data.code == 0){
            for(let i in data.result){
              if (data.result[i]['selected']){
                selectedId = data.result[i]['id']
                break;
              }
            }
            self.setData({
              tabArr: data.result
            })
          }
        }
      })
      wx.request({
        url: 'https://community.wuhaamoj.com/getQRcode',
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let data = res.data
          if (data.code == 0) {
            let selectedItem = data.result[selectedId]
            self.setData({
              allQrArr:data.result,
              qrArr: selectedItem
            })
            app.globalData.selectQRcodeArr = selectedItem
          }
        }
      })
    },

    chooseTab(e) {
      let app = getApp()
      let index = e.currentTarget.dataset.index
      let tabArr = this.data.tabArr
      for (let i in tabArr) {
          tabArr[i].selected = tabArr[i]['id'] == index
      }
      let qrArr = typeof (this.data.allQrArr[index]) == 'undefined' ? [] : this.data.allQrArr[index]
      this.setData({
          tabArr: tabArr,
          qrArr: qrArr
      })
      app.globalData.selectQRcodeArr = qrArr
    },
    linkTo:function(e){
      let index = e.currentTarget.dataset.index
      let thisQrArr = this.data.qrArr[index]
      wx.navigateTo({
        url: "../detail/detail?id="+index
      })
    }
})