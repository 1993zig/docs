module.exports = {
    // site config
    lang: 'en-US',
    title: 'DocNiks',
    description: 'Projects und documentation',
    dest: 'public',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'linux.png',
      repo: 'https://github.dev/nigl93/docs',
      docsBranch: 'main',
      docsDir: '/docs',
      editLinkPattern: ':repo/-/edit/:branch/:path',
      editLink: true,
      navbar: [
        {
          text: 'reference',
          link: '/docs.md',
        },
        {
          text: 'Linux',
          children: [
            {
              text: 'Index',
              link: '/Linux/README.md'
            },
            {
              text: 'Spiegel',
              link: '/Linux/mirrors/README.md'
            },
          ],
        },
        {
          text: 'setups',
          link: '/setups/README.md',
        },
        {
          text: 'HowTos',
          link: '/howto/README.md',
        },
        {
          text: 'GitLab',
          link: '/gitlab/README.md',
        },
      ],
    },
    plugins: [
      ['@vuepress/plugin-shiki', { theme: "github-dark" }],
      ['@vuepress/plugin-search', {
        // exclude homepage
        isSearchable: (page) => page.path !== '/',
        // add tags to search index
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      }]
    ]
  }