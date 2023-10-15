<template>
  <main>
    <ModalFactory />
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
// import HomeMain from './views/Home/HomeMain.vue'
import ModalFactory from './components/ModalFactory/modalFactory.vue';

export default {
  components: {    ModalFactory},
  setup() {
    return {
      RouterLink,
      RouterView,
      ModalFactory
    }
  },
}
</script>
