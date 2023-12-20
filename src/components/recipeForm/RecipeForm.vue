<template>

<ul class="list-group">
    <recipe-form-header
    :title="isEdit ? 'Edit Recipe' : 'Create Recipe'"
    ></recipe-form-header>
    <recipe-form-body
    :isEdit="isEdit"
    ></recipe-form-body>
</ul>

</template>

<script setup>
import RecipeFormHeader from './RecipeFormHeader.vue';
import RecipeFormBody from './RecipeFormBody.vue';
import {defineProps} from 'vue';

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  }
});
</script>