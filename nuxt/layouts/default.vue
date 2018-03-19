<template>
  <div>
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">

@import '../static/css/fonts/open-sans';

html {

  --max-width: 95rem;

  --font--xx-small: 1.1rem;
  --font--x-small: 1.2rem;
  --font--small: 1.5rem;
  --font--medium: 1.7rem;
  --font--large: 2.6rem;
  --font--x-large: 3.8rem;
  --font--xx-large: 6.2rem;

  font-family: "Open Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  /* TODO
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  */
  box-sizing: border-box;

  overflow-y: scroll;
  overflow-x: hidden;
}

body {
  @media (min-width: 1024px) {
    padding-top: 7.3rem;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
