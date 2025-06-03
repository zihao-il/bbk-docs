import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MC版本库-文档站",
    description: "MC版本库文档说明",
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        theme: {
            light: 'min-light',
            dark: 'one-dark-pro'
        },
        lineNumbers: true,
    },

    sitemap: {
        hostname: 'https://docs.mcarc.top'
    },

    head: [
        ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/favicon-256x256.png'}],
        ['meta', {name: 'theme-color', content: '#FFFFFF'}],
        ['link', {rel: 'manifest', href: '/manifest.webmanifest'}],
        ['link', {rel: 'alternate', type: 'application/rss+xml', href: 'https://rss.mcarc.top/'}],
        [
            'script',
            {},
            `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "rtilq0m5th");`
        ]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        nav: [
            {text: '首页', link: '/'},
            {text: '新手教程', link: '/新手教程/', activeMatch: '/新手教程/'},
            {text: 'API文档', link: '/API文档/', activeMatch: '/API文档/'}
        ],

        sidebar: {
            '/': [
                {
                    text: '欢迎',
                    items: [
                        {text: '新手教程', link: '/新手教程/index.md'},
                        {text: 'API文档', link: '/API文档/index.md'}
                    ]
                }
            ],

            '/新手教程/': [
                {
                    text: '新手教程',
                    items: [
                        {text: '教程文档', link: '/新手教程/index.md'},
                        {text: '登录错误', link: '/新手教程/登录错误.md'},
                        {text: '账户问题', link: '/新手教程/账户问题.md'},
                    ]
                },
            ],


            '/API文档/': [
                {
                    text: 'API文档',
                    items: [
                        {
                            text: 'API说明', link: '/API文档/index.md',
                            items: [
                                {text: '/last_version', link: '/API文档/last_version.md'},
                                {text: '/get_version', link: '/API文档/get_version.md'},
                                {text: '/search_version', link: '/API文档/search_version.md'},
                            ]
                        },
                    ]
                },
                {text: 'RSS订阅', link: '/API文档/RSS订阅.md'},
                {text: 'WebSocket服务器', link: '/API文档/WebSocket服务器.md'},
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zihao-il/bbk-docs'}
        ],

        editLink: {
            pattern: 'https://github.com/zihao-il/bbk-docs/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '没有找到任何结果',
                        resetButtonTitle: '清除关键词',
                        footer: {
                            selectText: '回车选择',
                            navigateText: '上下键切换',
                            closeText: 'ESC 关闭搜索'
                        }
                    }
                }
            }
        },

        footer: {
            message: 'MIT License',
            copyright: 'Copyright © 2025 MC版本库-文档站',
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },


        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }

})
