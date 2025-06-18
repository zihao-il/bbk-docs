<script lang="ts" setup>

interface Props {
    up: string
    title?: string
    type?: string
}

withDefaults(defineProps<Props>(), {
    up: undefined,
    title: '你知道的太多了',
    type: undefined
})
</script>

<template>
    <ruby>
        <slot></slot>
        <rp>(</rp>
        <rt>
            <curtain :title="title" :type="type">{{ up }}</curtain>
        </rt>
        <rp>)</rp>
    </ruby>
</template>

<style scoped>
rt .heimu {
    font-size: 0.75em;
    padding-top: 0;
    padding-bottom: 0;
}
</style>