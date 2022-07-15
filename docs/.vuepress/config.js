const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'DocNiks',
  description: 'detailed information',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],

  // theme and its config
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/einsatzbereit/docs',
    docsBranch: 'master',
    docsDir: '/docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLink: true,
    navbar: [
      { text: 'Home', link: '/', },
      {
        text: 'Dobby',
        children: [
          {
            text: 'Info',
            link: '/dobby/README.md',
            activeMatch: '/dobby/README*',
          },
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
        text: 'RedBot',
        children: [
          {
            text: 'Info',
            link: '/redbot/README.md',
            activeMatch: '/redbot/README.*',
          },
          {
            text: 'Cogs',
            link: '/redbot/cogs.md',
            activeMatch: '/redbot/cogs*',
          },
        ],
      },
      {
        text: 'DevOps',
        children: [
          {
            text: 'GitHub',
            link: '/devops/github.md',
            activeMatch: '/devops/github*',
          }
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
    docsearchPlugin({
      // options
    }),
  ],
}
