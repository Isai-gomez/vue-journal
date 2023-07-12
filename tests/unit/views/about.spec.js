import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('Pruba en el About vue', () => {
  test('Debe de rendizar el componente correctamente', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
