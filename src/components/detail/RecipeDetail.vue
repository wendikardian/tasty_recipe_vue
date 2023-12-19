<template>
    <div class="col-12 col-sm-8">
        <recipe-description></recipe-description>
    </div>


</template>


<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import RecipeDescription from './RecipeDescription.vue';


const store = useStore();
const route = useRoute();

onMounted(async() => {
    await store.dispatch('recipe/getRecipeDetail', route.params.id);
})
</script>