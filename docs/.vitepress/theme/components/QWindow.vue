<script lang="ts" setup>
defineProps<{
    title?: string
}>()
</script>

<template>
    <section class="qq">
        <q-header>{{ title }}</q-header>
        <q-main>
            <slot></slot>
        </q-main>
    </section>
</template>

<style scoped>
.qq {
    width: 100%;
    transition: background-color 0.2s;
    border-radius: 10px;
    background-color: var(--qq-background-03);
}
</style>