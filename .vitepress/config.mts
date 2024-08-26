import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Ke succ?",
  description: "Che succede in questi giorni a Como? Un catalogo curato dei momenti di incontro e formazione, a volte sconosciuti, a cui si può partecipare nella nostra città.",
  cleanUrls: true,
  lastUpdated: true,
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
    // PS per vederlo, bisogna committare prima!
    
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
        items: [
          { text: 'Feste', link: '/feste' },
          { text: 'Incontri e dibattiti', link: '/incontri' },
          { text: 'Film, teatro e spettacoli', link: '/spettacoli' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
