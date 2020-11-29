Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'xiecheng',
    age: 34,
    obj: {
      name: '爱扣钉',
      age: 5
    },
    arr: [1, 2, 3, 4, 5],
    teacher: [{
      id: 1,
      name: '小冯'
    }, {
      id: 2,
      name: '小吴'
    }, {
      id: 3,
      name: '小董'
    }, {
      id: 4,
      name: '老谢'
    }],
    isLogin: false
  },
  sort() {
    const length = this.data.teacher.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.teacher[x]
      this.data.teacher[x] = this.data.teacher[y]
      this.data.teacher[y] = temp
    }
    console.log(this.data.teacher)
    this.setData({
      teacher: this.data.teacher
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