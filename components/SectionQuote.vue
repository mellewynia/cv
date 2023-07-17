
<template>
  <blockquote class="quote" :class="{ ___large: quote.body.length < 150 }" >
    <p>
      {{ quote.body }}
      <cite>
        — {{ quote.name }} – {{ quote.jobTitle }}
        <template v-if="quote.id_client">
          bij {{ getClientById(quote.id_client).name }}
        </template>
      </cite>
    </p>
  </blockquote>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['quote'],
  computed: {
    ...mapGetters([
      'getClientById'
    ])
  }
}
</script>

<style lang="scss">

.quote {
    max-width: 111.8rem;
    padding: 0 1.6rem;
    margin: 62px auto;

    font-family: Raleway Web, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 138%;
    text-shadow: var(--text-shadow);

    @media (min-width: 768px) {
        padding: 0 8.4rem;
        font-size: 20px;

        &.___large {
            font-family: Raleway Web, Helvetica, Arial, sans-serif;
            font-size: 32px;
            font-style: italic;
            font-weight: 300;
            line-height: 124%;
        }
    }

    @media print {
      page-break-inside: avoid;
      margin: 5rem 7rem 5rem 7rem;
    }

    cite {
        display: block;
        margin: 0.7rem 0 0 1.6rem;
        color: hsla(222, 16%, 55%, 1);
        font-family: Open Sans Web, Helvetica, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 1;
        text-shadow: none;

        @media (min-width: 768px) {
            margin-top: 1.5rem;
            margin-left: 2.6rem;
        }
    }

    &.___large cite {
        @media (min-width: 768px) {
            margin-top: 1.1rem;
        }
    }
}

</style>
