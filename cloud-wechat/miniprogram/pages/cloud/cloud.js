const db = wx.cloud.database()
const testCollection = db.collection('testvip1')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async insert() {
    // db.collection('testvip1').add({
    //   data: {
    //     name: 'xiecheng',
    //     age: 34,
    //     hobby: ['篮球', '足球', '排球'],
    //     obj: {
    //       className: 'wechat',
    //       content: 'cloud'
    //     }
    //   },
    //   success: res => {
    //     console.log(res)
    //   },
    //   fail: console.error
    // })
    // db.collection('testvip1').add({
    //   data: {
    //     name: 'zhangsan',
    //     age: 18,
    //     hobby: ['篮球', '足球', '排球'],
    //     obj: {
    //       className: 'wechat',
    //       content: 'cloud'
    //     }
    //   }
    // }).then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    try {
      const res = await db.collection('testvip1').add({
        data: {
          name: 'lisi',
          age: 20,
          hobby: ['篮球123', '足球', '排球'],
          obj: {
            className: 'wechat',
            content: 'cloud'
          }
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  },

  async update() {
    try {
      const res = await testCollection.doc('0a4429175fcc3e0300d3c6cb3a9904e5').update({
        data: {
          age: 35
        }
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  },

  async search() {
    const res = await testCollection.where({
      name: 'xiecheng'
    }).get()
    console.log(res)
  },

  async delete() {
    try {
      const res = await testCollection.doc('e62469b25fcc3ebb00f33db06960b447').remove()
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  },
  sum(){
    wx.cloud.callFunction({
      name: 'sum11',
      data: {
        x: 5,
        y: 6
      }
    }).then(res=>{
      console.log(res)
    })
  },
  async getOpenid(){
    const openidRes = await wx.cloud.callFunction({
      name: 'getOpenid'
    })
    console.log(openidRes)
  },

  async betchDel(){
    const res = await wx.cloud.callFunction({
      name: 'betchDelData'
    })
    console.log(res)
    // if(res.result.startsWith.removed > 0){

    // }
  },
  upload(){
    // 1、选择图片：选择相册图片、拍照
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        // 2、把图片上传云存储
        wx.cloud.uploadFile({
          cloudPath: 'testvip1/example.png',
          filePath: tempFilePaths[0], // 文件路径
        }).then(res => {
          // get resource ID
          console.log(res.fileID)
          // 3、保存fileID到云数据库
          db.collection('image').add({
            data: {
              fileID: res.fileID
            }
          }).then(res => {
            console.log(res);
            wx.showToast({
              title: '上传成功',
            })
          })
        }).catch(error => {
          // handle error
          console.error(error)
        })

      }
    })
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