// details.js
const app = getApp(); // 获取应用实例

Page({
  data: {
    equipmentDetails: {} // 初始化页面数据
  },
  onLoad: function(options) {
    // 获取从列表页面传递过来的id
    const id = options.id;
    // 从全局数据中获取设备列表
    const equipmentList = app.globalData.equipmentList;
    // 根据id查找对应的设备详情
    const equipmentDetails = equipmentList.find(item => item.id == id);
    
    if (equipmentDetails) {
      // 如果找到了对应的设备，可以将设备详情设置到页面数据中，然后在页面上展示
      this.setData({
        equipmentDetails: equipmentDetails
      });
    } else {
      // 如果没有找到设备，可以做一些错误处理
      console.log("未找到对应的设备详情");
    }
  }
});
