/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 11:29:29
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 17:42:31
 * @FilePath: \vite-vue3\src\main.js
 * @Description: 主文件
 */
import { createApp } from 'vue';
import pinia from './pinia'; // 状态管理器
import router from './router'; // 路由管理器
// import plugins from './plugins' // 插件管理器
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
