export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621621dba8d04b25862b5e5c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-956x5t6o',
                  apiId: '36b968b0-2cdc-48b4-8050-1bcde1d4cd8d'
                },
                {
                  buildHookId: '621621db13478a26ea9f43b0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bu96s26k',
                  apiId: '1a819d73-5d25-49b3-b058-1deda0ec6307'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mahmoudelgamal/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bu96s26k.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
