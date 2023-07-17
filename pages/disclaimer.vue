<template>
  <article class="content" v-if="artikel">
    <section-content v-html="$md.render(artikel.body)"></section-content>
  </article>
</template>

<script>
import SectionContent from '~/components/SectionContent'

export default {
  components: { SectionContent },
  data () {
    return {
      artikel: null
    }
  },
  head () {
    return {
      title: 'Disclaimer mellewynia.nl'
    }
  },
  async asyncData () {
    const artikel = await import(`!!json-loader!front-matter-loader!./disclaimer.md`)

    return { artikel: artikel }
  }
}
</script>

<style>

</style>
