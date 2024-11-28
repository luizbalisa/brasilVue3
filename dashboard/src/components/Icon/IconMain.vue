<template>
    <component :is="name" v-bind="$props" />
</template>

<script setup>
import { computed } from 'vue';
import Loading from './LoadingMain.vue'
const props = defineProps({
    name: { type: String, required: true }
})

</script>
