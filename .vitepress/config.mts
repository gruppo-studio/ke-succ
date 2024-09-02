import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Ke succ?",
  description: "Che succede in questi giorni a Como? Un catalogo curato dei momenti di incontro e formazione, a volte sconosciuti, a cui si può partecipare nella nostra città.",
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  lang: 'it-IT',
  markdown: {
    container: {
      tipLabel: 'Consiglio',
      warningLabel: 'Attenzione',
      dangerLabel: 'Pericolo',
      infoLabel: 'Informazioni',
      detailsLabel: 'Dettagli'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Aggiunti:
    logo: '/favicon.ico',


    docFooter: {
      prev: 'Pagina precedente',
      next: 'Pagina successiva'
    },

    lastUpdated: {
      text: 'Ultimo aggiornamento:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // PS per vederlo, bisogna committare prima! (visibile solo una volta deployed)
    
    search: {
      provider: 'local'
    },
    
    outline: {
      level: [2, 4],  // Include headings from <h2> to <h4>
      label: 'Indice della pagina'
    },

    // Default di vitepress:

    nav: [
      { text: 'Feste', link: '/feste' },
      { text: 'Incontri e dibattiti', link: '/incontri' },
      { text: 'Film, teatro e spettacoli', link: '/spettacoli' }
    ],

    sidebar: [
      {
        text: 'Che succede?',
        collapsed: false,
        items: [
          { text: 'Feste', link: '/feste' },
          { text: 'Incontri e dibattiti', link: '/incontri' },
          { text: 'Film, teatro e spettacoli', link: '/spettacoli' }
        ]
      },
      {
        text: 'Avevo voglia di...',
        collapsed: false,
        items: [
          { text: '🎬 Cinema', link: '/schede/cinema' },
          { text: '🎭 Teatro e spettacoli', link: '/schede/teatro' },
          { text: '🎵 Musica', link: '/schede/musica' },
          { text: '📚 Biblioteche / librerie', link: '/schede/leggere' },
          { text: '📖 Aule studio', link: '/schede/studiare' },
          { text: '🍸 Bar / disco', link: '/schede/uscire' },
          { text: '🏖️ Spiagge', link: '/schede/spiagge' },
          { text: '⛰️ Montagna / natura', link: '/schede/territorio' },
          { text: '🗣️ Assemblee politiche', link: '/schede/politica' },
        ]
      },
      {
        text: 'Altri strumenti',
        collapsed: false,
        items: [
          { text: '📰 Giornali / Informazione', link: 'schede/giornali' }
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
