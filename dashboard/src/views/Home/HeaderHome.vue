<template>
  <header class="header">
    <div class="header-grup">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="../../assets/images/logo_white.png" alt="logo_white" />
        </div>

        <div class="flex">
          <button @click="() => emit('create-account')" class="px-6 py-2 font-bold rounder-full text-white focus:outline-none">
            Criar uma conta
          </button>

          <button
            @click="() => emit('login')"
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
          >
            Entra
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha uma feedback. <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes
        </h1>

        <p class="text-white text-lg font-midiun">
          Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>

        <div class="mt-10">
          <button
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
          >
            Creie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup(_, { emit }) {
    return {
      emit
    }
  }
}
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-grup {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 670px) {
  .header-grup {
    background-image: url(../../assets/images/blue-balloon.png);
    background-position: 90% 100%;
    background-repeat: no-repeat;
    background-size: 628px;
  }
}
</style>
