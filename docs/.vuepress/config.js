const { searchPlugin } = require('@vuepress/plugin-search')
const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Documentation',
  description: 'detailed information',

  // theme and its config
  theme: defaultTheme({
    logo: 'logo.png',
    repo: 'https://github.com/einsatzbereit/docs',
    docsBranch: 'main',
    docsDir: '/docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    editLink: true,
    navbar: [
      { text: 'Home', link: '/', },
      { text: 'Reference', link: '/docs.md', },
      {
        text: 'Dobby',
        children: [
          {
            text: 'Commands',
            link: '/dobby/commands.md',
            activeMatch: '/dobby/commands*',
          },
          {
            text: 'Privacy',
            link: '/dobby/privacy.md',
            activeMatch: '/dobby/privacy*',
          },
        ],
      },
      {
        text: 'Linux',
        children: [
          {
            text: 'Commands',
            link: '/linux/commands.md',
            activeMatch: '/linux/commands*',
          },
          {
            text: 'Docker',
            link: '/linux/docker.md',
            activeMatch: '/linux/docker*',
          },
          {
            text: 'Maintenance',
            link: '/linux/maintenance.md',
            activeMatch: '/linux/maintenance*',
          },
          {
            text: 'Server',
            link: '/linux/server.md',
            activeMatch: '/linux/server*',
          },
        ],
      },
      {
        text: 'Windows',
        children: [
          {
            text: 'Commands',
            link: '/windows/commands.md',
            activeMatch: '/windows/commands*',
          },
          {
            text: 'Tools',
            link: '/windows/tools.md',
            activeMatch: '/windows/tools*',
          },
        ],
      },
    ],
  },
  ),
  plugins: [
    shikiPlugin({ theme: 'github-dark' }),
    searchPlugin({
      // exclude homepage
      isSearchable: (page) => page.path !== '/',
    }
    ),
  ],
}
