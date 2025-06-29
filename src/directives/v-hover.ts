// directives/hoverEffect.ts
import type { Directive } from 'vue'

export const hover: Directive = {
  mounted(el) {
    // hover-effect 在 global.css裡面
    el.classList.add('hover-effect')
  },
  unmounted(el) {
    el.classList.remove('hover-effect')
  },
}
