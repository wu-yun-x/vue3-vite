/*
 * @Author: wuyun 1939716743@qq.com
 * @Date: 2025-01-09 21:29:17
 * @LastEditors: wuyun 1939716743@qq.com
 * @LastEditTime: 2025-01-09 21:58:54
 * @FilePath: \vue3-vite\src\main.js
 * @Description: 主入口文件
 */
import { createApp } from 'vue';
import pinia from './pinia'; // 状态管理器
import router from './router'; // 路由管理器
// 引入插件
import GlobalComponents from '@/plugins/global-components';

import '@/style/index.scss'; // 全局样式入口
import App from './App.vue';
import './permission'; // 路由权限校验

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(GlobalComponents);

app.mount('#app');
