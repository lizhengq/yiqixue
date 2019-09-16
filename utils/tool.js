module.exports={
  // 成功或失败的提示
  toast(title='提示',icon='success',image='',duration=1500){
    wx.showToast({
      title: title,
      icon:icon,
      image:image,
      duration:duration
    })
  },

  //confirm弹框
  modal(title = '提示', content ='模态弹窗',callback){
    wx.showModal({
      title: title,
      content: content,
      success(res) {
        if(callback) callback(res)
      }
    })
  },

  //加载框
  loading(title='加载中'){
    wx.showLoading({
      title:title,
    })
  },

  //关闭加载框
  hideLoading(){
    wx.hideLoading()
  },

  //底部表格选项
  actionSheet(itemList=['选项一','选项二'],callback){
    wx.showActionSheet({
      itemList: itemList,
      success(res) {
        if (callback) callback(res)
        //console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  //页面跳转
  location(url){
    wx.navigateTo({
      url:url
    })
  }
  
  
}