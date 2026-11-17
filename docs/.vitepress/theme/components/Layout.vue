<script setup>
import DefaultTheme from 'vitepress/theme'
import BackTop from './BackTop.vue'
import Giscus from './Giscus.vue'

const {Layout} = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-footer-before>
            <BackTop/>
        </template>
        <template #doc-after>
            <Giscus/>
        </template>
    </Layout>
</template>
<style scoped>

</style>
