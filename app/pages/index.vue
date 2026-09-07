<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  titleTemplate: '%s',
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogImage: 'og_cl.png'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://clopezpro.com'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['Person', 'ProfessionalService'],
            '@id': 'https://clopezpro.com/#person',
            'name': 'Christian López',
            'taxID': '0931048003001',
            'identifier': '0931048003001',
            'url': 'https://clopezpro.com',
            'jobTitle': 'Desarrollador de Sistemas y Proveedor Autorizado SRI',
            'description': 'Desarrollador de sistemas empresariales, software contable y facturación electrónica en Ecuador bajo el RUC 0931048003001 según resolución No. NAC-DGERCGC26-00000027. Desarrollador y titular del sistema Facturador.',
            'knowsAbout': [
              'Desarrollo de Sistemas Empresariales',
              'Sistemas ERP y Software Contable',
              'Facturación Electrónica SRI Ecuador',
              'Servicios Web SRI',
              'Resolución No. NAC-DGERCGC26-00000027',
              'RUC 0931048003001',
              'Arquitectura de Software Nuxt y TypeScript',
              'Firma Electrónica XAdES-BES'
            ]
          },
          {
            '@type': 'SoftwareApplication',
            '@id': 'https://facturador.clopezpro.com/#software',
            'name': 'Facturador',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'url': 'https://facturador.clopezpro.com',
            'offers': {
              '@type': 'Offer',
              'seller': {
                '@id': 'https://clopezpro.com/#person'
              },
              'description': 'Licencias de software para emisión de facturación electrónica directa y gestión contable autorizada ante el SRI.'
            }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(24px)' }"
      :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      :inViewOptions="{ once: true }"
    >
      <LandingAbout :page />
    </Motion>

    <Motion
      v-if="page.provider"
      :initial="{ opacity: 0, transform: 'translateY(24px)' }"
      :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      :inViewOptions="{ once: true }"
    >
      <LandingProviderSection :provider="page.provider" />
    </Motion>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(24px)' }"
      :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      :inViewOptions="{ once: true }"
    >
      <LandingProjectsCarousel />
    </Motion>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(24px)' }"
      :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      :inViewOptions="{ once: true }"
    >
      <LandingBlog :page />
    </Motion>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(24px)' }"
      :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      :inViewOptions="{ once: true }"
    >
      <LandingTestimonials :page />
    </Motion>
  </UPage>
</template>
