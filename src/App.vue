

<template>
  <div>
    <web-header></web-header>
    <router-view></router-view>
    <web-footer></web-footer>
  </div>
</template>

<script setup>

import HomePage from './components/pages/HomePage.vue';
import WebFooter from './components/footer/WebFooter.vue';
import WebHeader from './components/header/WebHeader.vue';



</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
