
<template>
  <main>
    <section-intro />

    <section class="cta-blocks">
      <div class="cta-block">
        <h2>Freelance (zzp inhuur)</h2>
        <p class="meta-info">
          Beschikbaar per november 2024<br>
          v.a. €105,00 – 135,00 / uur (i.o. afh. van duur)
        </p>
        <p>
          Elke dag betrokkenheid als senior developer, lead en architect in één of meerdere teams.
          Meters maken. Milestones halen. Itereren. Kwaliteit leveren.
        </p>
        <p>
          <nuxt-link to="/over" class="cta-link"><u>Meer over Melle</u></nuxt-link>
          &nbsp;
          <nuxt-link to="/cv-frontend-developer" class="cta-link"><u>CV</u></nuxt-link>
          &nbsp;
          <nuxt-link to="/contact-frontend-developer" class="cta-link"><u>Contact</u></nuxt-link>
        </p>
      </div>
      <div class="cta-block">
        <h2>Projectmatig</h2>
        <p class="meta-info">
          Beschikbaar in winter 2024<br>
          Budget / offerte vooraf overeengekomen
        </p>
        <p>
          Beperkte inzet, blijvend resultaat.
          Ondersteuning bij projectteams met specifieke problemen.
          Vaste offerte voor zekerheid is mogelijk.
        </p>
        <p>
          <nuxt-link to="/contact-frontend-developer" class="cta-link"><u>Neem contact op voor de mogelijkheden</u></nuxt-link>
        </p>
      </div>
    </section>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class="meta-info">Ondersteuning bij onderwerpen</h2>
    </div>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class="___little-margin-top">
        Pega Constellation (DX)
      </h2>
      <p>
        Pega Constellation DX is een platform voor het beheren van de digitale ervaring van jouw klanten.
        Ik help jouw organisatie graag met het opzetten van dit platform en het inrichten van de processen.
      </p>
    </div>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class="___little-margin-top">
        Pentest (cybersecurity)
      </h2>
      <p>
        Soms kan het overweldigend zijn om een pentest rapport te ontvangen.
        Ik help je organisatie graag met het oppakken van de bevindingen en het implementeren van de oplossingen.
      </p>
    </div>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class="___little-margin-top">
        Ervaring in team inbrengen
      </h2>
      <p>
        Als senior developer, lead en architect heb ik ervaring in het inbrengen van kennis en kunde in een team.
        Ik help graag bij het opzetten van een team, het inwerken van nieuwe collega's en het verbeteren van de samenwerking,
        alsmede het verbeteren van de kwaliteit van de code.
      </p>
    </div>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class="___little-margin-top">
        Innoveren en ontwikkelen
      </h2>
      <p>
        Een van de lastigste dingen in een team is om nieuwe architectuur en daarop volgende ontwikkelingen in gang te zetten.
        Zit je vast? Ik help jou en jouw organisatie graag verder.
      </p>
    </div>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h2 class=" ___little-margin-top">
        Toegankelijkheid (a11y) audit
      </h2>
      <p>
        Dikke rapporten met bevindingen over toegankelijkheid kunnen overweldigend zijn.
        Vlot en vaardig ondersteun ik jouw organisatie met het verwerken van de bevindingen en het implementeren van de oplossingen.
      </p>
    </div>

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
    margin: -56px auto 0 auto;
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
