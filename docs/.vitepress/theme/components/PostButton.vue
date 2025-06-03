<script setup>
import {ref, onMounted} from "vue";

const page = ref(null);
const fetchVersion = async () => {
    const response = await fetch('https://api.mcarc.top/last_version', {
        method: 'POST',
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