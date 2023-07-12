<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bolde">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <button
          class="btn btn-danger mx-2"
          @click="UIdeleteEntry"
          v-if="entry.id"
        >
          Eliminar
          <i class="fa fa-trash-alt"></i>
        </button>
        <input
          type="file"
          @change="onSeletedFile"
          ref="imageSelector"
          v-show="false"
          accept="image/jpg, image/png, image/git, image/jpeg"
        />
        <button class="btn btn-primary" @click="onSeletedImage">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-70">
      <textarea placeholder="Qué sucedio hoy?" v-model="entry.text"></textarea>
    </div>
    <Fb icon="fa-save" @on:click="seveEntry" />
    <img
      v-if="(entry.picture && !localImage)"
      :src="entry.picture"
      alt="entry-fotho"
      class="img-thumbnail"
    />
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-fotho"
      class="img-thumbnail"
    />
  </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import { uploadImage } from '../helpers/uploadImage'
import getDateMonthYear from '../helpers/getDayMonthYear'
const swalAletSave = (message = '') =>
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: true,
    timer: 2000,
  })

export default {
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    }
  },

  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
    getEntryById() {
      let entry
      if (this.id === 'new') {
        entry = {
          text: '',
          date: new Date().getTime(),
        }
      } else {
        entry = this.getEntriesById(this.id)
        if (!entry) return this.$router.push({ name: 'no-entry' })
      }
      this.entry = entry
    },
    async seveEntry() {
      const picture = await uploadImage(this.file)
      this.entry.picture = picture
      if (this.entry.id) {
        //update entry
        await this.updateEntry(this.entry)

        swalAletSave('Actualización con exito')
      } else {
        //Created new entry
        const id = await this.createEntry(this.entry)
        this.$router.push({ name: 'entry', params: { id } })
        swalAletSave('Se añadio con exito')
      }
      this.file = null
    },
    async UIdeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: 'Esta seguro de eliminar',
        text: 'Una vez eleiminado no se podra recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si',
      })
      if (isConfirmed) {
        await this.deleteEntry(this.entry.id)
        this.$router.push({ name: 'no-entry' })
        Swal.fire('Eliminado', '', 'success', 'Cool')
      }
    },
    onSeletedFile(event) {
      const file = event.target.files[0]

      if (!file) {
        this.localImage = null
        this.file = null
        return
      }

      this.file = file

      const fr = new FileReader()
      fr.onload = () => (this.localImage = fr.result)
      fr.readAsDataURL(file)
      this.getEntryById()
    },
    onSeletedImage() {
      this.$refs.imageSelector.click()
      this.localImage = null
      this.file = null
    },
  },
  computed: {
    ...mapGetters('journal', ['getEntriesById']),
    day() {
      const { day } = getDateMonthYear(this.entry.date)
      return day
    },
    month() {
      const { month } = getDateMonthYear(this.entry.date)
      return month
    },
    yearDay() {
      const { yearDay } = getDateMonthYear(this.entry.date)
      return yearDay
    },
  },

  created() {
    this.getEntryById()
  },
  watch: {
    id() {
      this.getEntryById()
    },
  },
  components: {
    Fb: defineAsyncComponent(() => import('../components/Fb.vue')),
  },
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 10rem;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  margin-left: 70%;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
