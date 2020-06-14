module.exports = {
  title: 'Hashtag Documentation',
  description: 'Just playing around',
  theme: '@vuepress/theme-default',
  dest: 'docs/dist',
  temp: 'docs/tmp',
  themeConfig: {
    logo: '/assets/img/logo.svg',
    smoothScroll: true,
    repo: 'hashtag-protocol/hashtag-protocol',
    editLinks: true,
    docsDir: 'hashtag-docs/docs',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'faqs',
      ]
    },
    sidebarDepth: 2,
  }
}