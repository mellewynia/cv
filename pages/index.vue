
<template>
  <main>
    <section-intro />

    <section class="cta-blocks">
      <div class="cta-block">
        <h2>Freelance</h2>
        <p class="meta-info">
          Beschikbaar per november 2023<br>
          v.a. €105,00 / uur (i.o. 32-40u zzp inhuur)
        </p>
        <p>
          Elke dag betrokkenheid als senior developer, lead en architect in één of meerdere teams.
        </p>
        <p>
          <nuxt-link to="/over" class="cta-link"><u>Leer meer over Melle (en CV)</u></nuxt-link>
        </p>
      </div>
      <div class="cta-block">
        <h2>Project</h2>
        <p class="meta-info">
          Beschikbaar in herst 2023<br>
          v.a. €125,00 / uur (i.o.)
        </p>
        <p>
          Beperkte inzet, blijvend resultaat.
          Nieuwe projecten opstarten, hulp bij vernieuwing, outsourcing, (cybersec/a11y) audits en kleinere opdrachten.
        </p>
        <p>
          <nuxt-link to="/contact-frontend-developer" class="cta-link"><u>Neem contact op voor de mogelijkheden</u></nuxt-link>
        </p>
      </div>
      <!-- <div class="cta-block">
        <h2 class="cta-block__">Heb je iets anders nodig?</h2>
        <p class="meta-info">
          Beschikbaarheid: informeer<br>
          Kosten: informeer
        </p>
        <p>
          Geef jouw team in één dagdeel nieuwe energie, inzichten en tools.
        </p>
        <p>
          <nuxt-link to="/contact" class="cta-link"><u>Neem contact op</u></nuxt-link>
        </p>
      </div> -->
    </section>

    <!-- <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2>Recent</h2>
    </div>

    <div v-for="item of timeline" :key="item.id">
      <div v-if="item.type === 'client' && item.item.date && item.item.date[0] > 2019" class="content ___compact-spacing-top ___compact-spacing-bottom">
        <h3 class="___text-inherit ___little-margin-top">
          {{item.item.name}}
          <nuxt-link to="/over#cv" class="btn-goto"><u>cv</u><i class="icon-link-out"></i></nuxt-link>
        </h3>
        <p class="___text-small">
          {{item.item.date[0]}}-{{item.item.date[1]}}<span v-if="item.item.endDate === null" class="now">–HEDEN</span><span v-else>–{{item.item.endDate[0]}}-{{item.item.endDate[1]}}</span>
          &nbsp;
          {{item.item.jobTitle}}
        </p>
      </div>
      <div v-if="item.type === 'artikel' && item.item.type === 'link'" class="content ___compact-spacing-top ___compact-spacing-bottom">
        <div>
          <h3 class="___text-inherit ___little-margin-top">
            <a :href="item.item.url">
              {{ item.item.title }}
            </a>
          </h3>
          <p class="___text-small">
            {{ item.item.date[0] }}-{{ item.item.date[1] }}-{{ item.item.date[2] }}
            &nbsp;
            {{ item.item.publisher }}
          </p>
        </div>
      </div>
    </div> -->

    <section-content />
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

<style lang="scss" scoped>
.meta {
  padding: 16px 22.4px 0;
  padding: 1rem 1.4rem 0;
  font-size: var(--font--x-small);
  color: #b6bac3;
}

.meta > span {
  margin: 0 1.2rem 0 0;
}

.cta-blocks {
  position: relative;
  margin: -22.4px 64px 35.2px 64px;
  margin: -1.4rem 4rem 2.2rem 4rem;
  z-index: 1;
  max-width: var(--max-width);
}

@media screen and (min-width: 768px) {
  .cta-blocks {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 3.8rem;
    margin: -52px auto 0 auto;
    position: relative;
  }
}
.cta-blocks > * {
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 10, .1);
            box-shadow: 0 1px 2px rgba(0, 0, 10, .1);
    border-radius: 0.4rem;
    padding: 32px 38.4px;
    padding: 2rem 2.4rem;
    background: #fff;
    margin: 0 0 19.2px 0;
    margin: 0 0 1.2rem 0;
}
@media screen and (min-width: 768px) {
  .cta-blocks > * {
    width: 50%;
    min-height: 138px;
    padding: 32px 42px;
    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 10, .1);
            box-shadow: 0 2px 6px rgba(0, 0, 10, .1);
  }
}
.cta-block {
  font-size: var(--font--medium--mobile);
}
.cta-block > h2 {
    font-weight: 400;
    margin: 0 0 12.8px 0;
    font-size: var(--font--large);
}
.cta-block p {
    margin: 0 0 1rem 0;
}

</style>
