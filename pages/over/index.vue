
<template>
  <main>
    <!--
    <style>
    :root {
      --color: blue;
      --width-narrow: 38rem;
    }
    </style>
    -->
    <nuxt-link to="/artikelen"></nuxt-link>
    <article class="content">
      <p>
        Wie is?
      </p>
      <h1>
        Melle Wynia
      </h1>
      <p>
        6 juni 1991 — <span class="now">8+ jaar ervaring</span> — 156 projecten — 42 klanten
      </p>
      <p>
        Mobiliteit: vanuit Nijmegen, rijbewijs B + Auto, NS Business Card<br>
        Talen: uitstekend Nederlands en Engels, spreken en schrijven<br>
        Vrijetijdsbesteding: koken, fietsen, meetups en start-up superpowerme.io
      </p>
      <p>
        Melle is een toegewijd front-end developer met uitgebreide Javascript kennis. Hij staat je bij zodat je projecten op tijd en naar wens live gaan. Melle werkt betrouwbaar, nauwkeurig en schakelt snel.
      </p>
      <p class="image ___left">
        <img src="/media/me.jpg" alt="Melle Wynia" />
      </p>
      <p>
        Op 1 april 2011 heeft hij zijn eenmanszaak gestart vanuit zijn passie om mooie, bruikbare websites op te leveren die resultaten genereren. Daarbij focuste Melle zich op totaaloplossingen. Gedurende de jaren verschoof de focus naar front-end development waarbij hij terecht kwam op interim-achtige posities. Hierbij draait het erom om projecten op schema, binnen budget en naar tevredenheid van de PO en/of projectmanagers uit te voeren. Bij dergelijke uitdagingen bloeit hij op. Gedurende de projecttijd, van doorgaans 3 maanden tot een jaar, biedt een agile werkwijze vaak de uitkomst volgens scrum of kanban, zodat de focus altijd ligt op de output met hoogste value. Dit leidt tot goed werkende websites en -apps die met enthousiasme worden ontvangen door de eindgebruikers.
      </p>
      <blockquote>
        <p>
          Creatief, Grondig, Gedreven, Geduldig, Communicatief, Nieuwsgierig
        </p>
      </blockquote>
      <p>
        <nuxt-link to="/">&#060; terug naar home</nuxt-link>
      </p>
    </article>
    <!--
    <h2>
      Wat vinden anderen?
    </h2>
    <h2>
      Quotes
    </h2>
    <h2>
      Werkt samen met..
    </h2>

    <ul>
      <li>ZZID - identitity en interaction design</li>
      <li>Xuntos</li>

    </ul>
    -->

  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
  max-width: calc(var(--width-narrow) + 8rem);
  margin: calc(10vh + 3.8rem) auto calc(10vh + 3.8rem) auto;
  font-size: var(--font--medium--mobile);
  line-height: 162%;
  background: var(--color);

  @media (min-width: 568px) {
    padding: 0 4rem;
  }

  @media (min-width: 768px) {
    font-size: var(--font--medium);
  }

  h1 {
    font-weight: 200;
    font-size: var(--font--xx-large);
    text-indent: -2px;
    line-height: 100%;
  }

  p {
    margin: 2.6rem 0 0 0;
  }

  .image.___left {
    float: left;
    width: 50%;
    margin-left: -25%;
    margin-top: 3.2rem;
    margin-right: 3.3rem;
    margin-bottom: 2rem;

    > img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
