//index.js
//获取应用实例
const app = getApp()

//index.js
//获取应用实例

Page({

  data: {
    imgUrls: [
      "/image/banner1.jpg",
      "/image/banner5.jpg", 
      "/image/banner3.jpg",
      "/image/banner4.jpg"],
    currentSwiper: 0,
    autoplay: true
  },

  //滑动事件监听
  swiperChange: function (event) {
    this.setData({
      currentSwiper: event.detail.current
    });
  },

  //banner点击事件
  tapBanner: function (event) {
    //下面介绍两种banner 点击获取数据事件
    // 1. 通过数据源获取
    var indexUrl = this.data.imgUrls[this.data.currentSwiper];
    console.log(indexUrl);
    // 2 . 也可以通过自定义属性获取
    var url = event.currentTarget.dataset.indexurl;
    console.log(url);

  }

})


// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
