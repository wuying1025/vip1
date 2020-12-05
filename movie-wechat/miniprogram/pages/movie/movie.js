// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  },
  getMovieList() {
    wx.showLoading({
      title: '努力加载中',
    })
    wx.request({
      url: 'https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a',
      success: res => {
        const {
          data: {
            subject_collection_items
          }
        } = res
        console.log(subject_collection_items)
        this.setData({
          movieList: subject_collection_items
        })
      },
      fail(err) {
        console.error(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieList()
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