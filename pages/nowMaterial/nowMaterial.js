// pages/nowMaterial/nowMaterial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:0,
    swiperDuration:400,
    previousMargin:'0rpx',
    nextMargin:'0rpx',
    courseList:[
      {},
      {},
      {},
      {}
    ],
    studyBtn:true
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

  //自定义事件
  currentChange(e){
    let that=this;
    //console.log('look',e)
    if(e.detail.current!=0){
      that.setData({
        studyBtn: false
      })
    }else{
      that.setData({
        studyBtn: true
      })
    }
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