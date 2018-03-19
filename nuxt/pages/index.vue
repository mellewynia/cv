<template>
  <div>

    <section-intro/>

    <template v-for="item of timeline">
      <section-quote :key="item.body" v-if="item.type === 'quote'" v-bind:quote="item.item" />
      <div :key="item.body" v-else-if="item.type === 'artikel'">
        <nuxt-link :to="'/artikelen/' + item.item.slug">
          {{ item.item.title }}
        </nuxt-link>
      </div>
    </template>

    <article>
      <small><nuxt-link to="">UPDATES</nuxt-link> MAANDAG 12 MAART, 2018</small><br/>
    </article>

  </div>
</template>

<script>
import SectionIntro from '~/components/SectionIntro'
import SectionQuote from '~/components/SectionQuote'

export default {
  components: {
    SectionIntro,
    SectionQuote
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
</style>
