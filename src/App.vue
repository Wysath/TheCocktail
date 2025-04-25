<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

const showHeader = ref(false)

onMounted(() => {
  setTimeout(() => {
    showHeader.value = true
  }, 300)
})
</script>

<template>
  <div class="app-container">
    <header :class="{ 'header-visible': showHeader }">
      <div class="header-content">
        <h1>TheCocktail</h1>
        <p class="tagline">Discover amazing cocktail recipes</p>
      </div>
      <div class="header-decoration">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </header>

    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
.app-container {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  padding: 0 1rem;
}

header {
  position: relative;
  text-align: center;
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0 0 16px 16px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
}

.header-visible {
  transform: translateY(0);
  opacity: 1;
}

.header-content {
  position: relative;
  z-index: 5;
}

header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, var(--accent-color), var(--primary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
}

.tagline {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0.5rem 0;
  opacity: 0.9;
}

.header-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.bubble {
  position: absolute;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
}

.bubble:nth-child(1) {
  width: 150px;
  height: 150px;
  top: -50px;
  right: 20%;
  animation: float 7s infinite ease-in-out;
}

.bubble:nth-child(2) {
  width: 80px;
  height: 80px;
  bottom: 10%;
  left: 15%;
  animation: float 5s infinite ease-in-out reverse;
}

.bubble:nth-child(3) {
  width: 120px;
  height: 120px;
  top: 30%;
  left: 5%;
  animation: float 9s infinite ease-in-out;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s,
    transform 0.5s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (min-width: 1024px) {
  .app-container {
    padding: 0 2rem;
  }
}
</style>
