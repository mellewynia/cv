
<template>
  <main>
    <article class="content ___little-spacing-bottom">
      <h1>
        Melle Wijnia
      </h1>
    </article>

    <div class="">
      <div class="content ___little-spacing-top ___little-spacing-bottom">
        <h2>{{ $store.state.general.jobTitle }}</h2>
        <p class="image ___left">
          <img :src="artikel.attributes.image" alt="Melle Wijnia" />
        </p>
        <p>
          {{ artikel.attributes.profileKeywords }}
        </p>
        <div>
          <div v-html="$md.render(artikel.attributes.intro)"></div>
        </div>
      </div>

      <div class="content ___little-spacing-top ___little-spacing-bottom">
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
      </div>
    </div>

    <section-notification>
      <p>
        Graag uitgebreid cv mét referenties in PDF ontvangen?
        Neem <nuxt-link to="/contact-frontend-developer"><u>contact</u></nuxt-link> op
      </p>
    </section-notification>

    <template v-for="item of timeline">
      <div v-if="item.type === 'client'" :key="item.body" class="content ___little-spacing-top ___little-spacing-bottom">
        <h3>{{item.item.name}}</h3>
        <p class="___small-margin-top ___text-small">{{item.item.jobTitle}}</p>
        <p class="___small-margin-top ___text-small">
          <template>{{ item.item.date[0] }}-{{ item.item.date[1] + 1 }}</template>
          <span class="now" v-if="item.item.endDate === null">–HEDEN</span>
          <template v-else-if="item.item.endDate !== undefined">–{{ item.item.endDate[0] }}-{{ item.item.endDate[1] + 1 }}</template>
        </p>
        <span v-for="(skill, i) of item.item.skills" :key="i"><span class="tag">{{ skill }}</span>&nbsp;</span>
        <ul v-if="item.item.projects" class="client__projects">
          <li v-for="(project, i) of item.item.projects" :key="i" class="client-project">
            {{ project.name }}
            <a v-if="project.url" class="btn-goto" :href="project.url" target="_blank"><u>Website</u><i class="icon-link-out"></i></a>
            <span v-for="(skill, i) of project.skills" :key="i"><span class="tag">{{ skill }}</span>&nbsp;</span>
          </li>
        </ul>
      </div>
    </template>

    <section-content>
    </section-content>
  </main>
</template>

<script>
import SectionIntro from '~/components/SectionIntro'
import SectionClient from '~/components/SectionClient'
import SectionQuote from '~/components/SectionQuote'
import SectionUpdate from '~/components/SectionUpdate'
import SectionContent from '~/components/SectionContent'
import SectionNotification from '~/components/SectionNotification'

import { cleanNewLinesMarkdownBody } from '~/plugins/utils'

export default {
  components: {
    SectionContent,
    SectionIntro,
    SectionClient,
    SectionQuote,
    SectionUpdate,
    SectionNotification
  },
  head () {
    return {
      title: 'CV Frontend developer - Melle Wijnia'
    }
  },
  data () {
    return {
      date: new Date(...process.env.dateUpdate),
      timeline: [
        process.env.contents.timeline[0],
        process.env.contents.timeline[1],
        process.env.contents.timeline[2],
        process.env.contents.timeline[3]
      ]
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
