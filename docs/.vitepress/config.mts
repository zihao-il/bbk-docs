import {defineConfig} from 'vitepress'
import {groupIconMdPlugin, groupIconVitePlugin} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MC版本库-文档站",
    description: "MC版本库文档说明",
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)
        },
        theme: {
            light: 'min-light',
            dark: 'one-dark-pro'
        },
        image: {
            lazyLoading: true
        },
        lineNumbers: true,
    },

    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    javascript: 'logos:javascript',
                    python: 'logos:python',
                    主域名: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 48 48"><path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"/><path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"/></svg>',
                    备用域名: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M12.262 45.754h29.086c7.687 0 13.406-5.836 13.406-13.078c0-7.453-6.094-12.914-14.04-12.914c-2.929-5.79-8.366-9.516-15.14-9.516c-8.812 0-16.078 6.89-16.851 15.61c-4.243 1.218-7.477 4.921-7.477 9.867c0 5.53 4.031 10.03 11.016 10.03m-.047-3.773c-4.805 0-7.219-2.672-7.219-6.141c0-2.836 1.64-5.344 5.625-6.422c1.29-.328 1.758-.937 1.875-2.273c.54-7.641 6.281-13.149 13.078-13.149c5.274 0 9.422 2.883 11.953 8.086c.54 1.125 1.242 1.523 2.625 1.523c6.938 0 10.852 4.196 10.852 9.188c0 5.11-4.078 9.188-9.422 9.188Z"/></svg>',
                    adb: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path fill="currentColor" d="M5 11v-1q0-1.8.813-3.287T8 4.275L6.125 2.4L7 1.5l2.125 2.125q.65-.3 1.388-.462T12 3t1.488.163t1.387.462L17 1.5l.875.9L16 4.275q1.375.95 2.188 2.438T19 10v1zm10-2q.425 0 .713-.288T16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9M9 9q.425 0 .713-.288T10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9m3 14q-2.925 0-4.962-2.037T5 16v-4h14v4q0 2.925-2.037 4.963T12 23"/></svg>',
                    json5: 'logos:json-ld',
                },
            })
        ],
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
            {text: 'API文档', link: '/API文档/', activeMatch: '/API文档/'},
            {text: '去oreUI文档', link: '/去oreUI文档/', activeMatch: '/去oreUI文档/'}
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
                            collapsed: false,
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
            provider: 'algolia',
            appId: 'WNA7IBB41Y',
            apiKey: 'b8345816507e10b1d41dd90e8458bd58',
            indexName: 'bbk_docs_articles',
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

        externalLinkIcon: true,
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',
    }

})
