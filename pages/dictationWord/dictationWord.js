// pages/dictationWord/dictationWord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // wordCount:5
    maxLen:0,
    keyboard:{
      one: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      two: ['a', 's', 'd', 'f', 'g', 'h', 'j','k','l'],
      three: ['z', 'x', 'c', 'v', 'b', 'n', 'm', '删除']
    }
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
    let that=this;
    let wordCount=6;
    let arrValue=[];
    for(let i=0;i<wordCount;i++){
      arrValue.push('');
    }
    that.setData({
      wordList: arrValue
    })
  },

  //自定义事件


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