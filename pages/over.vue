
<template>
  <main>
    <nuxt-link to="/artikelen"></nuxt-link>
    <article class="content ___little-spacing-bottom">
        <h1>
          Melle Wijnia
        </h1>
        <p>
          Melle is een toegewijd front-end developer met uitgebreide Javascript kennis. Hij staat je bij zodat je projecten op tijd en naar wens live gaan. Melle werkt nauwkeurig en schakelt snel.
        </p>
        <p class="image ___left">
          <img src="/media/me.jpg" alt="Melle Wijnia" />
        </p>
        <blockquote>
          <p>
            Creatief, Grondig, Gedreven, Geduldig, Communicatief, Nieuwsgierig
          </p>
        </blockquote>
        <h2>
          Achtergrond
        </h2>
        <p>
          Op 1 april 2011 heeft hij zijn eenmanszaak gestart vanuit zijn passie om mooie, bruikbare websites op te leveren die resultaten genereren.
          Gedurende de jaren verschoof de focus naar front-end development waarbij hij terecht kwam op interim-achtige posities.
          Hierbij draait het erom om projecten op schema, binnen budget en naar tevredenheid van de PO en/of projectmanagers uit te voeren.
          Bij dergelijke uitdagingen bloeit hij op.
          Gedurende de projecttijd, van doorgaans 3 maanden tot een jaar, biedt een agile werkwijze vaak de uitkomst volgens scrum of kanban, zodat de focus altijd ligt op de output met hoogste value.
          Dit leidt tot goed werkende websites en -apps die met enthousiasme worden ontvangen door de eindgebruikers.
        </p>
        <h3 class="content-h4">
          Vrijetijdsbesteding
        </h3>
        <p>
          Koken, fietsen, meetups en start-ups
        </p>
        <h3 class="content-h4">
          Mobiliteit
        </h3>
        <p>
          Vanuit Nijmegen, rijbewijs B + Auto, NS Business Card
        </p>
        <h3 class="content-h4">
          Talen
        </h3>
        <p>
          uitstekend Nederlands en Engels, spreken en schrijven<br>
        </p>
        <!-- <p>
          <nuxt-link to="/">&#060; terug naar home</nuxt-link>
        </p> -->
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
