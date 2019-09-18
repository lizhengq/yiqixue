// pages/MobileGetCode/MobileGetCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    codeStatus:true,
    code:''
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

  //监听验证码
  changeCode(e){
    let that=this;
    that.setData({
      code:e.detail.value
    })

    if(that.data.code.length==5){
      that.setData({
        disabled:false
      })
    }else{
      that.setData({
        disabled: true
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})