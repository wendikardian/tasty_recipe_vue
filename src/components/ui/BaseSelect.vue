<template>
    <select class="form-select" :id="id" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="(item, index) in data" :key="index" :value="item" :selected="modelvalue === item">
            {{ item }}
        </option>
    </select>
</template>


<script setup>

defineProps({
    data: { type: Array, required: true },
    id: { type: String, required: true },
    modelvalue: { type: String, required: true }
})

</script>