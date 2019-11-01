const {readFileList, readOldBlogs, getAllIssueDocs} = require('../../scripts/build.js');

module.exports = {
  title: "每周记录SEE",
  description: "每周记录SEE",
  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '每周记录SEE' }]
  ],
  ga: 'UA-138562707-1',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/google-analytics', {
      ga: 'UA-138562707-1'
    }],
    ['vuepress-plugin-rss-support', {
      site_url: 'https://joeycz.github.io/weekly',
      filter: page => /^\/201.+/.test(page.path),
      copyright: '每周记录SEE',
      count: 60
    }]
  ],
  base: '/weekly/',
  themeConfig: {
    repo: "joeycz/weekly",
    nav: [
      { text: '留言', link: 'https://github.com/Joeycz/weekly/issues' },
      { text: 'RSS订阅', link: 'https://joeycz.github.io/weekly/rss.xml' },
      // { text: '实验室', link: '/lab/' },
    ],
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    algolia: {
      apiKey: '05e7de50f2b8907c01130a41131bfd87',
      appId: 'DK2B0KFH2N',
      indexName: 'weekly',
      debug: false,
      algoliaOptions: {
        facetFilters: ''
      }
    },
    sidebar: [
      ["/", "介绍"],
      {
        title: "2019 年 11 月",
        collapsable: false,
        children: readFileList('2019', '11')
      },
      {
        title: "2019 年 10 月",
        collapsable: false,
        children: readFileList('2019', '10')
      },
      {
        title: "2019 年 09 月",
        collapsable: false,
        children: readFileList('2019', '09')
      },
      {
        title: "2019 年 08 月",
        collapsable: false,
        children: readFileList('2019', '08')
      },
      {
        title: "2019 年 07 月",
        collapsable: false,
        children: readFileList('2019', '07')
      },
      {
        title: "2019 年 06 月",
        collapsable: true,
        children: readFileList('2019', '06')
      },
      {
        title: "2019 年 05 月",
        collapsable: true,
        children: readFileList('2019', '05')
      },
      {
        title: "2019 年 04 月",
        collapsable: true,
        children: readFileList('2019', '04')
      },
      {
        title: "2019 年 03 月",
        collapsable: true,
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
