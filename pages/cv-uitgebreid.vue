<template>
  <div>
    <article class="content ___little-spacing-bottom">
      <h1>
        Melle Wijnia
      </h1>
    </article>

    <div class="">
      <div class="content ___little-spacing-top ___little-spacing-bottom">
        <h2>Front-end developer / consultant</h2>
        <p>{{ artikel.attributes.intro }}</p>
        <p class="image ___left">
          <img :src="artikel.attributes.image" alt="Melle Wijnia" />
        </p>
        <h3 class="content-h4">
          Vrijetijdsbesteding
        </h3>
        <p>
          {{ artikel.attributes.hobbies }}
        </p>
        <h3 class="content-h4">
          Mobiliteit
        </h3>
        <p>
          {{ artikel.attributes.mobility }}
        </p>
        <h3 class="content-h4">
          Talen
        </h3>
        <p>
          {{ artikel.attributes.languages }}
        </p>
        <h3 class="content-h4">
          Omschrijving
        </h3>
        <p>
          {{ artikel.attributes.profileKeywords }}
        </p>
      </div>
    </div>

    <template v-for="item of timeline">
      <section-quote :key="item.body" v-if="item.type === 'quote'" v-bind:quote="item.item" />
      <section-client :key="item.body" v-if="item.type === 'client'" v-bind:client="item.item" />
    </template>
    <section-content />
  </div>
</template>

<script>
import SectionIntro from '~/components/SectionIntro'
import SectionClient from '~/components/SectionClient'
import SectionQuote from '~/components/SectionQuote'
import SectionUpdate from '~/components/SectionUpdate'
import SectionContent from '~/components/SectionContent'

import { cleanNewLinesMarkdownBody } from '~/plugins/utils'

export default {
  components: {
    SectionContent,
    SectionIntro,
    SectionClient,
    SectionQuote,
    SectionUpdate
  },
  data () {
    return {
      date: new Date(...process.env.dateUpdate),
      timeline: process.env.contents.timeline
    }
  },
  async asyncData () {
    const artikel = await import(`!!json-loader!front-matter-loader!./over.md`)

    if (artikel) {
      artikel.body = cleanNewLinesMarkdownBody(artikel.body)
    }

    return { artikel }
  }
}
</script>

<style lang="scss" scoped>
</style>
