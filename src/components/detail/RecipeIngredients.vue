<template>
    <div class="my-3">
        <div class="card">
            <div class="card-header">
                <p class="fs-4 my-0 fw-semibold">Ingredients</p>
            </div>
            <div class="card-body">
                <ul class="mb-0">
                    <li v-for="(ingredient, index) in recipeDetail.ingredients" 
                        :key="index"
                    >   
                    {{ ingredient }}
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store =useStore();

const recipeDetail = computed(() => {
    return store.state.recipe.recipeDetail;
})

console.log(recipeDetail)


</script>