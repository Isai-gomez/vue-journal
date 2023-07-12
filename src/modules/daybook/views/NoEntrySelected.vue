<template>
  <div class="d-flex justify-content-center align-items-center">
    <h1 class="aling-self-center">
      No hay nada que mostrar
    </h1>
    <Fb @on:click="goCreatedNewEntry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Fb: defineAsyncComponent(() => import('../components/Fb.vue')),
  },
  methods: {
    goCreatedNewEntry() {
      this.$router.push({ name: 'entry', params: { id: 'new' } })
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
