<script setup>
import {ref} from 'vue'
const testValue = ref('测试reabase，git 提交')

onMounted(()=>{
  console.log(testValue)
})

</script>
<template>
  {{ testValue }}
    <router-view></router-view>
</template>

<style scoped lang="scss"></style>
