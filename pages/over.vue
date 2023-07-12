
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
    </article>

    <section-content />
  </main>
</template>

<script>
import SectionContent from '~/components/SectionContent'

export default {
  components: {
    SectionContent
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
