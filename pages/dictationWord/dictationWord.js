const watch=require('../../utils/watch.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyboardstatus:false,
    keyValue:'',
    wordCount:6,
    keyboard:{
      one: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      two: ['a', 's', 'd', 'f', 'g', 'h', 'j','k','l'],
      three: ['z', 'x', 'c', 'v', 'b', 'n', 'm', '删']
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //getApp().setWatcher(this.data, this.watch);
    watch.setWatcher(this); 
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
  keyEvent(e){
    let that=this;
    let vals=e.currentTarget.dataset.value;
    if (vals == '删' && that.data.keyValue.length!=0) {
      let val = that.data.keyValue.substring(0, that.data.keyValue.length-1)
      that.setData({
        keyValue:val
      })
      return false;
    }
    if (that.data.keyValue.length < that.data.wordCount && vals !='删'){      
      that.data.keyValue+=vals;
      that.setData({
        keyValue: that.data.keyValue
      })
    }
  },

  //弹起或收起键盘
  alertKey(){
    let that=this;
    //console.log(1111,that.data)
    that.setData({
      keyboardstatus: !that.data.keyboardstatus
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  watch:{
    keyValue(news){
      let that=this;
      let wordlist=[];
      //console.log('look',that.data.wordCount);
      for(let i=0;i<that.data.wordCount;i++){
        wordlist.push('');
      }
      //console.log(wordlist);
      for(let i=0;i<news.length;i++){
        wordlist[i]=news[i]
      }
      
      that.setData({
        wordList:wordlist
      })
    }
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