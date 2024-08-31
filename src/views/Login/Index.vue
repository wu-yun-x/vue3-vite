<style lang="scss" scoped></style>

<template>
    <h1>测试 vueUse 的鼠标坐标</h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <ft-icon name="el-icon Search"></ft-icon>
    <FtIcon name="el-icon Search" color="#fff000" size="100px"></FtIcon>
    <ft-icon
        name="iconfont icon-search"
        color="#ff0000"
        size="24px"
        class="big-icon"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';
export default defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse();
        return {
            x,
            y,
        };
    },
});
</script>
