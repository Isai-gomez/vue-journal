<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bolde">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2022, Martes</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Eliminar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-40">
    <textarea placeholder="Qué sucedio hoy?"></textarea>
  </div>
  <Fb icon="fa-save" />
  <img
    src="https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg"
    alt="entry-fotho"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    Fb: defineAsyncComponent(() => import('../components/Fb.vue')),
  },
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
