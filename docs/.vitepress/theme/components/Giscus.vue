<script setup lang="ts">
import {useData, useRoute} from 'vitepress'
import {computed, nextTick, onMounted, ref, watch} from 'vue'

const {frontmatter, isDark} = useData()
const route = useRoute()
const container = ref<HTMLElement | null>(null)

const enabled = computed(() => (
    (frontmatter.value.comment === undefined || Boolean(frontmatter.value.comment))
    && route.path !== '/'
))

function renderGiscus() {
    const element = container.value
    if (!element) return

    element.replaceChildren()
    if (!enabled.value) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', 'zihao-il/bbk-docs')
    script.setAttribute('data-repo-id', 'R_kgDOOzs_iQ')
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', 'DIC_kwDOOzs_ic4Cq5cu')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', isDark.value ? 'transparent_dark' : 'light')
    script.setAttribute('data-lang', 'zh-CN')
    script.setAttribute('data-loading', 'lazy')
    element.append(script)
}

watch(
    [() => route.path, enabled],
    async () => {
        await nextTick()
        renderGiscus()
    },
    {flush: 'post'}
)

watch(isDark, (dark) => {
    const iframe = container.value?.querySelector<HTMLIFrameElement>('.giscus-frame')
    iframe?.contentWindow?.postMessage(
        {giscus: {setConfig: {theme: dark ? 'transparent_dark' : 'light'}}},
        'https://giscus.app'
    )
})

onMounted(renderGiscus)
</script>

<template>
    <section v-if="enabled" ref="container" class="giscus-container" aria-label="评论区"/>
</template>

<style scoped>
.giscus-container {
    margin-top: 40px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 20px;
}
</style>
