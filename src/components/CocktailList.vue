<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCocktailStore } from '@/stores/cocktailStore'
import CocktailCard from './CocktailCard.vue'

const cocktailStore = useCocktailStore()
const isFirstLoad = ref(true)

onMounted(async () => {
  await cocktailStore.fetchRandomCocktails()
  setTimeout(() => {
    isFirstLoad.value = false
  }, 500)
})
</script>

<template>
  <div class="cocktail-list-container" :class="{ 'first-load': isFirstLoad }">
    <div class="cocktail-header">
      <h2 class="section-title"><span class="title-highlight">Random</span> Cocktails</h2>
      <button
        class="refresh-button"
        @click="cocktailStore.fetchRandomCocktails()"
        :disabled="cocktailStore.loading"
      >
        <span class="button-icon">↻</span>
        <span class="button-text">Refresh Cocktails</span>
      </button>
    </div>

    <div v-if="cocktailStore.loading" class="loading">
      <div class="spinner"></div>
      <p>Mixing up delicious cocktails...</p>
    </div>

    <div v-else-if="cocktailStore.error" class="error-message">
      <p>{{ cocktailStore.error }}</p>
      <button @click="cocktailStore.fetchRandomCocktails()">Try Again</button>
    </div>

    <div v-else class="cocktail-grid">
      <CocktailCard
        v-for="cocktail in cocktailStore.cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
        class="card-animation"
      />
    </div>
  </div>
</template>

<style scoped>
.cocktail-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.cocktail-list-container:not(.first-load) {
  opacity: 1;
  transform: translateY(0);
}

.cocktail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-title {
  font-size: 2.2rem;
  font-family: 'Playfair Display', serif;
  color: white;
  margin: 0;
  position: relative;
}

.title-highlight {
  color: var(--accent-color);
}

.refresh-button {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button-icon {
  font-size: 1.3rem;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

.refresh-button:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.refresh-button:hover .button-icon {
  transform: rotate(180deg);
}

.refresh-button:disabled {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 2rem;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: var(--accent-color);
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading p {
  font-size: 1.2rem;
  color: white;
}

.error-message {
  text-align: center;
  padding: 3rem 2rem;
  background-color: rgba(255, 59, 48, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 16px;
}

.error-message p {
  margin-bottom: 1.5rem;
  color: #ff3b30;
  font-size: 1.2rem;
}

.error-message button {
  background-color: #ff3b30;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.error-message button:hover {
  background-color: #e53935;
  transform: translateY(-2px);
}

.cocktail-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.card-animation {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s forwards;
}

.card-animation:nth-child(2) {
  animation-delay: 0.2s;
}

.card-animation:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .cocktail-list-container {
    padding: 2rem;
  }

  .cocktail-grid {
    gap: 3rem;
  }
}
</style>
