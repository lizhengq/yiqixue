// components/scroll/scroll.js
Component({
  behaviors: [],
  /**
   * 组件的属性列表
   */
  properties: {
    scroll:{
      type:Object,
      value:{
        scrollX:false,
        scrollY:true,
        width:'100%',
        height:'100%'
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
    //滚动事件
    myScroll(e){
      let that=this;
      let scrollTopVal=e.detail.scrollTop;
      let myEventDetail = { scrollTop: scrollTopVal }
      that.triggerEvent('scrollEvent', myEventDetail)
      console.log('look',scrollTopVal)
    }
  }
})
