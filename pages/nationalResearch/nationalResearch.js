const tool=require('../../utils/tool.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerStatus:false,
    courseList:[
      { title: '导学+理论精讲—结构化+试讲...', 'time':'11分20秒' },
      { title: '导学+理论精讲—结构化+试讲...', 'time': '11分20秒' },
      { title: '导学+理论精讲—结构化+试讲...', 'time': '11分20秒' },
      { title: '导学+理论精讲—结构化+试讲...', 'time': '11分20秒' },
      { title: '导学+理论精讲—结构化+试讲...', 'time': '11分20秒' },
      { title: '导学+理论精讲—结构化+试讲...', 'time': '11分20秒' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击编辑或者点击锁
  doWork(e){
    let that=this;
    //console.log('还有谁', e.currentTarget.dataset.idx)
    let idx = e.currentTarget.dataset.idx
    if(idx==0){
      that.setData({
        footerStatus: !that.data.footerStatus
      })
      console.log(that.data.footerStatus)
    }else{
      tool.toast('暂未开通','none')
    }
  },
  //关闭答题方法
  closeFooter(){
    let that=this;
    that.setData({
      footerStatus: !that.data.footerStatus
    })
  },

  //点击文字答题还是拍照答题
  doWorkWay(e){
    let workType = e.currentTarget.dataset.index;
    if (workType==0){
      //console.log('文字答题');
      tool.location('../answerImport/answerImport')
    }else if(workType==1){
      //console.log('拍照答题');
      tool.location('../answerPhoto/answerPhoto')
    }
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