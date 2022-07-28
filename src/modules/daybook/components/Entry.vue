<template>
  <div
    class="entry-container pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 23 } })"
  >
    <!-- TITULO -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022, Lunes</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
      illum inventore porro blanditiis sed asperiores quam autem voluptatibus
      voluptatum fugiat dolorem facilis deserunt nam, quas illo eius est? Esse,
      maiores.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: rgba(46, 46, 46, 0.315), $amount: 45);
    transition: 0.5s all ease-in;
  }
}
.entry-description {
  font-size: 12px;
}
</style>
