<template>
  <header-home @create-account="handleAccountCreate" @login="handleLogin" />
  <ContactHome />
  <div class="footer flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedback © 2023</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import ContactHome from './ContactHome.vue'
import HeaderHome from './HeaderHome.vue'
import { useRouter } from 'vue-router'
import useModal from '../../hooks/useModal.js'
export default {
  setup() {
    const router = useRouter()
    const modal = useModal()
    onMounted(() => {
      const token = window.localStorage.getItem('token');

      if (token) {
        router.push({name: "FeedbacksMain"})
      }
    })

    function handleLogin() {
      modal.open({
        component: "ModalLogin"
      })
    }

    function handleAccountCreate() {
      modal.open({
        component: "ModalCreateAccont"
      })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  },
  components: { ContactHome, HeaderHome }
}
</script>

<style lang="scss" scoped></style>
