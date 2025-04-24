<script setup lang="ts">
import { onMounted } from 'vue'
import { useCocktailStore } from '@/stores/cocktailStore'
import CocktailCard from './CocktailCard.vue'

const cocktailStore = useCocktailStore()

onMounted(async () => {
  await cocktailStore.fetchRandomCocktails()
})
</script>

<template>
  <div class="cocktail-list-container">
    <div class="cocktail-header">
      <h1>Random Cocktails</h1>
      <button
        class="refresh-button"
        @click="cocktailStore.fetchRandomCocktails()"
        :disabled="cocktailStore.loading"
      >
        Refresh Cocktails
      </button>
    </div>

    <div v-if="cocktailStore.loading" class="loading">
      <div class="spinner"></div>
      <p>Loading delicious cocktails...</p>
    </div>

    <div v-else-if="cocktailStore.error" class="error-message">
      <p>{{ cocktailStore.error }}</p>
      <button @click="cocktailStore.fetchRandomCocktails()">Try Again</button>
    </div>

    <div v-else class="cocktail-list">
      <CocktailCard
        v-for="cocktail in cocktailStore.cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<style scoped>
.cocktail-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.cocktail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.cocktail-header h1 {
  font-size: 2.2rem;
  color: var(--color-heading);
  margin: 0;
}

.refresh-button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.refresh-button:hover {
  background-color: hsla(160, 100%, 30%, 1);
}

.refresh-button:disabled {
  background-color: hsla(160, 50%, 60%, 0.7);
  cursor: not-allowed;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid hsla(160, 100%, 37%, 0.3);
  border-radius: 50%;
  border-top-color: hsla(160, 100%, 37%, 1);
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 8px;
}

.error-message p {
  margin-bottom: 1.5rem;
  color: #e53935;
  font-size: 1.1rem;
}

.error-message button {
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.error-message button:hover {
  background-color: #c62828;
}

.cocktail-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
