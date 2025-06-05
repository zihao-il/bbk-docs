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
</script>

<template>
    <pre><code>{{ page }}</code></pre>
</template>
<style>

</style>