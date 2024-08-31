import request from '@/utils/request';

// 登录
export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data, // 参数在body用data
    });
}

// 获取用户信息
export function getUserInfo(params) {
    return request({
        url: '/auth/getUserInfo',
        method: 'get',
        params, // 参数在url上用params
    });
}

// 导出表格
export function exportTable(params) {
    return request({
        url: '/xxx/xxxx',
        method: 'get',
        responseType: 'blob', // 自己封装的下载
        params,
    });
}
