import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises'

import { mount, shallowMount } from '@vue/test-utils'
import Component from '@/components/pages/Home'

import fs from 'fs'
import path from 'path'

describe('Home', () => {
  let mockAxios

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('API通信に成功した場合', () => {
    let stubResponse = JSON.parse(fs.readFileSync(path.join(__dirname, '../../stubs/isekai/success.json')))
    let requestInfo
    beforeEach(() => {
      mockAxios.onGet('http://localhost:3001/isekai').reply((config) => {
        requestInfo = config
        return [200, stubResponse]
      })
    })

    it('listItemsに格納する', async () => {
      const wrapper = shallowMount(Component)

      await flushPromises()

      expect(wrapper.find('#home').exists()).toBeTruthy()
      expect(wrapper.vm.$data.listItems).toEqual(stubResponse.kono_suba.characters)
    })
  })
})

