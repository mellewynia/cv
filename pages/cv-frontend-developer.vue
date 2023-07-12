
<template>
  <main>
    <nuxt-link to="/artikelen"></nuxt-link>
    <article class="content ___little-spacing-bottom">
        <h1>
          CV Front-end developer Melle Wijnia
        </h1>

    </article>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 id="cv">CV</h2>
    </div>

    <section-notification>
      <p>
        Graag cv met referenties in PDF ontvangen?
        Neem contact op: hi@mellewynia.nl
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
      <!-- <section-quote :key="item.body" v-if="item.type === 'quote'" v-bind:quote="item.item" /> -->
      <!-- <section-client :key="item.body" v-if="item.type === 'client'" v-bind:client="item.item" /> -->
      <!-- <div v-else-if="item.type === 'artikel'" :key="item.body">
        <nuxt-link :to="'/artikelen/' + item.item.slug">
          {{ item.item.title }}
        </nuxt-link>
      </div> -->
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

export default {
  components: {
    SectionContent,
    SectionIntro,
    SectionClient,
    SectionQuote,
    SectionUpdate,
    SectionNotification
  },
  data () {
    return {
      date: new Date(...process.env.dateUpdate),
      timeline: process.env.contents.timeline
    }
  }
}
</script>

<style lang="scss">
</style>
