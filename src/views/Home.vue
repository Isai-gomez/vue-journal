<template>
  <div class="home">
    <h1>Hola mundo</h1>
    <button @click="getToDayBook" class="btn btn-primary">primary</button>
    <button @click="getToDayBook" class="btn btn-secondary">secondary</button>
    <button @click="getToDayBook" class="btn btn-success">success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    getToDayBook() {
      this.$router.push({ name: 'no-entry' })
    },
  },
}
</script>
