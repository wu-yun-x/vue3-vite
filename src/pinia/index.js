/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 15:25:30
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 16:59:13
 * @FilePath: \vite-vue3\src\pinia\index.js
 * @Description: pinia文件
 */
// src/pinia/index.js
import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
// import useTagStore from './modules/tag'

const pinia = createPinia();

export { useAppStore, useUserStore };
export default pinia;
