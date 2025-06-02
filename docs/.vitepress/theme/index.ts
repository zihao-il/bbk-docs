// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import './styles.css'

export default {
    extends: DefaultTheme,

    setup() {

        const {frontmatter} = useData();
        const route = useRoute();

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
