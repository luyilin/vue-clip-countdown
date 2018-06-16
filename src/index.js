import CilpCountdown from './countDown.vue'

export default CilpCountdown

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(CilpCountdown.name, CilpCountdown)
}
