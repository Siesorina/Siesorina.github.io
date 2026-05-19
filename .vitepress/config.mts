import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "Siesorina の博客",
  description: "各种网站与学习资料、心得的整合",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习规划', link: '/guide/intro' },
      { text: '日常记录', link: '/diary/index' },
      { text: '兴趣爱好', link: '/hobby/index' },
    ],

    // 将 sidebar 从数组 [] 改为对象 {}，实现多侧边栏独立拆分
    sidebar: {
      
      // 1. 当路由匹配到 /guide/ 时展示的侧边栏（学习规划）
      '/guide/': [
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
        }
      ],

      // 2. 当路由匹配到 /diary/ 时展示的侧边栏（日常记录）
      '/diary/': [
        {
          text: '日常记录 📝',
          items: [
            { text: '日常随笔', link: '/diary/index' },
            { text: '2026年4月', link: '/diary/2026-04' },
            // 以后在这里直接追加新日记的文件名就行啦，比如：
            // { text: '2026年5月', link: '/diary/2026-05' }
            { text: '2026年5月', link: '/diary/2026-05' },
          ]
        }
      ],

      // 3. 当路由匹配到 /hobby/ 时展示的侧边栏（兴趣爱好）
      '/hobby/': [
        {
          text: '兴趣爱好 ✨',
          items: [
            { text: '我的兴趣', link: '/hobby/index' },
            // 以后在这里加你的日常爱好页面，比如羽毛球、MC、动漫等
          ]
        }
      ]

    },

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