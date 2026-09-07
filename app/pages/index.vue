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
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogImage: 'og_cl.png'
})

useHead({
  meta: [
    {
      name: 'keywords',
      content: '0931048003, 0931048003001, Christian Lopez, Facturador, Facturación Electrónica Ecuador, Proveedor SRI, NAC-DGERCGC26-00000027, software contable Ecuador, licencias Facturador'
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
            'jobTitle': 'Desarrollador de Software y Proveedor Autorizado de Facturación Electrónica SRI',
            'description': 'Proveedor autorizado de software de facturación electrónica en Ecuador bajo el RUC 0931048003001 según resolución No. NAC-DGERCGC26-00000027. Desarrollador y titular del sistema Facturador.',
            'knowsAbout': [
              'Facturación Electrónica Ecuador',
              'Servicios Web SRI',
              'Resolución No. NAC-DGERCGC26-00000027',
              'Software Contable',
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
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingProviderSection
      v-if="page.provider"
      :provider="page.provider"
    />
    <LandingBlog :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
