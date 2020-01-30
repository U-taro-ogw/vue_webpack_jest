import { shallowMount } from '@vue/test-utils'
import Component from '@/components/pages/Home'

it('test', () => {
  const wrapper = shallowMount(Component)

  expect(wrapper.find('#home').exists()).toBeTruthy()
})
