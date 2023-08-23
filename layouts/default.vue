<template>
  <div class="page w-full">
    <NavHeader />
    <slot> </slot>
    <NavFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  display: grid;
  grid-template-rows: min-content max-content min-content;
}
</style>
