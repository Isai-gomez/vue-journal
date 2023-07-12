import { shallowMount } from '@vue/test-utils'
import fb from '@/module/daybook/component/FB.vue'
describe('Prueba en el FB component', () => {
  test('Debe de mostrar el icono por defecto', () => {
    const wrapper = shallowMount(fb)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('Debe de mostrar el icono por argumento fa-circle', () => {})
  test('Debe de emitir el evento on:click cuando se hace click', () => {})
})
