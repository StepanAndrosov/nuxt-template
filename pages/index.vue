<template>
  <div>
    <h1 class="text-5xl">Начальная страница</h1>
    <NuxtLink to="/about" class="text-blue-600 underline"
      >Вторая страница</NuxtLink
    >

    <div class="flex flex-col gap-20">
      <h2 class="text-2xl">{{ app.title }}</h2>
      <span class="text-lg">{{ app.text }}</span>
      <BaseHello />
      <div class="mt-5">
        <span v-for="item in app.categories" class="p-4 bg-yellow-100">{{
          item
        }}</span>
      </div>

      <div>pos: {{ x }}, {{ y }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApp } from '@/store/app';

const app = useApp();

const { x, y } = useMouse();
</script>
