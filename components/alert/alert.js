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
        display:false,
        title:'提示',
        con:'内容',
        btnVal:'确定',
        target:null
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    alertBtn(){
      let that=this;
      let _alert=that.data.alert;
      _alert.display=false;
      that.setData({ alert: _alert })
      
      let myEventDetail = {username:'李少',target:that.data.alert.target} // detail对象，提供给事件监听函数
      //let myEventOption = {password:'5736869qiang'} // 触发事件的选项
      that.triggerEvent('alertBtn', myEventDetail)
    }
  }
})
