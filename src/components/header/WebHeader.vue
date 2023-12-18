<template>
    <header 
        class="shadow-sm container-fluid bg-white py-3 border-bottom fixed-top ">
        <div class="container-md d-flex justify-content-between align-items-center ">
            <img src="@/assets/images/Logo.png" alt="Logo">
            <navigation-bar></navigation-bar>
        </div>

    </header>
</template>


<script>
import NavigationBar from './NavigationBar.vue';

export default {
    components : {
        'navigation-bar' : NavigationBar
    }
}

</script>