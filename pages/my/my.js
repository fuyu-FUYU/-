// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    user:[],
    list:[],
  },
  getval(e){
   
    this.data.val = e.detail.value;
    // this.setData({val:e.detail.value})

  },
  change(e){
    console.log(e.target.dataset.index);
    var index = e.target.dataset.index;
    this.data.list.splice(index,1)

    var item = e.target.dataset.item;
    item.checked = !item.checked
    this.setData({
      user:this.data.user.concat(item)
    })

    this.setData({
      list:this.data.list
    })
  },
  changes(e) {
    console.log(e.target.dataset.index);
    var index = e.target.dataset.index;
    this.data.user.splice(index, 1)
    this.setData({
      user: this.data.user
    })

    var item = e.target.dataset.item;
    item.checked = !item.checked
    this.setData({
      list: this.data.list.concat(item)
    })
    
  },
  add(){
    var msg = this.data.list
    
    this.setData({
      list: msg.concat({"txt": this.data.val,"checked":false}),
      val: this.data.val=""
    })
    console.log(this.data.list)

  },
  del(e){
    console.log(e.target.dataset.index)
    var i=e.target.dataset.index;
    var msg=this.data.list;
    msg.splice(i,1)
    this.setData({list:msg})
  },
  del1(e) {
    console.log(e.target.dataset.index)
    var i = e.target.dataset.index;
    var msg = this.data.user;
    msg.splice(i, 1)
    this.setData({ user: msg })
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