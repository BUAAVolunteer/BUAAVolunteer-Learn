// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  if (event.type == "delete") {
    return await db.collection("feedback").doc(event._id).remove()
  } else if (event.type == "update") {
    return await db.collection("feedback").doc(event._id).update({
      data: {
        check: true,
        content: event.content
      }
    })
  } else {
    return false
  }
}