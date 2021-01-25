// miniprogram/pages/Feedback/Feedback.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: "",
    detail: "",
    contect: ""
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

  submitFeedback: function() {
    console.log("project: " + this.data.project)
    console.log("detail : " + this.data.detail)
    console.log("contect: " + this.data.contact)
    db.collection("feedback").add({
      data: {
        project: this.data.project,
        detail: this.data.detail,
        contact: this.data.contact
      }
    }).then(
      wx.showModal({
        title: '提交成功',
        content: '反馈已提交成功，请等待管理员回复',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#3CC51F',
      })
    )
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