<script setup>
import { RouterView } from 'vue-router'
import ModalFactory from './components/ModalFactory/modalFactory.vue';
</script>

<template>
  <main>
    <modal-factory />
    <router-view />
  </main>
</template>

