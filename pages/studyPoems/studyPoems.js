
Page({

  /**
   * 页面的初始数据
   */
  data: {
    njValue:'年级',
    cdValue:'朝代',
    nj:false,
    cd:false,
    njIndex:0,
    cdIndex:0,
    headerObj:{
      nj: ['全部','一年级', '二年级', '三年级', '四年级', '五年级','六年级'],
      cd: ['全部','唐', '宋', '明', '清', '其他']
    },
    courseList:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
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

  //年级或朝代选择
  openPop(e){
    let that=this;
    let idx=e.currentTarget.dataset.idx;
    if(idx==1){
      that.setData({nj:true,cd:false});
    }else if(idx==2){
      that.setData({ nj: false, cd: true });
    }
  },
  //切换类型
  switchType(e){
    let that=this;
    let type=e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    that.setData({
      nj: false,
      cd: false,
    });

    if(type==1){
      that.setData({
        njValue:that.data.headerObj.nj[index],
        njIndex:index
      });
    }else if(type==2){
      that.setData({
        cdValue: that.data.headerObj.cd[index],
        cdIndex: index
      });
    }
    
    // console.log(type,index)
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