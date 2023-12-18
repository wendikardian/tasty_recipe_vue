<template>
    <div class="container-md my-5 py-5">
        <div class="recipe__title text-center">
            <h2>All Recipe</h2>
            <p style="font-size: 15px;">
                Find and share everyday cooking inspiration on AllRecipes. Discover recipes, cooks, videos, and how-tos
                based on the food you love and the friends you follow.
            </p>
        </div>
        <recipe-list
        :recipes="recipeList"
        ></recipe-list>

    </div>
</template>

<script setup>
import RecipeList from '../recipe/RecipeList.vue';
import RECIPE_DATA from '../../recipe.js'

const recipeList = RECIPE_DATA



</script>