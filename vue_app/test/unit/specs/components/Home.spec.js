import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises'

import { mount, shallowMount } from '@vue/test-utils'
import Component from '@/components/pages/Home'

describe('Home', () => {
  let mockAxios

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('API通信に成功した場合', () => {
    beforeEach(() => {
      mockAxios.onGet('http://localhost:3001/isekai').reply(200, {
        kono_suba: {
          characters: [
            {
              id: 1,
              name: "test-1"
            },
            {
              id: 2,
              name: "test-2"
            },
            {
              id: 3,
              name: "test-3"
            }
          ]
        }
      })
    })

    it('test', async () => {
      const wrapper = shallowMount(Component)

      await flushPromises
      expect(wrapper.find('#home').exists()).toBeTruthy()
      expect(wrapper.vm.$data.listItems).toEqual(1)
    })
  })
})

