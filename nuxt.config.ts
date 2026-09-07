// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/sitemap'
  ],
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://clopezpro.com',
    name: 'Christian López | Desarrollador de Sistemas y Proveedor Autorizado SRI'
  },
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  devServer: {
    port: 4008,
    host: '0.0.0.0' // Allows access from other devices on the network
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  ogImage: {
    zeroRuntime: true
  },
  sitemap: {
    zeroRuntime: true
  }
})
