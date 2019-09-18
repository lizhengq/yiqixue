// pages/changeMobileNum/changeMobileNum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    close:false,
    iphone:''
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

  //手机号监听
  changeInput(e){
    let that=this;
    that.setData({
      iphone:e.detail.value
    })
    
    that.data.iphone != '' ? that.setData({ close: true }) : that.setData({ close: false })

  },

  //清除手机号
  closeIphone(){
    let that=this;
    console.log('6666')
    that.setData({
      iphone:''
    })
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