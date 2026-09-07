<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  provider: NonNullable<IndexCollectionItem['provider']>
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'py-12 sm:py-16'
    }"
  >
    <template #headline>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
        :inViewOptions="{ once: true }"
      >
        <UBadge
          color="primary"
          variant="subtle"
          size="lg"
          class="gap-1.5 font-medium px-3 py-1"
        >
          <UIcon
            name="i-lucide-shield-check"
            class="size-4"
          />
          {{ provider.badge || 'Acreditación Oficial SRI' }}
        </UBadge>
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 }"
        :inViewOptions="{ once: true }"
      >
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-highlighted max-w-3xl mx-auto text-center">
          {{ provider.title }}
        </h2>
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :whileInView="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 }"
        :inViewOptions="{ once: true }"
      >
        <p class="text-muted text-center max-w-2xl mx-auto mt-2 text-sm sm:text-base">
          {{ provider.description }}
        </p>
      </Motion>
    </template>

    <div class="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <!-- Tarjeta de Especificación Fiscal y Legal -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        <UCard
          class="ring-1 ring-default/15 bg-default/5 shadow-xs"
          :ui="{
            body: 'p-5 sm:p-6 space-y-4'
          }"
        >
          <div class="flex items-center gap-3 border-b border-default/10 pb-3">
            <div class="p-2 rounded-lg bg-primary/10 text-primary">
              <UIcon
                name="i-lucide-file-badge-2"
                class="size-6"
              />
            </div>
            <div>
              <p class="text-xs text-muted uppercase font-semibold tracking-wider">
                Registro Tributario Oficial
              </p>
              <p class="text-base font-bold text-highlighted">
                RUC: {{ provider.ruc }}
              </p>
            </div>
          </div>

          <div class="space-y-3 text-sm">
            <div>
              <span class="text-muted block text-xs">Resolución del SRI:</span>
              <span class="font-medium text-highlighted">{{ provider.resolution }}</span>
            </div>

            <div>
              <span class="text-muted block text-xs">Actividad Autorizada:</span>
              <span class="text-highlighted text-xs leading-relaxed">{{ provider.activity }}</span>
            </div>

            <div>
              <span class="text-muted block text-xs">Vigencia Operativa:</span>
              <span class="font-medium text-highlighted">{{ provider.date }}</span>
            </div>
          </div>

          <div class="pt-2 border-t border-default/10">
            <p class="text-xs text-muted flex items-center gap-1.5">
              <UIcon
                name="i-lucide-check-circle-2"
                class="size-4 text-primary shrink-0"
              />
              Validez tributaria verificable ante los sistemas del SRI Ecuador.
            </p>
          </div>
        </UCard>
      </div>

      <!-- Vitrina del Sistema Facturador -->
      <div class="lg:col-span-7 flex flex-col gap-4">
        <UCard
          class="ring-1 ring-default/20 bg-default/5"
          :ui="{
            body: 'p-6 sm:p-7 space-y-5'
          }"
        >
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p class="text-xs text-primary font-semibold tracking-wide uppercase">
                Software Desarrollado y Certificado
              </p>
              <h3 class="text-xl sm:text-2xl font-bold text-highlighted">
                {{ provider.systemName }}
              </h3>
            </div>
            <UBadge
              color="success"
              variant="subtle"
              size="sm"
            >
              100% Autoría Propia • Sin Intermediarios
            </UBadge>
          </div>

          <!-- Puntos de Confianza Antifraude -->
          <ul
            v-if="provider.trustPoints"
            class="space-y-2.5 text-sm"
          >
            <li
              v-for="(point, idx) in provider.trustPoints"
              :key="idx"
              class="flex items-start gap-2 text-muted"
            >
              <UIcon
                name="i-lucide-check"
                class="size-4 text-primary shrink-0 mt-0.5"
              />
              <span>{{ point }}</span>
            </li>
          </ul>

          <!-- Imagen / Preview si existe -->
          <div
            v-if="provider.systemImage"
            class="overflow-hidden rounded-lg ring-1 ring-default/15"
          >
            <img
              :src="provider.systemImage"
              :alt="`Interfaz del sistema ${provider.systemName}`"
              class="w-full h-44 sm:h-52 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
            >
          </div>

          <!-- Botones de Conversión y Contacto Directo -->
          <div
            v-if="provider.ctaLinks"
            class="pt-2 flex flex-wrap items-center gap-3"
          >
            <UButton
              v-for="(btn, bIdx) in provider.ctaLinks"
              :key="bIdx"
              v-bind="btn"
              size="md"
            />
          </div>
        </UCard>
      </div>
    </div>
  </UPageSection>
</template>
