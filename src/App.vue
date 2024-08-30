<!--
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 11:29:29
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 17:07:12
 * @FilePath: \vite-vue3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'

const visible = ref(false);
const openDialog = () => {
    // eslint-disable-next-line no-undef
    ElMessageBox.alert('弹框内容');
    visible.value = true;
};
const closeDialog = () => {
    // eslint-disable-next-line no-undef
    ElMessageBox.success('操作成功');
    visible.value = false;
};
</script>
<template>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <router-view></router-view>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
