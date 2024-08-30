<!--
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 16:48:17
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 17:56:21
 * @FilePath: \vite-vue3\src\layout\Index.vue
 * @Description: 主页面
-->
<template>
    <div class="g-app-container">
        <AppHeader />
        <div class="g-app-container-content">
            <Sidebar />
            <div class="g-app-container-right">
                <TagsView />
                <AppMain />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppHeader from './AppHeader/index.vue';
import Sidebar from './Siderbar/index.vue';
import TagsView from './TagsView/index.vue';
import AppMain from './AppMain/index.vue';
</script>
<style></style>
