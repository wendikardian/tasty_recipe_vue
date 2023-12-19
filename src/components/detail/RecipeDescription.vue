<template>
    <div class="my-2 p-4 d-flex flex-column-reverse flex-lg-row justify-content-between border border-secondary-sublet rounded">
      <div class="pe-lg-4">
        <h2>{{ recipeDetail.name }}</h2>
        <p>
          {{ recipeDetail.description }}
        </p>
  
        <!-- Phone Device -->
        <div class="d-flex d-lg-none flex-column justify-content-between border border-primary rounded bg-color-detail">
          <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-bottom border-primary">
            <p class="my-0">Preptime</p>
            <p class="my-0">{{ recipeDetail.prepTime }} Mins</p>
          </div>
          <div class="w-75 px-lg-4 pb-3 mx-auto border-bottom border-primary">
            <p class="my-0">Cooktime</p>
            <p class="my-0">{{ recipeDetail.cookTime }} Mins</p>
          </div>
          <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
            <p class="my-0">Total</p>
            <p class="my-0">{{ recipeDetail.prepTime + recipeDetail.cookTime  }} Mins</p>
          </div>
        </div>
  
        <!-- PC Device -->
        <div class="d-none d-lg-flex flex-lg-row justify-content-between border border-primary rounded bg-color-detail">
          <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-end border-primary">
            <p class="my-0">Preptime</p>
            <p class="my-0">{{ recipeDetail.prepTime }} Mins</p>
          </div>
          <div class="w-75 my-3 px-lg-4 mx-auto border-end border-primary">
            <p class="my-0">Cooktime</p>
            <p class="my-0">{{ recipeDetail.cookTime }} Mins</p>
          </div>
          <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
            <p class="my-0">Total</p>
            <p class="my-0">{{ recipeDetail.prepTime + recipeDetail.cookTime  }} Mins</p>
          </div>
        </div>
        <p class="my-3">Recipe By {{ recipeDetail.username }} </p>
        <div>
          <button class="btn fav-btn px-3 py-2 rounded-pill">
            <i class="far fa-heart pe-2"></i>Add To Favorite
          </button>
        </div>
      </div>
      <div class="ps-lg-4">
        <img :src=recipeDetail.imageLink alt="Food" class="recipe__detail-img rounded mx-auto" style="object-fit: cover"/>
      </div>
    </div>
  </template>

<script setup>

  import recipe from "@/recipe";
import {computed, reactive} from "vue";
  import {useStore} from "vuex";

  const store =useStore();
  const recipeDetail = computed(() => {
    return store.state.recipe.recipeDetail;
  })

  console.log(recipeDetail.value);

</script>