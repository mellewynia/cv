
const fs = require('fs')
const fm = require('front-matter')

function getContents () {

  const contents = {
    clients: [],
    quotes: [],
    artikelen: [],
    updates: [],

    timeline: [],
    routes: []
  }

  // Clients

  const clientFiles = fs.readdirSync('./static/content/clients')
  clientFiles.forEach(fileName => {
    // console.log('go', fileName)

    let content = {}

    // console.log(`./static/content/clients/${fileName}`)

    const file = fs.readFileSync(`./static/content/clients/${fileName}`, 'utf8')
    // console.log(file)

    content = fm(file)

    contents.clients.push({
      ...content.attributes,
      body: content.body
    })
  })

  // Quotes

  const quoteFiles = fs.readdirSync('./static/content/quotes')
  quoteFiles.forEach(fileName => {
    const file = fs.readFileSync(`./static/content/quotes/${fileName}`, 'utf-8')
    const content = fm(file)

    contents.quotes.push({
      ...content.attributes,
      body: content.body
    })
  })

  // Artikelen

  const quoteArtikelen = fs.readdirSync('./static/content/artikelen')
  quoteArtikelen.forEach(fileName => {
    const file = fs.readFileSync(`./static/content/artikelen/${fileName}`, 'utf-8')
    const content = fm(file)

    const slug = fileName.replace(/\.md$/, '')

    contents.artikelen.push({
      ...content.attributes,
      slug,
      client: contents.clients.find(client => client.id === content.attributes.id_client),
      body: content.body
    })

    contents.routes.push(`/artikelen/${slug}`)
  })

  // Combine timeline

  const timeline = [
    ...contents.clients.map(item => { return { type: 'client', date: item.date, item: item } }),
    ...contents.quotes.map(item => { return { type: 'quote', date: item.date, item: item } }),
    ...contents.artikelen.map(item => { return { type: 'artikel', date: item.date, item: item } }),
    ...contents.updates.map(item => { return { type: 'update', date: item.date, item: item } })
  ]

  timeline.sort((a, b) => {
    if (a.date < b.date) return 1
    if (a.date > b.date) return -1

    return 0
  })

  contents.timeline = timeline

  return contents
}

const contents = getContents()

const updateDate = new Date()
const dateUpdate = [updateDate.getFullYear(), updateDate.getMonth() - 1, updateDate.getDate()]

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Melle Wynia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      // TODO: add lazy loading
      { rel: 'stylesheet', href: '/css/icons/icons-web.css' }, // , as: 'style'
      { rel: 'stylesheet', href: '/css/fonts/raleway.css' } //, as: 'style'
    ]
  },
  /**
   * Generate all routes
   */
  generate: {
    routes: [
      ...contents.routes
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3874ff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },
  /**
   *
   */
  env: {
    dateUpdate,
    contents
  },
  /**
   * Modules
   */
  modules: [
    // https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit'
  ],
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // TODO: take a look at 'markdown-it-container',
      // TODO: take a look at 'markdown-it-attrs'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.md$/,
        loader: 'front-matter-loader'
      }
    ]
  }
}
