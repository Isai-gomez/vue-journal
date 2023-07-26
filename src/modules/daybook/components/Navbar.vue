<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        class="d-line-block aling-text-top mx-2"
        height="25"
      />
      Daybook
    </a>
    <div class="d-flex">
      <button class="btn btn-outline-info mx-2"  @click="this.$router.push({name:'Home'})">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  </nav>
</template>
