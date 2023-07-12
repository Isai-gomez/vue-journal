<template>
  <NavBar />
  <div v-if="isLoading" class="row justify-content-md-center text-dark">
    <div class="col-3 alert-info text-center mt-5">
      <h2>Espere por favor</h2>
      <h3 class="text-secondary">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
  <div v-else class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'dayBookLayout',
  components: {
    NavBar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    EntryList: defineAsyncComponent(() =>
      import('../components/EntryList.vue'),
    ),
  },
  methods: {
    ...mapActions('journal', ['loadEntries']),
  },
  created() {
    this.loadEntries()
  },
  computed: {
    ...mapState('journal', ['isLoading']),
  },
}
</script>
