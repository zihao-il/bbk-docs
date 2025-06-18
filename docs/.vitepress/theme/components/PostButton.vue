<<<<<<< HEAD
<script setup>
import {ref, onMounted, defineProps} from "vue";

const props = defineProps({
    url: {
        type: String,
        default: 'last_version'
    },
    method: {
        type: String,
        default: 'POST'
    },
    body: {
        type: Object,
        default: () => ({})
    },
});

const page = ref(null);
const fetchVersion = async () => {
    const response = await fetch(`https://api.mcarc.top/${props.url}`, {
        method: `${props.url}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    page.value = await response.json();

};
onMounted(() => {
    fetchVersion()
})
=======
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
>>>>>>> ddc818e (增加oreUI配置文件说明，分割教程指导)
</script>

<template>
    <pre><code>{{ page }}</code></pre>
</template>
<style>

</style>