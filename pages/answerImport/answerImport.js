// pages/answerImport/answerImport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _isInit:false,
    answerList:[
      {p:true,textarea:false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''},
      { p: true, textarea: false,value:''}
    ]
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

  //监听滚动
  onPageScroll(e){
    let that=this;
    if (that.data._isInit){
      console.log('我执行了');
      let _answerList = that.data.answerList;
      _answerList.forEach((item, key) => {
        item.p = true
        item.textarea = false
      })
      that.setData({
        answerList: _answerList,
        _isInit:false
      })
    }
  },

  //当输入文字的时候
  inputChange(e){
    let that=this;
    let index=e.currentTarget.dataset.index;
    let _answerList = that.data.answerList;
    _answerList[index].value=e.detail.value;
    that.setData({
      answerList: _answerList
    })

  },

  //点击输入
  clickImport(e){
    let that=this;
    let idx=e.currentTarget.dataset.idx;
    let _answerList = that.data.answerList;
    _answerList[idx].p=false
    _answerList[idx].textarea = true
    that.setData({
      answerList: _answerList,
      _isInit:true
    })
    console.log(that.data._isInit)
    that.initText(idx);
  },

  //处理其他输入框
  initText(index){
    let that=this;
    let _answerList = that.data.answerList;
    _answerList.forEach((item,key)=>{
      if (index!=key){
        item.p=true;
        item.textarea=false;
      }
    })

    that.setData({
      answerList: _answerList
    })
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