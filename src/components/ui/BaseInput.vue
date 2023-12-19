<template>
    <label :for="identity" class="fw-semibold">
        {{ label }} <span style="color: #cb3a31">*</span>
        <slot></slot>
    </label>
    <input :class="[{ 'd-none': isImage }, 'form-control']" :type="type" :id="identity" :placeholder="placeholder"
        :value="modelValue" :readonly="readonly === '1'" @keyup="$emit('keyInput', $event.target.value)"
        @change="$emit('change', $event)"
        @input="$emit('update:modelValue', $event.target.value)" />

</template>

<script setup>

// define Props is not defined

defineProps({
    type: { type: String, require: true },
    label: { type: String, require: true },
    identity: { type: String, require: true },
    placeholder: { type: String, require: true },
    readonly: { type: String, require: true, default: '0' },
    isImage: { type: Boolean, require: false, default: false },
    modelValue: { type: [String, Number] }
})
// const emit = defineEmits(['update:modelValue', 'keyInput', 'input', 'change'])

// add emits for @input


</script>