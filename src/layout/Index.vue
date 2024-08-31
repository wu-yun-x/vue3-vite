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
