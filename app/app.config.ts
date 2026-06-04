export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://clopezpro.com/light-profile.png',
      light: 'https://clopezpro.com/dark-profile.png',
      alt: 'Christian Lopez Perfil'
    },
    meetingLink: 'https://cal.com/clopezpro',
    email: 'clopezpro@outlook.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Con Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/users/736446207446089748',
      'target': '_blank',
      'aria-label': 'Christian Lopez en Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/dev_clopez',
      'target': '_blank',
      'aria-label': 'Christian Lopez en X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/clopezpro',
      'target': '_blank',
      'aria-label': 'Christian Lopez en GitHub'
    }]
  }
})
