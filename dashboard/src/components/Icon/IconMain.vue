<template>
    <component :is="name" v-bind="$props" />
</template>

<script setup>
import { computed } from 'vue';
import Loading from './LoadingMain.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'

const name = computed(() => {
    if (props.name === 'loading') {
        return Loading
    } else if (props.name === 'copy') {
        return Copy
    } else if (props.name === 'chevronDown') {
        return ChevronDown
    }
})
const props = defineProps({
    name: { type: String, required: true }
})

</script>
