// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import {onMounted, watch} from 'vue';
import './styles.css'
import '@bprogress/core/css';
import {BProgress} from '@bprogress/core';
import mediumZoom from 'medium-zoom';
import 'virtual:group-icons.css'

// import PostButton from "./components/PostButton.vue"
// import Curtain from "./components/Curtain.vue"
// import RubyCurtain from "./components/RubyCurtain.vue"
// import QWindow from './components/QWindow.vue'
//
// import { FakeQQUI } from 'fake-qq-ui'
// import 'fake-qq-ui/styles/fake-qq-ui.css'
// import 'fake-qq-ui/styles/light.scss'
// import 'fake-qq-ui/styles/dark.scss'

export default {
    extends: DefaultTheme,
    enhanceApp({app , router }) {
        // app.component('PostButton' , PostButton)
        // app.component('Curtain' , Curtain)
        // app.component('RubyCurtain' , RubyCurtain)
        // app.component('QWindow' , QWindow)
        // app.use(FakeQQUI)
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
