// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // const { OPENID } = cloud.getWXContext()
  // return {
  //   sum : event.x + event.y,
  //   name: 'cloud',
  //   OPENID
  // }
  return await db.collection('testvip1').where({
    name: 'xiecheng'
  }).remove()
}