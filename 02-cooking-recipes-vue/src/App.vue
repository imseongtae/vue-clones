<script setup lang="ts">
import { RouterView } from 'vue-router';
import { watch, onMounted } from 'vue';
import { useRecipesStore } from '@/stores/recipes';
import type { NewRecipe } from '@/interfaces/recipe';

const recipesStore = useRecipesStore();
watch(
  () => recipesStore.recipes,
  () => {
    localStorage.setItem('recipes-data', JSON.stringify(recipesStore.recipes));
  },
  { deep: true },
);

onMounted(() => {
  const localData: NewRecipe[] =
    JSON.parse(localStorage.getItem('recipes-data')!) || recipesStore.recipes;
  recipesStore.recipes = localData;
});
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #030e1b;
  color: #fff;
}

a {
  color: #2aeb74;
  text-decoration: none;
}

button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
