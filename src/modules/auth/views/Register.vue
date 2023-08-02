<template>
  <header>
    <h3>Crea una cuenta para el Journal</h3>
  </header>
  <aside>
    <p>El diario web que permite documentar las cosas bonitas de tu día</p>
  </aside>
  <form @submit.prevent="onSubmit">
    <!-- Grid -->

    <!-- Markup example 1: input is inside label -->
    <section class="wrapper-input">
      <input
      v-model="userForm.name"
        type="text"
        name="name"
        placeholder="Usuario"
        required
      />
      <input
      v-model="userForm.email"
        type="email"
        name="email"
        placeholder="Correo"
        required
      />
      <input
      v-model="userForm.password"
        type="password"
        name="password"
        placeholder="Contraseña"
        required
      />
    </section>
    <div>
      <router-link :to="{ name: 'login' }">Ir a login</router-link>
    </div>
    <footer>
      <button type="submit">Crear</button>
    </footer>
  </form>
</template>
<script>
import { ref } from "vue";
import {userAuth} from '../composables/userAuth'
export default {
  setup() {
    const userForm = ref({
      name: "",
      email: "",
      password: "",
    });
    const {createUser} = userAuth()
    return {
      userForm,
      onSubmit: async () => {
        const {ok, message}=createUser(userForm.value);
        console.log({ok, message});
      },
    };
  },
};
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
div {
  margin-left: 2rem;
}
a {
  color: white;
}
</style>
