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
        for (let i in thisQrArr) {
          let qrItem = thisQrArr[i]
          wxbarcode.qrcode('qrcode-' + i, qrItem.src, 250, 250);
        }
    },
    tabArrList:[{
      text: 'A',
      selected: true
    }, {
      text: 'B',
      selected: false
    }, {
      text: 'C',
      selected: false
    }],

    qrArrList: [
        [{ src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'}, 
        { src: 'http://www.baidu.com'},
        { src: 'http://www.baidu.com'}],

        [{
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509548849796&di=76396856faff7490adf6ec94feb57848&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028193047_3Sj8x.jpeg",
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509548849796&di=76396856faff7490adf6ec94feb57848&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028193047_3Sj8x.jpeg",
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509548849796&di=76396856faff7490adf6ec94feb57848&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028193047_3Sj8x.jpeg",
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509548849796&di=76396856faff7490adf6ec94feb57848&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028193047_3Sj8x.jpeg",
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509548849796&di=76396856faff7490adf6ec94feb57848&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028193047_3Sj8x.jpeg",
        }],

        [{
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        }, {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        },
        {
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509549205994&di=9e9f076b98dc32b59c03e83bfb1baa4a&imgtype=0&src=http%3A%2F%2Fpic.enorth.com.cn%2F003%2F029%2F274%2F00302927437_04bf6e78.jpg"
        },]
    ],



})
