<template>
  <header>
    <h3>Iniciar sesión en Journal</h3>
  </header>
  <aside>
    <p>El diario web que permite documentar las cosas bonitas de tu día</p>
  </aside>
  <form @submit.prevent="onSubmitLogin">
    <!-- Grid -->

    <!-- Markup example 1: input is inside label -->
    <section class="wrapper-input">
      <input type="email" name="email" placeholder="email" required v-model="userForm.email" />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
        v-model="userForm.password"
      />
    </section>
    <div>
      <router-link :to="{ name: 'register' }">Crear una cuenta</router-link>
    </div>
    <footer>
      <button type="submit">Ingresar</button>
    </footer>
  </form>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {userAuth} from '../composables/userAuth'
import Swal from "sweetalert2";

export default {
  setup() {
    const router = useRouter();
    const userForm = ref({
      email: "",
      password: "",
    });
    const { loginUser } = userAuth();
    return {
      userForm,
      onSubmitLogin: async () => {
        const { ok, message } = await loginUser(userForm.value);
        if (!ok) {
          return Swal.fire("Error", message, "error");
        }
        router.push({ name: "no-entry" });
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
