<!--
 * @Author: wuyun 1939716743@qq.com
 * @Date: 2025-01-09 21:29:17
 * @LastEditors: wuyun 1939716743@qq.com
 * @LastEditTime: 2025-01-09 22:00:13
 * @FilePath: \vue3-vite\src\layout\Index.vue
 * @Description: tag视图
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
