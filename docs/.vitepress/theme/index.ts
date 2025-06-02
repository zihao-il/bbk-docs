// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import {onMounted, watch} from 'vue';
import './styles.css'

export default {
    extends: DefaultTheme,

    setup() {

        const {frontmatter, isDark} = useData();
        const route = useRoute();
        const updateThemeColor = (dark: boolean) => {
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) {
                meta.setAttribute('content', dark ? '#1B1B1F' : '#397BFE');
            }
        };

        onMounted(() => {
            updateThemeColor(isDark.value);
            watch(isDark, (newVal) => {
                updateThemeColor(newVal);
            });
        });

        giscusTalk({
                repo: 'zihao-il/bbk-docs',
                repoId: 'R_kgDOOzs_iQ',
                category: 'Announcements',
                categoryId: 'DIC_kwDOOzs_ic4Cq5cu',
                mapping: 'pathname',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            true
        );

    },
};
