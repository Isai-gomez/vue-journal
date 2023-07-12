import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruba en el Home vue', () => {
  test('Debe de rendizar el componente correctamente', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('Al dar click en boton debe enviar a la ruata no-entry', () => {
    const moskRoute = {
      push: jest.fn(),
    }
    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $router: moskRoute,
        },
      },
    })
    wrapper.find('button').trigger('click')
    expect(moskRoute.push).toHaveBeenCalled()
    expect(moskRoute.push).toHaveBeenCalledWith({ name: 'no-entry' })
  })
})
