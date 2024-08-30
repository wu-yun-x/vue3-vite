/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 17:24:23
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 17:24:30
 * @FilePath: \vite-vue3\src\plugin\global-components.js
 * @Description: 注册到main当中
 */
import { ElIcon } from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 引入组件库
const components = import.meta.glob('@/components/*/index.js', { eager: true });

export default {
  install(app) {
    // 注册 ElIcon 组件
    app.component('ElIcon', ElIcon);

    // 注册 Element Plus 的图标组件
    Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
      app.component(key, component);
    });

    // 自动注册 components 目录中的组件
    Object.keys(components).forEach(key => {
      const component = components[key].default;
      app.component(component.name, component);
    });
  }
};
