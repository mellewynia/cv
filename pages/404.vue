<template>
  <main>

    <div class="content">
      <h1>Pagina bestaat niet (meer)</h1>
      <p>Ga naar de <nuxt-link to="/"><u>home pagina</u></nuxt-link></p>
    </div>

  </main>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      date: new Date(...process.env.dateUpdate),
      timeline: process.env.contents.timeline
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 10vh 20px 16vh;
  text-align: center;
  font-size: 16px;
}
</style>
