<template>
  <section class="container">
    <nuxt-link to="/over">over</nuxt-link>
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-test
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
