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
        <p>
          <small>Vrijetijdsbesteding</small><br />
          {{ artikel.attributes.hobbies }}
        </p>
        <p>
          <small>Mobiliteit</small><br />
          {{ artikel.attributes.mobility }}
        </p>
        <p>
          <small>Talen</small><br />
          {{ artikel.attributes.languages }}
        </p>
        <p>
          <small>Kernwoorden</small><br />
          {{ artikel.attributes.profileKeywords }}
        </p>
        <h2>Contact</h2>
        <p>
          Ik ben Melle B.V.<br />
          KvK 75849844
        </p>
        <p>
          Leuvensbroek 1019<br />
          6546 XA NIJMEGEN
        </p>
        <p>
          <a :href="'tel: ' + $store.state.general.telephone.replace(/ /g, '')">
            <i class="icon-telephone icon-margin-right"></i>{{ $store.state.general.telephone }}
          </a><br />
          <a :href="'mailto: ' + $store.state.general.email">
            <i class="icon-envelope icon-margin-right"></i>{{ $store.state.general.email }}
          </a>
        </p>
        <p>
          <a :href="$store.state.general.linkedin" target="_blank" title="“Join the great link”">
            <i class="icon-link icon-margin-right"></i>LinkedIn
          </a><br />
          <a :href="$store.state.general.github" target="_blank">
            <i class="icon-code icon-margin-right"></i>Github: @MelleWynia
          </a>
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
  head () {
    return {
      title: 'CV Front-end developer Melle Wijnia'
    }
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
