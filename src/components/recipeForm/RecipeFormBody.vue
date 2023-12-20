<template>
    <li class="list-group-item">
        <form>
            <!-- General Information Start -->
            <div>
                <p class="my-3 fs-5 fw-semibold">General Information</p>
                <div>
                    <!-- Image Start -->
                    <div class="mb-3">
                        <base-input label="Photo Recipe" type="file" identity="recipeImage"></base-input>

                    </div>
                    <!-- Image End -->

                    <!-- Recipe Title Start -->
                    <div class="mb-3">
                        <base-input type="text" identity="recipeTitle" placeholder="Give your recipe a title"
                            label="Recipe Title"></base-input>
                    </div>
                    <!-- Recipe Title  End -->

                    <!-- Recipe Description Start -->
                    <div class="mb-3">
                        <base-text-area identity="recipeDescription" label="Description"
                            placeholder="Share story behind recipe and what makes it special"></base-text-area>

                    </div>
                    <!-- Recipe Description End -->

                    <!-- Recipe Cateogry Start -->
                    <div class="mb-3">
                        <base-select :data="['Breakfast', 'Lunch', 'Dinner', 'Meals', 'Snacks']" identity="recipeType"
                            label="Recipe Type"></base-select>
                    </div>
                    <!-- Recipe Category End -->
                </div>
            </div>
            <!-- General Information End -->

            <!-- Time Setting Start -->
            <div class="border-top py-1">
                <p class="my-3 fs-5 fw-semibold">Time Setting</p>
                <div>
                    <!-- Preparation Time Start -->
                    <div class="mb-3">
                        <base-input type="number" identity="prepTime" placeholder="0" label="Prep Time"></base-input>
                    </div>
                    <!-- Preparation Time End -->

                    <!-- Cook Time Start -->
                    <div class="mb-3">
                        <base-input type="number" identity="cookTime" placeholder="0" label="Cook Time"></base-input>

                    </div>
                    <!-- Cook Time End -->

                    <!-- Total Time Start -->
                    <div class="mb-3">
                        <base-input type="number" identity="totalTime" placeholder="0" label="Total Time"></base-input>
                    </div>
                    <!-- Total Time End -->
                </div>
            </div>
            <!-- Time Setting End -->

            <!-- Ingredients Start -->
            <div class="border-top py-1">
                <p class="my-3 fs-5 fw-semibold">Ingredients</p>
                <p>
                    Enter one ingredient per line. Include the quantity (i.e. cups,
                    tablespoons) and any special preparation (i.e. sifted, softened,
                    chopped). Use optional headers to organize the different parts of the
                    recipe (i.e. Cake, Frosting, Dressing).
                </p>
                <div>
                    <div class="mb-3 row">
                        <!-- Ingredient Input Start -->
                        <div class="col-lg-11 col-11">
                            <base-input type="text" identity="ingredient" placeholder="Ex: 1 cup sugar"
                                label="Ingredient"></base-input>

                        </div>
                        <!-- Ingredient Input End -->
                        <div class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient" style="color: #cb3a31">
                            <i class="fa-regular fa-trash-can px-1"></i><span class="d-none d-md-inline">Delete</span>
                        </div>
                    </div>
                </div>
                <!-- Add More Button Start -->
                <div class="mb-3">
                    <base-button class="new-ingredient-btn px-3 py-2" type="button">
                        Add More
                    </base-button>
                </div>
                <!-- Add More Button Start -->
            </div>
            <!-- Ingredients End -->

            <!-- Direction Start -->
            <div class="border-top my-3">
                <p class="my-3 fs-5 fw-semibold">Directions</p>
                <p>
                    Explain how to make your recipe, including oven temperatures, baking
                    or cooking times, and pan sizes, etc. Use optional headers to organize
                    the different parts of the recipe
                </p>
                <div>
                    <div class="mb-3 row">
                        <!-- Direction Input Start -->
                        <div class="col-lg-11 col-11">
                            <div class="mb-3">
                                <base-input type="text" identity="direction" placeholder="Ex: 1 cup sugar"
                                    label="Direction"></base-input>
                            </div>

                        </div>
                        <!-- Direction Input End -->
                        <div class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient" style="color: #cb3a31">
                            <i class="fa-regular fa-trash-can px-1"></i><span class="d-none d-md-inline">Delete</span>
                        </div>
                    </div>
                </div>
                <!-- Add More Button Start -->
                <base-button class="new-ingredient-btn px-3 py-2" type="button">
                    Add More
                </base-button>
                <!-- Add More Button End -->
            </div>
            <!-- Direction End -->

            <!-- Form Button Start -->
            <div class="border-top py-3 d-flex my-4 justify-content-end">
                <!-- Cancel Button Start -->
                <base-button class="cancel-btn px-3 py-2 ms-1" type="button">
                    Cancel
                </base-button>
                <!-- Cancel Button End -->

                <!-- Submit Button Start -->
                <base-button class="submit-recipe-btn px-3 py-2 ms-1" type="button">
                    Submit
                </base-button>
                <!-- Submit Button End -->
            </div>
            <!-- Form Button End -->
        </form>
    </li>
</template>

<script setup>

import BaseInput from '../ui/BaseInput.vue';
import BaseTextArea from '../ui/BaseTextArea.vue';
import BaseSelect from '../ui/BaseSelect.vue';
import BaseButton from '../ui/BaseButton.vue';

</script>