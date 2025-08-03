<script setup>
import DefaultTheme from 'vitepress/theme'
import BackTop from './BackTop.vue'

const {Layout} = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-footer-before>
            <BackTop/>
        </template>
    </Layout>
</template>
<style scoped>

</style>
