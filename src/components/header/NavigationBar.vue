<template>
    <div class="header__navbar row justify-content-between align-items-center" 
        style="width: 450px;"
    >
        <search-menu></search-menu>
        <signup-menu></signup-menu>

    </div>
</template>


<script>
import SearchMenu from './SearchMenu.vue';
import SignupMenu from './SignupMenu.vue';

export default {
    components : {
        'search-menu' : SearchMenu,
        'signup-menu' : SignupMenu
    }
}


</script>