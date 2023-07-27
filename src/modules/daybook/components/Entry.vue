<template>
  <div
    :class="
      active
        ? 'entry-container pointer p-2 active'
        : 'entry-container pointer p-2'
    "
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    
  >
    <!-- TITULO -->
    <div class="entry-title d-flex" @click="active = true" @mouseout="mouseOut">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>
    <div class="entry-description" @click="active = true" @mouseout="mouseOut">
      {{ cutEntryText }}
    </div>
  </div>
</template>

<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
export default {
  props: {
    entry: {
      typeof: Object,
      require: true,
    },
  },
  data() {
    const active = false;
    return { active };
  },
  methods: {
    mouseOut: function () {
      this.active = false;
    },
  },
  computed: {
    cutEntryText() {
      return this.entry.text.length > 30
        ? this.entry.text.slice(0, 30) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getDate()];
    },
    yearDay() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  height: 5rem;
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  height: auto;
  &:hover {
    background-color: lighten($color: rgba(46, 46, 46, 0.315), $amount: 45);
    transition: 0.5s all ease-in;
  }
}
.entry-description {
  font-size: 12px;
}
.active {
  background-color: #0fdca0;
}
</style>
