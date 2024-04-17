<template>
    <div class="col-lg-3 mb-4">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <img :src="userData.imageLink" alt="Profile" width="36" height="36" class="rounded-circle" style="object-fit: cover" />
                    <div class="ps-3">
                        <p class="my-0 fs-5 fw-semibold">{{ userData.firstName }}</p>
                        <p class="my-0 fs-6 text-secondary">{{ userData.lastName }}</p>
                    </div>
                </div>
            </li>

            <li class="list-group-item user-menu" @click="menuClicked('personal-info')">
                <i class="fa-solid fa-user pe-2"></i>Personal Info
            </li>
            <li class="list-group-item user-menu" @click="menuClicked('favorite-recipes')">
                <i class="fas fa-heart pe-2"></i>Favorited Recipes
            </li>
            <li class="list-group-item user-menu" @click="menuClicked('user-recipe')">
                <i class="fa-solid fa-burger pe-2"></i>My Recipe
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import {computed} from 'vue';
import { useStore } from 'vuex';


const store = useStore();
const userData = computed(() => {
    return store.state.auth.userLogin;
})
const emit = defineEmits(['changeComponent']);


const menuClicked = option => {
    emit('changeComponent', option);
}
</script>

<style scoped>
.user-menu:hover {
    cursor: pointer;
}

.active-color {
    color: #4c4ddc;
}

.inactive-color {
    color: #404040;
}
</style>