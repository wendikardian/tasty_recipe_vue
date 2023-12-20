<template>
    <main>
        <div class="container-md my-5 py-5">
            <recipe-form
            v-if="detailData && !isLoading" :isEdit="true"
            ></recipe-form>
        </div>
    </main>
</template>

<script setup>
import {useStore} from 'vuex';
import { useRoute } from 'vue-router';
import {ref, computed} from 'vue';
import {onMounted} from 'vue';

import RecipeForm from '../recipeForm/RecipeForm.vue';

const detailData = ref(null);
const isLoading = ref(false);
const store = useStore();
const route = useRoute();
onMounted(async () => {
  console.log(route.params.id);
  isLoading.value = true;

  await store.dispatch('recipe/getRecipeDetail', route.params.id);
  detailData.value = store.state.recipe.recipeDetail;
  isLoading.value = false;
});

</script>