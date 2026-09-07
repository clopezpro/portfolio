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
    </template>

    <template #title>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-highlighted max-w-3xl mx-auto text-center">
        {{ provider.title }}
      </h2>
    </template>

    <template #description>
      <p class="text-muted text-center max-w-2xl mx-auto mt-2 text-sm sm:text-base">
        {{ provider.description }}
      </p>
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
        </UCard>
      </div>
    </div>
  </UPageSection>
</template>
