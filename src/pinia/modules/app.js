/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 15:25:15
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 16:55:22
 * @FilePath: \vite-vue3\src\pinia\modules\app.js
 * @Description:
 */
import { defineStore } from 'pinia';
// import { getAppIsCollapse, setAppIsCollapse } from '@/utils/webStorage.js';

const useAppStore = defineStore('app', {
  state: () => {
    return {
      // isCollapse: getAppIsCollapse()
    };
  },
  actions: {
    toggleCollapse() {
      // this.isCollapse = !this.isCollapse;
      // setAppIsCollapse('isCollapse', this.isCollapse);
    }
  }
});

export default useAppStore;
