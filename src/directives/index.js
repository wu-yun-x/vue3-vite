// src/directives/index.js
import { useUserStore } from '@/pinia'
import { isLocal } from '@/utils/helper'

export default {
  install(app) {
    // 普通的按钮权限（一个按钮对应一个button值）
    app.directive('permission', {
      mounted(el, binding) {
        if (!binding.value || isLocal()) return false
        const userStore = useUserStore()
        if (!userStore.buttons.includes(binding.value)) {
          el.parentNode.removeChild(el)
        }
      }
    })
    // 多对一的按钮权限（多个button值来决定是否显示例如下拉菜单、表格后面的操作栏等等）
    app.directive('permissions', {
      mounted(el, binding) {
        if (!binding.value || isLocal()) return false
        const userStore = useUserStore()
        let flag = false
        for (const item of binding.value) {
          if (userStore.buttons.includes(item)) {
            flag = true
            return
          }
        }
        if (!flag) el.parentNode.removeChild(el)
      }
    })
  }
}
