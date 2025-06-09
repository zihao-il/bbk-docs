<script lang="ts" setup>
import {ref, onMounted, defineProps} from "vue";

const props = defineProps<{
    url?: string;
    method?: string;
    body?: Record<string, any>;
}>();

const page = ref<JSON>();

const fetchVersion = async () => {
    const response = await fetch(`https://api.m.top/${props.url ?? 'last_version'}`, {
        method: props.method ?? 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: props.method === 'POST' ? new URLSearchParams(props.body).toString() : undefined
    });

    page.value = await response.json();
};
</script>

<template>
    <pre><code>{{ page }}</code></pre>
</template>
<style>

</style>