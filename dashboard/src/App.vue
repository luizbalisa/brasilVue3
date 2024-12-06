<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import ModalFactory from './components/ModalFactory/modalFactory.vue'
import { watch } from 'vue';
import service from './services'
import { setCurrentUser } from './store/user';
const router = useRouter()
const route = useRoute()
const store = setCurrentUser('User')

watch(route.path, async () => {
    if(route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if(!token) {
            router.push({ name: 'HomeMain' })
            return
        }

        const { data } = await service.users.geMe()
    }
        
})
</script>

<template>
  <main>
    <modal-factory />
    <router-view />
  </main>
</template>

