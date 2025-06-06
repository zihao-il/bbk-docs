// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import {onMounted, watch} from 'vue';
import './styles.css'
import '@bprogress/core/css';
import {BProgress} from '@bprogress/core';
import mediumZoom from 'medium-zoom';
// import PostButton from "./components/PostButton.vue"
import 'virtual:group-icons.css'

export default {
    extends: DefaultTheme,
    enhanceApp({app , router }) {
        // app.component('PostButton' , PostButton)
    },
    setup() {
        BProgress.configure({
            showSpinner: false
        });
        const {frontmatter, isDark} = useData();
        const route = useRoute();
        watch(
            () => route.path,
            (newPath, oldPath) => {
                BProgress.start()
                requestAnimationFrame(() => {
                    BProgress.done()
                    initZoom()
                })
            }
        );
        const updateThemeColor = (dark: boolean) => {
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) {
                meta.setAttribute('content', dark ? '#1B1B1F' : '#FFFFFF');
            }
        };
        const initZoom = () => {
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'});
        };
        onMounted(() => {
            initZoom();
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
