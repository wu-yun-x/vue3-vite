/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 15:37:34
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 16:30:48
 * @FilePath: \vite-vue3\src\api\user.js
 * @Description: 用户接口
 */
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data // 参数在body用data
  })
}

// 获取用户信息
export function getUserInfo(params) {
  return request({
    url: '/auth/getUserInfo',
    method: 'get',
    params // 参数在url上用params
  })
}

// 导出表格
export function exportTable(params) {
  return request({
    url: '/xxx/xxxx',
    method: 'get',
    responseType: 'blob', // 自己封装的下载
    params
  })
}
