import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // shallowMount 浅渲染, 只测试这个组件, 不会渲染子组件
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    // 获取渲染得到的文本
    expect(wrapper.text()).toMatch(msg)
  })
})
