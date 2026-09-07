<script setup lang="ts">
const { data: projects } = await useAsyncData('landing-projects-carousel', () =>
  queryCollection('projects').all()
)
</script>

<template>
  <UPageSection
    v-if="projects && projects.length"
    :ui="{
      container: 'py-12 sm:py-16'
    }"
  >
    <template #headline>
      <UBadge
        color="neutral"
        variant="subtle"
        size="lg"
        class="gap-1.5 font-medium px-3 py-1"
      >
        <UIcon
          name="i-lucide-layout-grid"
          class="size-4"
        />
        Portafolio de Sistemas y Proyectos
      </UBadge>
    </template>

    <template #title>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-highlighted max-w-3xl mx-auto text-center">
        Sistemas y Soluciones en Producción
      </h2>
    </template>

    <template #description>
      <p class="text-muted text-center max-w-2xl mx-auto mt-2 text-sm sm:text-base">
        Plataformas web empresariales, herramientas de integración fiscal con el SRI y software desarrollado a medida.
      </p>
    </template>

    <div class="relative mt-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
      <UMarquee
        pauseOnHover
        class="py-4 [--duration:45s]"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="mx-3 w-72 sm:w-84 shrink-0 group"
        >
          <UCard
            class="h-full ring-1 ring-default/15 hover:ring-primary/40 transition-all duration-300 bg-default/5 hover:bg-default/10 overflow-hidden flex flex-col"
            :ui="{
              body: 'p-0 flex flex-col h-full'
            }"
          >
            <div class="relative overflow-hidden aspect-video bg-default/10">
              <img
                :src="project.image"
                :alt="`Captura del sistema ${project.title}`"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              >
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between gap-3">
              <div>
                <h3 class="font-bold text-base text-highlighted group-hover:text-primary transition-colors line-clamp-1">
                  {{ project.title }}
                </h3>
                <p class="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-default/10">
                <div class="flex flex-wrap gap-1">
                  <UBadge
                    v-for="tag in project.tags.slice(0, 2)"
                    :key="tag"
                    size="xs"
                    color="neutral"
                    variant="soft"
                  >
                    {{ tag }}
                  </UBadge>
                </div>

                <ULink
                  :to="project.url"
                  target="_blank"
                  class="text-xs font-medium text-primary flex items-center gap-1 hover:underline"
                >
                  Ver sistema
                  <UIcon
                    name="i-lucide-external-link"
                    class="size-3.5"
                  />
                </ULink>
              </div>
            </div>
          </UCard>
        </div>
      </UMarquee>
    </div>

    <div class="mt-8 flex justify-center">
      <UButton
        to="/projects"
        color="neutral"
        variant="subtle"
        size="md"
        label="Ver catálogo completo de proyectos"
        icon="i-lucide-arrow-right"
        trailing
      />
    </div>
  </UPageSection>
</template>
