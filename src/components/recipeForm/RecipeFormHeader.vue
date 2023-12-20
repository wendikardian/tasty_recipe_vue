<template>
    <li class="list-group-item">
      <div class="d-flex align-items-center px-3">
        <router-link to="/user/user-recipe"><i class="fa-solid fa-arrow-left"></i></router-link>
        <div class="ms-4">
            <p class="my-0 fs-4 fw-semibold">{{ title }}</p>
          <p class="my-0">
            Uploading personal recipes is easy! Add yours to your favorites, share
            with friends, family, or the Allrecipes community.
          </p>
        </div>
      </div>
    </li>
  </template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
});
</script>