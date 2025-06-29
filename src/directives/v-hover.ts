// directives/hoverEffect.ts
import type { Directive } from 'vue'

export const hover: Directive = {
  mounted(el) {
    el.classList.add('hover-effect')
  },
  unmounted(el) {
    el.classList.remove('hover-effect')
  },
}
