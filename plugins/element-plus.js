import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Register Element Plus
  nuxtApp.vueApp.use(ElementPlus)

  // Register all icons globally
  for (const [key, component] of Object.entries(ElIcons)) {
    nuxtApp.vueApp.component(key, component)
  }
})
