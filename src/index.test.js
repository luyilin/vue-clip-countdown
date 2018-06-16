import { mount } from 'vue-test-utils'
import ClipCountdown from './'

test('it works', () => {
  const wrapper = mount(ClipCountdown)
  expect(wrapper.isVueInstance()).toBe(true)
})
