// pages/Admin/childCpn/feedback-events/feedback-events.js
const cloud = wx.cloud;
const db = cloud.database();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comment: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: "",
    check: false,
    open: false,
  },
  /**
   * 组件的生命周期函数
   */
  lifetimes: {
    attached() {
      // 加载可变数据到本地data
      let content = this.properties.comment.content;
      let check = this.properties.comment.check;
      console.log(this.properties.comment.content);
      this.setData({
        content,
        check,
      });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开回复框
    open() {
      this.setData({
        open: !this.data.open,
      });
    },
    // 确认回复
    submit() {
      let content = this.data.content;
      let _id = this.properties.comment._id;
      let that = this;
      console.log(_id);
      cloud.callFunction({
        name: "operateFeedback",
        data: {
          type: "update",
          _id,
          content,
        },
        success() {
          that.setData({
            check: true,
            open: false,
          });
        },
      })
    },
    delete() {
      //触发父组件的事件，其实并不需要这一步，只是作为演示
      this.triggerEvent("delete");
    },
  },
});
