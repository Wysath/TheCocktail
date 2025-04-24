<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>TheCocktail</h1>
    <p class="tagline">Discover amazing cocktail recipes</p>
  </header>

  <RouterView />
</template>

<style>
/* Global styles */
:root {
  --primary-color: hsla(160, 100%, 37%, 1);
  --primary-hover: hsla(160, 100%, 30%, 1);
}

header {
  text-align: center;
  padding: 2rem 1rem;
  background-color: var(--color-background-soft);
}

header h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: var(--color-text);
  opacity: 0.8;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

@media (min-width: 1024px) {
  #app {
    padding: 0 2rem;
  }
}
</style>
