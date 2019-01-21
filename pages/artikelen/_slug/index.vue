<template>
  <main>
    <pre>{{artikel}}</pre>
    <article v-if="artikel">
      <div v-html="$md.render(artikel.body)"></div>
    </article>
  </main>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      artikel: null
    }
  },
  validate ({ params }) {
    // Must be a number

    return true
  },
  async asyncData ({params}) {
    const fileContent = await import(`!!json-loader!front-matter-loader!~/static/content/artikelen/${params.slug}.md`)
      .catch(error => {
        console.log(`Artikel kon niet worden opgebouwd: ${params.slug.md}`)
        console.error(error)
        return {
          loading: false,
          artikel: false
        }
      })

    return {
      loading: false,
      artikel: fileContent
    }
  }
}
</script>

<style>

</style>
