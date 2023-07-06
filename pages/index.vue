<template>
  <div>

    <section-intro />

    <!--<section-update />-->

    <section class="meta">
        <span>© 2007–2023 Melle Wijnia</span>
        <span>KvK {{ $store.state.general.organisation.kvk }} / {{ $store.state.general.organisation.name }}</span>
        <span>{{ $store.state.general.address.streetAddress }} {{ $store.state.general.address.postalCode }} {{ $store.state.general.address.addressLocality }}</span>
    </section>

    <template v-for="item of timeline">
      <section-quote :key="item.body" v-if="item.type === 'quote'" v-bind:quote="item.item" />
      <section-client :key="item.body" v-if="item.type === 'client'" v-bind:client="item.item" />
      <div :key="item.body" v-else-if="item.type === 'artikel'">
        <nuxt-link :to="'/artikelen/' + item.item.slug">
          {{ item.item.title }}
        </nuxt-link>
      </div>
    </template>

  </div>
</template>

<script>
import SectionIntro from '~/components/SectionIntro'
import SectionClient from '~/components/SectionClient'
import SectionQuote from '~/components/SectionQuote'
import SectionUpdate from '~/components/SectionUpdate'

export default {
  components: {
    SectionIntro,
    SectionClient,
    SectionQuote,
    SectionUpdate
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
  padding: 1rem 1.4rem 0;
  font-size: var(--font--x-small);
  color: hsla(222, 10%, 74%, 1);

  > span {
    margin: 0 1.2rem 0 0;
  }
}
</style>
