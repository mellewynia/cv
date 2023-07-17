
<template>
  <main>
    <article v-if="artikel" class="content ___little-spacing-bottom">
      <h1>
        Melle Wijnia
      </h1>
      <p>
        {{ artikel.attributes.profile }}
      </p>
      <p class="image ___left">
        <img :src="artikel.attributes.image" alt="Melle Wijnia" />
      </p>
      <blockquote>
        <p>
          {{ artikel.attributes.profileKeywords }}
        </p>
      </blockquote>
      <div v-html="$md.render(artikel.body)"></div>
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
    </article>

    <section-content />
  </main>
</template>

<script>
import SectionContent from '~/components/SectionContent'

import { cleanNewLinesMarkdownBody } from '~/plugins/utils'

export default {
  components: {
    SectionContent
  },
  data () {
    return {
      date: new Date(...process.env.dateUpdate),
      timeline: process.env.contents.timeline
    }
  },
  head () {
    return {
      title: 'Over Melle Wijnia'
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

<style lang="scss">
</style>
