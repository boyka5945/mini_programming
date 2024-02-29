// app.js
App({
  globalData: {
    equipmentList: [
      {
        id: 1,
        imageUrl: "../../resource/microscope.png",
        name: "X射线荧光光谱仪",
        attributes: [
          {"key": "制造厂商", "value": "日本日立公司"},
          {"key": "最高电压", "value": "30 kV"},
          {"key": "最大放大倍数", "value": "30万倍"},
          {"key": "样品室尺寸", "value": "直径200 mm，高80 mm"},
          {"key": "规格型号", "value": "S-3400N（钨灯丝光源）"},
          {"key": "主要附件", "value": "二次电子探头、背散射探头、EDAX Apollo X电制冷能谱仪、日立E-1010离子溅射仪。"},
          {"key": "主要特点", "value": "电压可调范围大，分辨率高；分子泵真空系统，更换样品速度快，无污染；多种观测模式，调节图像方便。"},
          {"key": "主要用途", "value": "材料微观放大成像；材料微观区域化学成分分析；材料微观区域晶体结构分析。"},
          {"key": "使用范围", "value": "无机非金属粉末、无机非金属纤维、无机非金属块体、有机物粉末、金属等。加热变形或分解的样品不能进行电镜观察，能谱测定必须进行喷金处理，不耐高电压电流的样品不宜进行能谱测定。"},
        ],
      },
      {
        id: 2,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备2",
      },
      {
        id: 3,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备3",
      },
      {
        id: 4,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备4",
      },
      {
        id: 5,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备5",
      },
      {
        id: 6,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备6",
      },
      {
        id: 7, 
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备7",
      },
      {
        id: 8,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备8",
      },
      {
        id: 9,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备9",
      },
      {
        id: 10,
        imageUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        name: "设备10",
      },
      // 添加更多设备信息
    ]
  },
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
})
