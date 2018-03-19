<template>
  <div>

    <section-intro/>

    <article v-for="item of timeline" :key="item.body">
      <section-quote v-if="item.type === 'quote'" v-bind:quote="item.item" />
      <div v-if="item.type === 'artikel'">
        <nuxt-link :to="'/artikelen/' + item.item.slug">
          {{ item.item.title }}
        </nuxt-link>
      </div>
    </article>

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
