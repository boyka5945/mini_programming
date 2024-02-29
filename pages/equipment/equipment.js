// equipment.js
const app = getApp(); // 获取应用实例

Page({
  data: {
    equipmentList: [],
  },

  onLoad: function() {
    this.setData({
      equipmentList: app.globalData.equipmentList
    });
  },

  viewDetails: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../details/details?id=' + id
    });
  },
})
