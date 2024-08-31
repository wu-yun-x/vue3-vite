export function getToken() {
    return sessionStorage.getItem('token') ?? '';
}
export function setToken(token) {
    sessionStorage.setItem('token', token);
}
export function getUserInfo() {
    const data = sessionStorage.getItem('userInfo') ?? '{}';
    return JSON.parse(data);
}
export function setUserInfo(data) {
    const dataStr = JSON.stringify(data || {});
    sessionStorage.setItem('userInfo', dataStr);
}

// 侧边栏开关
export function setSiderCollapse(collapse) {
    sessionStorage.setItem('siderCollapse', collapse);
}
export function getSiderCollapse() {
    const collapse = sessionStorage.getItem('siderCollapse');
    return collapse === 'true';
}

export function clearStore() {
    sessionStorage.clear();
}
