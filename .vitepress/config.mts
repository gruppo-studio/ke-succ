import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Ke succ?",
  description: "Che succede in questi giorni a Como? Un catalogo curato dei momenti di incontro e formazione, a volte sconosciuti, a cui si può partecipare nella nostra città.",
  cleanUrls: true,
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
          { text: '🎬 Cinema', link: '/cinema' },
          { text: '🎭 Teatro e spettacoli', link: '/spettacoli' },
          { text: '🎵 Musica', link: '/musica' },
          { text: '📚 Biblioteche / librerie', link: '/leggere' },
          { text: '📖 Aule studio', link: '/territorio' },
          { text: '🍸 Bar / disco', link: '/uscire' },
          { text: '🏖️ Spiagge', link: '/spiagge' },
          { text: '⛰️ Montagna / natura', link: '/territorio' },
          { text: '🗣️ Assemblee politiche', link: '/territorio' },
        ]
      },
      {
        text: 'Altri strumenti',
        collapsed: false,
        items: [
          { text: '📰 Giornali / Informazione', link: '/cinema' }
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
