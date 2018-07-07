// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: {
      firstName: '/img/foo.png',
      lastName: '/img/foo.png'
    },
    texts: '夕云可麦言米舍里沐风充艾丝竹延栈巧乔禾听安予蔓临深望庭巡',
    firstWord: '黄',
    secondWord: '云',
    thirdWord: '夕',
    names: [],
    showList: false
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
  
  },
  /**
   * 用户离开点击后设值到data
   */
  setTexts: function (e) {
    let that = this;
    let id = e.currentTarget.id;
    this.setData({
      [id]:  e.detail.value
    })
  },
  /**
   * 弹框事件
   */
  onClickBtn: function (e) {
    let data = this.data;

    if ((data.texts.includes(data.secondWord) && !data.thirdWord)
        || (data.texts.includes(data.thirdWord) && !data.second)
        ) {
      this.toast('已经生成！');
      this.generateName();
    } else {
      this.toast('没有符合条件的名字!');
    }
  },
  /**
   * 再次封装弹框
   */
  toast: function (title, duration, successCallBack, failCallBack) {
    let that = this;
    wx.showToast({
      title: title || '成功',
      icon: '',
      image: '',
      duration: duration || 2000,
      mask: true,
      success: function(res) {
        successCallBack && successCallBack();
      },
      fail: function(res) {
        failCallBack && failCallBack();
      },
      complete: function(res) {},
    })
  },
  /**
   * 循环生成
   */
  generateName: function () {
    let that = this;
    let data = this.data;
    that.setData({
      names : data.texts.split(''),
      showList : true
    })
  }
})