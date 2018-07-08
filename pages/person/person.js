// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
    icons: {
      firstName: '/img/first_name.png',
      first: '/img/first.png',
      second: '/img/second.png',
      third: '/img/third.png',
      all: '/img/all.png',
      edit: '/img/edit.png',
      all_a: '/img/all_a.png'
    },
    imgUrls: [
      '/img/banner_a.jpg',
      '/img/banner_b.jpg',
      '/img/banner_c.jpg'
    ],
    animation: '',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    texts: '夕云可麦言米舍里沐风充艾丝竹延栈巧乔禾听安予蔓临深望庭巡',
    firstWord: '黄',
    secondWord: '沐',
    thirdWord: '',
    names: [],
    namesIndex: 0,
    showList: false
  },
  /**
   * 旋转动画
   */
  rotate: function () {
    this.animation.rotate(90).step().scale(1.2).step().rotate(360).step().scale(1).step();
    this.setData({
      animation: this.animation.export()
    })
  },
  /**
   * 选择改变时
   */
  bindPickerChange: function (e) {
    this.setData({
      namesIndex: e.detail.value
    })
    this.rotate();
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
    this.generateFullName();
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
      // this.generateName();
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
    let data = this.data;
    this.setData({
      names : data.texts.split(''),
      showList : true
    })
  },
  /**
   * 生成全名数组
   */
   generateFullName: function () {
    let data = this.data;
    let words = data.texts.split('');
    let names = [];
    words.reduce(function(pre, word){
      let name
        // 指定第二个字
        if (data.secondWord && !data.thirdWord) {
          name = data.firstWord + data.secondWord + word;
          names.push(name);
        // 指定每第三个字
      } else if (data.thirdWord && !data.secondWord) {
        name = data.firstWord + word + data.thirdWord;
        names.push(name);
        // 指定第二和第三个字
      } else if (data.secondWord && data.thirdWord){
        names = [ data.firstWord + data.secondWord + data.thirdWord ];
        // 全部输出
      } else {
        for(let i=0; i<words.length; i++) {
          name = data.firstWord + word + words[i];
          names.push(name);
        }
      }
    });
    console.log(names)
    this.setData({
      names: names,
      showList: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    this.generateFullName()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
   onReady: function () {
     this.animation = wx.createAnimation({
       duration: 1000,
       timingFunction: 'linear',
       delay: 100,
       transformOrigin: 'center center'
     })
     this.rotate()
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