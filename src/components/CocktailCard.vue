<script setup lang="ts">
import type { Cocktail } from '@/types/cocktail'
import { ref } from 'vue'

const props = defineProps<{
  cocktail: Cocktail
}>()

const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="cocktail-card" :class="{ 'is-expanded': isExpanded }">
    <div class="cocktail-preview" @click="toggleExpand">
      <div class="cocktail-image">
        <img :src="cocktail.thumbnail" :alt="cocktail.name" />
        <div class="image-overlay">
          <span class="expand-icon">{{ isExpanded ? '−' : '+' }}</span>
        </div>
      </div>
      <div class="cocktail-header">
        <h2>{{ cocktail.name }}</h2>
        <div class="cocktail-badges">
          <span class="badge badge-category">{{ cocktail.category }}</span>
          <span
            class="badge"
            :class="cocktail.alcoholic === 'Alcoholic' ? 'badge-alcoholic' : 'badge-non-alcoholic'"
          >
            {{ cocktail.alcoholic }}
          </span>
        </div>
      </div>
    </div>

    <div class="cocktail-details">
      <div class="glass-type">
        <span class="label">Served in:</span>
        <span class="value">{{ cocktail.glass }}</span>
      </div>

      <div class="ingredients-section">
        <h3>Ingredients</h3>
        <ul class="ingredients-list">
          <li
            v-for="(ingredient, index) in cocktail.ingredients"
            :key="index"
            class="ingredient-item"
          >
            <div class="ingredient-amount">{{ cocktail.measurements[index] || '—' }}</div>
            <div class="ingredient-name">{{ ingredient }}</div>
          </li>
        </ul>
      </div>

      <div class="instructions-section">
        <h3>How to make it</h3>
        <p>{{ cocktail.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cocktail-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-bottom: 2rem;
  color: #333;
  position: relative;
}

.cocktail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.cocktail-preview {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.cocktail-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.cocktail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s;
}

.cocktail-card:hover .cocktail-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.cocktail-card:hover .image-overlay {
  opacity: 1;
}

.expand-icon {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.cocktail-header {
  padding: 1.5rem;
}

.cocktail-header h2 {
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  color: #222;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding-bottom: 0.5rem;
}

.cocktail-header h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.cocktail-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.badge-category {
  background-color: #e0f2f1;
  color: var(--primary-color);
}

.badge-alcoholic {
  background-color: #fbe9e7;
  color: #e53935;
}

.badge-non-alcoholic {
  background-color: #e8f5e9;
  color: #43a047;
}

.cocktail-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0, 1, 0, 1);
  padding: 0 1.5rem;
}

.is-expanded .cocktail-details {
  max-height: 2000px;
  transition: max-height 1s ease-in-out;
  padding-bottom: 1.5rem;
}

.glass-type {
  margin: 1rem 0;
  padding: 0.7rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.glass-type .label {
  font-weight: 600;
  margin-right: 0.5rem;
  color: #757575;
}

.glass-type .value {
  color: #212121;
}

.ingredients-section,
.instructions-section {
  margin-top: 1.5rem;
}

h3 {
  font-size: 1.2rem;
  color: #424242;
  margin-bottom: 1rem;
  font-weight: 600;
}

.ingredients-list {
  padding: 0;
  list-style: none;
}

.ingredient-item {
  display: flex;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px dashed #e0e0e0;
}

.ingredient-amount {
  width: 100px;
  color: var(--primary-color);
  font-weight: 600;
}

.ingredient-name {
  flex-grow: 1;
}

.instructions-section p {
  line-height: 1.8;
  color: #424242;
}

@media (min-width: 768px) {
  .cocktail-preview {
    flex-direction: row;
  }

  .cocktail-image {
    width: 280px;
    height: auto;
  }

  .cocktail-header {
    flex: 1;
  }

  .is-expanded .cocktail-details {
    padding: 0 1.5rem 2rem;
  }
}

@media (min-width: 1024px) {
  .cocktail-image {
    width: 320px;
  }
}
</style>
