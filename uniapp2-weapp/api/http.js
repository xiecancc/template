import {
  baseUrl
} from "../common/index.js"

uni.$http = (config) => {

  return new Promise((resolve, reject) => {
    // 显示加载动画
    uni.showLoading({
      mask: true,
      title: "加载中..."
    })

    // 获取 token 信息
    const token = uni.getStorageSync("token") || ""
    uni.request({
      url: baseUrl + config.url,
      method: config.method || "GET",
      data: config.data || {},
      // 合并请求头，携带 token 请求数据
      header: {
        Authorization: token,
        ...config.header
      },
      success: ({
        data
      }) => {
        resolve(data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        // 关闭加载动画
        uni.hideLoading()
      }
    })
  })
}
