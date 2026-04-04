import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/',
  title: "Siesorina の博客",
  description: "各种网站与学习资料、心得的整合",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习规划', link: '/guide/intro' },
      { text: '日常记录', link: '/diary/index' },
    ],
    sidebar: [
      {
        text: '学习规划',
        items: [
          { text: '前言', link: '/guide/intro' },
          { text: '数学基础', link: '/guide/math' },
          { text: '编程入门', link: '/guide/programming' },
          { text: '电子基础', link: '/guide/electronics' },
        ]
      },
      {
        text: '日常记录',
        items: [
          { text: '2026年4月', link: '/diary/2026-04' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Siesorina' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Made with ❤️ by Siesorina',
    }
  }
})