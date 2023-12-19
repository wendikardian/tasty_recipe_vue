<template>
    <div class="my-3">
        <div class="card">
            <div class="card-header">
                <p class="fs-4 my-0 fw-semibold">Directions</p>
            </div>
            <div class="card-body">
                <div>
                    <p class="my-2 fs-5 fw-semibold">Step ...</p>
                    <p class="my-2"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const recipeDetail = computed(() => {
    return store.state.recipe.recipeDetail;
})


</script>