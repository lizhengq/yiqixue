// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:{
      width:'100%',
      height:'420rpx',
      url:'http://pic101.nipic.com/file/20160616/23377591_145402808000_2.jpg'
    },
    // alert:{
    //   display:true,
    //   title:'提示',
    //   con:'加对方了啊SD卡附近',
    //   btnVal:'确定'
    // }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //
  myEvent(e){
    if(e.detail.target=='lixiaolong'){
      console.log('see you later')
    }
  },

  liqiang() {
    let that=this;
    that.setData({
      alert:{
        display: true,
        title:'提示',
        con:'加对方了啊SD卡附近',
        btnVal:'确定',
        target:'lixiaolong'
      }
    })
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