<template>
  <div class="home">
    <button @click="getToDayBook" class="btn btn-primary">{{doesToUpperCase}}</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data(){
    const titleBtn='Journal day'
    return{
      titleBtn
    }
  },
  methods: {
    getToDayBook() {
      this.$router.push({ name: 'no-entry' })
    },

  },
  computed:{
    doesToUpperCase:function(){
      return this.titleBtn.toUpperCase()
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: grid;
  height: 100vh;
  place-content: center;
}
</style>
