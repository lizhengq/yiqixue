const tool=require('../../utils/tool.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex:0,
    grades:[
      { title: '小学', list: [{ title: '小学版', grade: '三年级', senc: '41词' }, { title: '小学版', grade: '三年级', senc: '41词' }, { title: '小学版', grade: '三年级', senc: '41词' }, { title: '小学版', grade: '三年级', senc: '41词' }, { title: '小学版', grade: '三年级', senc: '41词' }, { title: '小学版', grade: '三年级', senc: '41词' }]},
      { title: '初中', list: [{ title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }] },
      { title: '初中', list: [{ title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }] },
      { title: '初中', list: [{ title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }, { title: '初中版', grade: '七年级', senc: '100词' }] },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(this.data.grades)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that=this;
    that.lishao = that.selectComponent('#lishao')
    let alerts={
      type:'loadings',
      title:'温馨提示',
      con: '验证码短信可能略有延迟，确定返回并重新开始？',
      cancalText:'等待',
      confirmText:'返回'
    }
    that.setData({
      alerts:alerts
    })

    that.lishao.showAlert();
  },

  confirm(e){
    console.log(e)
  },

  //自定义事件
  clickNav(e){
    let that=this;
    let index=e.currentTarget.dataset.index;
    that.setData({
      navIndex:index
    })
  },

  //监听滚动
  myScroll(e){
    let that=this;
    let scrollTop=e.detail.scrollTop;
    //console.log(scrollTop)
    
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that=this;
    that.querySelect=[];
    for (let i = 0; i < this.data.grades.length;i++){
      //this.querySelect.push(wx.createSelectorQuery().select('#title' + i).selectViewport().scrollOffset());
      const query=wx.createSelectorQuery();
      query.select('#title' + i).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        that.querySelect.push({ index: i, top: (res[0].top-56)})
      })
    }

    // console.log(that.querySelect)
    
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