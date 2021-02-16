// pages/Admin/FeedbackComment/FeedbackComment.js
const cloud = wx.cloud;
const db = cloud.database();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    comment_list: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteItem(e) {
      let index = parseInt(e.currentTarget.id);
      var _id = this.data.comment_list[index]._id
      this.data.comment_list.splice(index, 1);
      cloud.callFunction({
        name: "operateFeedback",
        data: {
          type: "delete",
          _id,
        },
      }).then(() => {
        this.setData({
          comment_list: this.data.comment_list,
        });
      })
    },
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    created() {
      db.collection("feedback")
        .get()
        .then((e) => {
          console.log(e.data);
          this.setData({
            comment_list: e.data,
          });
        });
    },
  },
});
