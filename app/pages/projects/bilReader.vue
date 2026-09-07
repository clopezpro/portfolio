<script setup lang="ts">
definePageMeta({
  alias: ['/projects/bilreader']
})

const destinationUrl = 'https://sxv.clopezpro.com/'
const countdown = ref(4)
let timer: ReturnType<typeof setInterval> | null = null

useSeoMeta({
  title: 'Página Reubicada | SRI XML Viewer',
  description: 'Esta herramienta fue movida a su nuevo enlace oficial https://sxv.clopezpro.com/',
  robots: 'noindex, follow'
})

useHead({
  meta: [
    {
      'http-equiv': 'refresh',
      'content': `4;url=${destinationUrl}`
    }
  ]
})

onMounted(() => {
  timer = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
    } else {
      if (timer) {
        clearInterval(timer)
      }
      navigateTo(destinationUrl, { external: true })
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <UPage>
    <div class="py-16 sm:py-24 flex flex-col items-center justify-center text-center">
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(16px)' }"
        :animate="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
        class="w-full max-w-xl"
      >
        <UCard
          class="ring-1 ring-default/20 bg-default/5 shadow-lg p-2"
          :ui="{
            body: 'p-6 sm:p-8 flex flex-col items-center gap-5'
          }"
        >
          <div class="p-3 rounded-full bg-primary/10 text-primary">
            <UIcon
              name="i-lucide-external-link"
              class="size-8"
            />
          </div>

          <div class="space-y-2">
            <UBadge
              color="primary"
              variant="subtle"
              size="sm"
            >
              Página Reubicada
            </UBadge>
            <h1 class="text-xl sm:text-2xl font-bold text-highlighted">
              El Lector de Comprobantes SRI fue movido a un nuevo enlace
            </h1>
            <p class="text-sm text-muted leading-relaxed max-w-md mx-auto">
              Esta aplicación ahora cuenta con su propio dominio oficial, interfaz renovada y mejoras continuas en
              <span class="font-semibold text-highlighted">sxv.clopezpro.com</span>.
            </p>
          </div>

          <div class="flex items-center gap-2 text-xs text-muted font-medium py-1 px-3 rounded-full bg-elevated">
            <UIcon
              name="i-lucide-refresh-cw"
              class="size-3.5 animate-spin text-primary"
            />
            <span>Redirigiendo automáticamente en {{ countdown }} segundos...</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3 w-full justify-center pt-2">
            <UButton
              :to="destinationUrl"
              target="_self"
              color="primary"
              size="lg"
              label="Ir al nuevo enlace ahora"
              icon="i-lucide-arrow-right"
              trailing
              class="w-full sm:w-auto"
            />
            <UButton
              to="/projects"
              variant="ghost"
              color="neutral"
              size="lg"
              label="Ver otros proyectos"
              class="w-full sm:w-auto"
            />
          </div>
        </UCard>
      </Motion>
    </div>
  </UPage>
</template>
