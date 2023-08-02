<template>
  <header>
    <h3>Iniciar sesión en Journal</h3>
  </header>
  <aside>
    <p>El diario web que permite documentar las cosas bonitas de tu día</p>
  </aside>
  <form>
    <!-- Grid -->

    <!-- Markup example 1: input is inside label -->
    <section class="wrapper-input">
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="First name"
        required
      />

      <input
        type="password"
        id="lastname"
        name="lastname"
        placeholder="Contraseña"
        required
      />
    </section>
    <div>
      <router-link :to="{name:'register'}">Crear una cuenta</router-link>
    </div>
    <footer>
      <button type="submit">Ingresar</button>
    </footer>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper-input {
  padding: 0 1rem 0 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
header {
  background-color: #0fdca0;
  padding: 0.5rem;
  text-align: center;
}
aside {
  padding: 1rem 1rem 0 1rem;
}
p {
  padding: 0 1rem 0 1rem;
}
input {
  background-color: #15293d;
  border: 1px solid white;
  margin: 1rem;
  height: 3rem;
  color: white;
}
input:focus {
  outline: none;
}
button {
  background-color: #0fdca0;
  width: 6rem;
  height: 3rem;
  border: none;
  margin-right: 2rem;
  margin-bottom: 1rem;
  color: white;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: end;
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
div{
    margin-left: 2rem;
}
a{
  color: white;
}
</style>
