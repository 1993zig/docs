module.exports = {
  // site config
  base: '/github-pages-vuepress/',
  lang: 'en-US',
  title: 'DocNiks',
  description: 'Projects und documentation',
  dest: './docs',

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
      }
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