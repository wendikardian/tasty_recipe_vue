<template>
    <button class="btn rounded-pill"
    @click="$emit('clickButton')"
    >
        <slot></slot>
    </button>

</template>