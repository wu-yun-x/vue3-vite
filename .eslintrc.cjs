/*
 * @Author: st004362 chuangchuang.mi@santachi.com.cn
 * @Date: 2024-08-30 13:46:49
 * @LastEditors: st004362 chuangchuang.mi@santachi.com.cn
 * @LastEditTime: 2024-08-30 19:06:33
 * @FilePath: \vite-vue3\.eslintrc.cjs
 * @Description: eslint配置
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'standard',
        'plugin:vue/vue3-essential',
        'prettier',
        './.eslintrc-auto-import.json',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-useless-template-attributes': 'off',
        'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
        'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
        'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    },
};
