<template>
  <article>
    <section>
      <router-view></router-view>
    </section>
  </article>
</template>
<script>
export default {};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&family=Titillium+Web:wght@200;600&display=swap');
article {
  font-family: 'Titillium Web', sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  width: 30rem;
  display: flex;
  flex-direction: column;
  /* border: solid 1px #0fdca0; */
  color: aliceblue;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #15293d;
}
</style>
