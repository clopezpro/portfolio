---
title: "Cómo llegué a Nuxt: mi viaje del jQuery clásico al desarrollo web moderno"
description: "Una reflexión personal sobre mi transición en el desarrollo web: desde mis inicios autodidactas con jQuery y Bootstrap, pasando por las frustraciones universitarias, hasta la adopción de Vue y Nuxt como mi stack definitivo."
date: 2026-06-09
image: /hero/nuxt-journey-banner.png
minRead: 6
author:
  name: Christian Lopez
  avatar:
    src: https://clopezpro.imgix.net/porfolio/autor/christian-lopez.png/Gemini_Generated_Image_ko366rko366rko36.png?w=1792&h=1959&fm=avif&rect=0%2C175%2C1792%2C1959&s=d46e24aedfcf2ef0f1637aff8ef5c881
    alt: Christian Lopez
---

El desarrollo web actual avanza a un ritmo vertiginoso. Hoy en día damos por sentadas herramientas como la reactividad reactiva, el renderizado del lado del servidor (SSR), el enrutamiento automático y el empaquetado ultra veloz de módulos. Pero llegar a este ecosistema moderno ha sido un largo viaje de aprendizaje, tropiezos y evolución constante. 

Esta es la historia de cómo empecé maquetando sitios web simples con **jQuery** y **Bootstrap**, sobreviví al desencanto de la educación universitaria tradicional, y finalmente descubrí en **Vue** y **Nuxt** mi stack de desarrollo definitivo.

---

## Los primeros pasos: la emoción de maquetar y la ignorancia de los servidores

Cuando di mis primeros pasos en el desarrollo web, todo era fascinación pura. Quería aprender a programar para internet, pero en ese momento no entendía absolutamente nada sobre servidores, despliegues o bases de datos relacionales. Mi único gran sueño era escribir código, registrar un dominio público propio y ver mi sitio web al aire disponible para cualquiera en el mundo.

En esa etapa inicial de autoaprendizaje, encontré un faro en YouTube: el canal de **Jon Mircha**. Sus explicaciones sobre cómo usar **Bootstrap** y cómo maquetar una web me abrieron los ojos. Gracias a él, aprendí a estructurar mis primeros layouts y a utilizar **jQuery** para añadir interactividad a mis páginas (como abrir modales, animar elementos y validar formularios sencillos). 

Ver que al hacer clic en un botón ocurría una acción visual programada por mí era una sensación adictiva. Sin embargo, aún me faltaba chocarme con la realidad de las aplicaciones web empresariales.

---

## El abismo universitario: Java, GlassFish y voces robóticas

Decidí estudiar en la universidad para profesionalizar mi camino. Mi carrera estaba fuertemente orientada a las redes y las telecomunicaciones (**Networking**), pero mi pasión seguía inclinándose hacia el desarrollo de software. Tenía un enorme entusiasmo por aprender más.

Lamentablemente, el choque con la academia local fue frustrante. En las materias de programación nos enseñaban cosas sumamente complejas y, honestamente, obsoletas para la realidad laboral diaria. La metodología consistía en programar aplicaciones en **Java** utilizando el servidor de aplicaciones **GlassFish**. 

El proceso de enseñanza de algunos docentes consistía en enviarnos enlaces de YouTube con videotutoriales grabados con voces robóticas (generadas por loquendo o lectores de texto artificiales) donde no se entendía absolutamente nada del porqué de las cosas. Era copiar código sin entender la lógica de fondo de la arquitectura corporativa. En lugar de inspirar al estudiante, aquello apagaba la curiosidad.

Pronto comprendí que la universidad me daría el título, pero la única forma real de aprender a desarrollar software de verdad era entrando al mercado laboral. Tenía que conseguir un puesto como desarrollador junior.

---

## El bautismo de fuego en Code Plus y los límites de jQuery

Tuve la oportunidad de ingresar a la empresa actualmente conocida como **Code Plus**. Allí me asignaron a un proyecto de gran envergadura llamado **Educat**.

*Educat* era un sistema de gestión escolar diseñado para administrar notas, insumos y asistencia estudiantil; básicamente, querían construir un competidor sólido para plataformas establecidas como *Idukay*. El stack tecnológico del proyecto era el clásico de esa época: **PHP**, **MySQL** y **jQuery** en el frontend.

Al principio, el stack funcionó muy bien. Para módulos pequeños y funcionalidades directas, jQuery es una herramienta excelente por su sencillez para manipular el DOM. Sin embargo, a medida que *Educat* comenzó a crecer y a incorporar complejas pantallas de entrada de notas multidimensionales, la arquitectura empezó a desmoronarse:

* **Spaghetti de código:** La manipulación manual del DOM hacía que las interacciones dependieran del estado de las clases HTML.
* **Mantenimiento imposible:** Modificar un botón en una vista implicaba reescribir selectores jQuery en varios archivos JavaScript aislados.
* **Problemas de sincronización:** Mantener sincronizados los datos en memoria con los elementos visuales de la interfaz se convirtió en una pesadilla.

Me di cuenta de que jQuery no era escalable para proyectos de gran escala. Necesitaba otra forma de trabajar.

```javascript
// La antigua forma con jQuery: manipulación manual del DOM y selectores propensos a errores
$('#btn-save').on('click', function() {
  var name = $('#input-name').val();
  if (!name) {
    $('#error').text('El campo es requerido').show();
  } else {
    $('#error').hide();
    $.post('/api/student', { name: name }, function(data) {
      $('#student-list').append('<li data-id="' + data.id + '">' + data.name + '</li>');
      $('#input-name').val('');
    });
  }
});
```

---

## El descubrimiento de Vue.js y la revolución de Escuela Vue

Un día, durante una transmisión en vivo que realizaba Jon Mircha, decidí comentar y preguntar sobre alternativas modernas para desarrollo frontend, mencionando mi interés por **Vue**. Jon Mircha leyó mi comentario y me recomendó ampliamente: *"Te sugiero revisar el contenido de Juan Andrés Núñez, en el canal de JuanWmedia (Escuela Vue)"*.

Seguí su consejo de inmediato. Me devoré cada uno de los videos gratuitos de su canal y decidí inscribirme en sus programas máster de **Escuela Vue**. 

El cambio en mi mentalidad de desarrollo fue instantáneo. La filosofía de Vue —basada en componentes reactivos de un solo archivo (Single File Components), en el enlace bidireccional de datos (two-way data binding) y en la separación limpia de la interfaz y la lógica— me pareció una genialidad absoluta. 

Entendí los conceptos de reactividad a la primera. En ese momento, no pude evitar desear que mis profesores de la universidad hubieran tenido esa misma claridad y pasión para enseñar. Desde ese día, decidí que usaría Vue para prácticamente todo.

```vue
<!-- La nueva forma declarativa con Vue (Composition API) -->
<script setup>
const name = ref('')
const error = ref('')
const students = ref([])

async function addStudent() {
  if (!name.value) return error.value = 'El campo es requerido'
  error.value = ''
  
  const response = await $fetch('/api/student', { method: 'POST', body: { name: name.value } })
  students.value.push(response)
  name.value = ''
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="Nombre del estudiante">
    <p v-if="error" class="error">{{ error }}</p>
    <button @click="addStudent">Guardar</button>
    <ul>
      <li v-for="student in students" :key="student.id">{{ student.name }}</li>
    </ul>
  </div>
</template>
```

---

## La cima del flujo de trabajo: por qué uso Nuxt

De trabajar con Vue puro (que requiere configurar manualmente Vue Router, librerías de estado, empaquetadores como Vite o Webpack, y configurar el SEO a mano), el salto natural fue descubrir **Nuxt**.

Nuxt resolvió de golpe todas las fricciones de configuración inicial de un proyecto. Se ha convertido en mi framework por excelencia para el desarrollo de aplicaciones web de producción por razones clave:

1. **Todo Integrado:** Viene con enrutamiento basado en archivos de forma nativa. Creas una vista en `pages/index.vue` y Nuxt genera la ruta automáticamente sin que tengas que tocar un archivo de configuración de rutas.
2. **Auto-imports inteligentes:** No necesitas importar `ref`, `computed`, o tus propios componentes en cada archivo. Nuxt los detecta y los importa bajo el capó, manteniendo el código limpio y libre de imports innecesarios.
3. **Múltiples Modos de Renderizado:** Permite hacer aplicaciones con renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) o Single Page Applications (SPA) tradicionales con solo configurar una línea en el archivo de configuración.
4. **Ecosistema Premium:** La suite de herramientas oficiales como **Nuxt UI** (para componentes estéticos y consistentes), **Nuxt Image** (para optimizar imágenes al vuelo) y **Nuxt Content** (para crear blogs y documentación a partir de Markdown) me permiten crear aplicaciones robustas y sumamente profesionales en una fracción del tiempo que me tomaría con otras tecnologías.

---

## Conclusión: la evolución como desarrollador

Mirar hacia atrás me hace valorar cada etapa. jQuery fue la base que me enseñó el valor de interactuar con el DOM; el desarrollo clásico en PHP me dio la lógica de backend; y las malas experiencias universitarias me impulsaron a ser autodidacta y exigente con los recursos educativos que consumo.

Hoy, gracias a la combinación de Vue y Nuxt, no solo desarrollo mucho más rápido, sino que disfruto de un flujo de trabajo ordenado, escalable y moderno. La web emocionante que Jon Mircha me inspiró a crear en mis inicios es ahora una realidad cotidiana mucho más potente de lo que jamás imaginé.
