// components/alert/alert.js
Component({
  behaviors: [],
  /**
   * 组件的属性列表
   */
  properties: {
    alert:{
      type:Object,
      value:{
        title:'提示',
        con:'内容',
        cancalText: '',
        confirmText: '确定',
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //显示弹框
    showAlert(){
      let that=this;
      that.setData({
        flag:!that.data.flag
      })

    },
    //隐藏弹框
    hideAlert(){
      let that = this;
      that.setData({flag: !that.data.flag})
    },

    //取消按钮事件
    _cancalBtn(){
      this.triggerEvent("cancalEvent");
      this.hideAlert();
    },
    //确认按钮事件
    _confirmBtn(){
      var myEventDetail = {type:this.data.alert.type};
      this.triggerEvent("confrimEvent", myEventDetail);
      this.hideAlert();
    }
  }
})
