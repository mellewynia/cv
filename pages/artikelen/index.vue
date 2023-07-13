
<template>
  <main>

    <div class="content ___little-spacing-top ___little-spacing-bottom">
      <h1>Artikelen</h1>
    </div>

    <div v-for="item of timeline" :key="item.id">
      <div v-if="item.type === 'artikel' && item.item.type === 'link'" class="content ___compact-spacing-top ___compact-spacing-bottom">
        <div>
          <h3 class="___text-inherit ___little-margin-top ___no-margin-after">
            <a :href="item.item.url">
              {{ item.item.title }}
            </a>
          </h3>
          <p class="___small-margin-top ___text-small">
            {{ item.item.date[0] }}-{{ item.item.date[1] }}-{{ item.item.date[2] }}
            &nbsp;
            {{ item.item.publisher }}
          </p>
        </div>
      </div>
    </div>

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
