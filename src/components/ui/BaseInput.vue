<template>
    <div>
        <label :for="identity" class="fw-semibold">
            Firstname <span style="color: #cb3a31">*</span> </label>
        <input class="form-control" :type="type" :id="identity" :placeholder="placeholder" :value="modelValue"
            :readonly="readonly === '1'">
    </div>
</template>

<script setup>

    defineProps({
        type : {type : String, require: true},
        label: {type : String, require: true},
        identity: {type : String, require: true},
        placeholder: {type : String, require: true},
        readonly : {type : String, require: true, default: '0'},
    })

</script>