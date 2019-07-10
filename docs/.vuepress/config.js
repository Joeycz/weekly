const {readFileList, readOldBlogs} = require('../../scripts/build.js');

module.exports = {
  title: "每周记录SEE",
  description: "每周记录SEE",
  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '每周记录SEE' }]
  ],
  ga: 'UA-138562707-1',
  plugins: [
    ['@vuepress/google-analytics'],
    ['vuepress-plugin-rss-support', {
      site_url: 'https://joeycz.github.io/weekly',
      filter: page => /^\/201.+/.test(page.path),
      copyright: '每周记录SEE',
      count: 60
    }]
  ],
  base: '/weekly/',
  themeConfig: {
    repo: "joeycz/see",
    nav: [
      { text: 'Issues', link: 'https://github.com/Joeycz/weekly/issues' },
      // { text: '实验室', link: '/lab/' },
    ],
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    algolia: {
      apiKey: '98c2ed99c477c687cdeb6a5652ea3609',
      appId: 'IZ00C6K004',
      indexName: 'weekly',
      algoliaOptions: {
        hitsPerPage: 10,
      },
    },
    sidebar: [
      ["/", "介绍"],
      {
        title: "2019 年 07 月",
        collapsable: false,
        children: readFileList('2019', '07')
      },
      {
        title: "2019 年 06 月",
        collapsable: false,
        children: readFileList('2019', '06')
      },
      {
        title: "2019 年 05 月",
        collapsable: false,
        children: readFileList('2019', '05')
      },
      {
        title: "2019 年 04 月",
        collapsable: false,
        children: readFileList('2019', '04')
      },
      {
        title: "2019 年 03 月",
        collapsable: false,
        children: readFileList('2019', '03')
      },
      {
        title: "2019 年 02 月",
        collapsable: true,
        children: readFileList('2019', '02')
      },
      {
        title: "更早",
        collapsable: true,
        children: readOldBlogs()
      }
    ],
  }
};
