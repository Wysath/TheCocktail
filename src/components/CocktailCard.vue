<script setup lang="ts">
import type { Cocktail } from '@/types/cocktail'

defineProps<{
  cocktail: Cocktail
}>()
</script>

<template>
  <div class="cocktail-card">
    <div class="cocktail-image">
      <img :src="cocktail.thumbnail" :alt="cocktail.name" />
    </div>
    <div class="cocktail-content">
      <h2>{{ cocktail.name }}</h2>
      <div class="cocktail-details">
        <p><span>Category:</span> {{ cocktail.category }}</p>
        <p><span>Type:</span> {{ cocktail.alcoholic }}</p>
        <p><span>Glass:</span> {{ cocktail.glass }}</p>
      </div>
      <div class="cocktail-ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="(ingredient, index) in cocktail.ingredients" :key="index">
            {{ cocktail.measurements[index] ? `${cocktail.measurements[index]} ` : ''
            }}{{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="cocktail-instructions">
        <h3>Instructions</h3>
        <p>{{ cocktail.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cocktail-card {
  background-color: var(--color-background-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.cocktail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.cocktail-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.cocktail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.cocktail-card:hover .cocktail-image img {
  transform: scale(1.05);
}

.cocktail-content {
  padding: 1.5rem;
}

.cocktail-content h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  border-bottom: 2px solid hsla(160, 100%, 37%, 0.5);
  padding-bottom: 0.5rem;
}

.cocktail-details {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.cocktail-details span {
  font-weight: 600;
  color: hsla(160, 100%, 37%, 1);
}

.cocktail-ingredients h3,
.cocktail-instructions h3 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: var(--color-heading);
}

.cocktail-ingredients ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.cocktail-instructions p {
  line-height: 1.6;
}

@media (min-width: 768px) {
  .cocktail-card {
    flex-direction: row;
    align-items: stretch;
  }

  .cocktail-image {
    width: 280px;
    height: auto;
  }

  .cocktail-content {
    flex: 1;
    max-width: calc(100% - 280px);
  }
}
</style>
