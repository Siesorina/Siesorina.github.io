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
      { text: '兴趣爱好', link: '/hobby/index' },
    ],
    sidebar: [
      {
        text: '学习规划',
        items: [
          { text: '前言', link: '/guide/intro' },
          {
            text: '数学基础',
            collapsed: false,   // true 则默认折叠
            items: [
              { text: 'Mathematics 总览', link: '/guide/math/index' },
              { text: '微积分', link: '/guide/math/calculus' },
              { text: '线性代数', link: '/guide/math/linear_algebra' },
              { text: '离散数学', link: '/guide/math/discrete_mathematics' },
            ]
          },
          { text: '编程入门', link: '/guide/programming' },
          { text: '电子基础', link: '/guide/electronics' },
        ]
      },
      // ...日常记录部分不变
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