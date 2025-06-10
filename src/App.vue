<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

const showHeader = ref(false)
const showStats = ref(false)

onMounted(() => {
  setTimeout(() => {
    showHeader.value = true
  }, 300)
  setTimeout(() => {
    showStats.value = true
  }, 800)
})
</script>

<template>
  <div class="app-container">
    <header :class="{ 'header-visible': showHeader }">
      <div class="header-content">
        <div class="logo-section">
          <div class="cocktail-icon">🍹</div>
          <h1 class="main-title">TheCocktail</h1>
        </div>
        <p class="tagline text-contrast">Découvrez les meilleurs cocktails du monde entier</p>
        <p class="subtitle text-contrast">Plus de 600 recettes authentiques à portée de clic</p>
        
        <!-- Stats animées -->
        <div class="stats-container" :class="{ 'stats-visible': showStats }">
          <div class="stat-item glass">
            <div class="stat-number text-primary">600+</div>
            <div class="stat-label text-contrast">Cocktails</div>
          </div>
          <div class="stat-item glass">
            <div class="stat-number text-primary">50+</div>
            <div class="stat-label text-contrast">Catégories</div>
          </div>
          <div class="stat-item glass">
            <div class="stat-number text-primary">100%</div>
            <div class="stat-label text-contrast">Gratuit</div>
          </div>
        </div>
      </div>
      
      <div class="header-decoration">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="bubble bubble-4"></div>
        <div class="floating-elements">
          <span class="element">🍸</span>
          <span class="element">🍷</span>
          <span class="element">🥃</span>
          <span class="element">🍾</span>
        </div>
      </div>
    </header>

    <!-- Section d'introduction -->
    <section class="intro-section glass-dark">
      <div class="intro-content">
        <h2 class="section-title text-contrast">🎯 Comment ça marche ?</h2>
        <div class="features-grid">
          <div class="feature-card glass">
            <div class="feature-icon">🎲</div>
            <h3 class="feature-title text-accent">Découverte Aléatoire</h3>
            <p class="feature-text text-contrast">Laissez-vous surprendre par notre sélection de 3 cocktails choisis au hasard</p>
          </div>
          <div class="feature-card glass">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title text-accent">Recettes Détaillées</h3>
            <p class="feature-text text-contrast">Ingrédients, mesures précises et instructions étape par étape</p>
          </div>
          <div class="feature-card glass">
            <div class="feature-icon">🔄</div>
            <h3 class="feature-title text-accent">Toujours du Nouveau</h3>
            <p class="feature-text text-contrast">Rafraîchissez à volonté pour découvrir de nouvelles saveurs</p>
          </div>
        </div>
      </div>
    </section>

    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>

    <!-- Footer avec informations supplémentaires -->
    <footer class="app-footer glass-dark">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title text-primary">🍹 TheCocktail</h3>
          <p class="footer-text text-contrast">Votre compagnon pour découvrir l'art de la mixologie</p>
        </div>
        <div class="footer-section">
          <h4 class="footer-subtitle text-accent">🌟 Catégories Populaires</h4>
          <ul class="footer-list">
            <li class="footer-item text-contrast">Cocktails Classiques</li>
            <li class="footer-item text-contrast">Drinks Sans Alcool</li>
            <li class="footer-item text-contrast">Shots & Liqueurs</li>
            <li class="footer-item text-contrast">Cocktails Tropicaux</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-subtitle text-accent">💡 Le Saviez-vous ?</h4>
          <p class="footer-text text-contrast">Le mot "cocktail" serait né aux États-Unis au début du 19ème siècle. Une théorie suggère qu'il vient de "cock's tail" (queue de coq) en référence aux plumes colorées utilisées pour décorer les verres.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-credit text-contrast">Données fournies par TheCocktailDB • Développé avec ❤️ par Louna</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-container {
  max-width: 1400px;
  margin: 0 auto;
  font-weight: normal;
  padding: 0 1rem;
}

header {
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  border-radius: 0 0 30px 30px;
  background: var(--card-gradient);
  backdrop-filter: blur(25px);
  box-shadow: var(--shadow-soft);
  transform: translateY(-50px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.header-visible {
  transform: translateY(0);
  opacity: 1;
}

.header-content {
  position: relative;
  z-index: 10;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cocktail-icon {
  font-size: 4rem;
  animation: bounce 2s infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 3px;
  text-shadow: 0 0 30px rgba(255, 23, 68, 0.4);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

.tagline {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  color: var(--text-light);
}

.subtitle {
  font-size: 1rem;
  font-weight: 400;
  margin: 0.5rem 0 2rem 0;
  color: var(--text-muted);
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.stats-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  padding: 1.5rem;
  text-align: center;
  min-width: 120px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.intro-section {
  margin: 3rem 0;
  padding: 3rem 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.feature-title {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.feature-text {
  line-height: 1.6;
  font-weight: 400;
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
    rgba(255, 23, 68, 0.4) 0%,
    rgba(255, 109, 0, 0.3) 50%,
    rgba(124, 77, 255, 0.2) 100%
  );
  border-radius: 50%;
  filter: blur(2px);
}

.bubble-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  right: 10%;
  animation: float 8s infinite ease-in-out;
}

.bubble-2 {
  width: 120px;
  height: 120px;
  bottom: 20%;
  left: 10%;
  animation: float 6s infinite ease-in-out reverse;
}

.bubble-3 {
  width: 150px;
  height: 150px;
  top: 40%;
  right: 5%;
  animation: float 10s infinite ease-in-out;
}

.bubble-4 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 20%;
  animation: float 7s infinite ease-in-out reverse;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.4;
  animation: floatSlow 15s infinite linear;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.element:nth-child(1) {
  top: 20%;
  left: 80%;
  animation-delay: 0s;
}

.element:nth-child(2) {
  top: 60%;
  right: 85%;
  animation-delay: -3s;
}

.element:nth-child(3) {
  top: 80%;
  left: 15%;
  animation-delay: -6s;
}

.element:nth-child(4) {
  top: 30%;
  right: 10%;
  animation-delay: -9s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(-10px) rotate(-3deg);
  }
}

@keyframes floatSlow {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.app-footer {
  margin-top: 4rem;
  padding: 3rem 2rem 1rem;
  border-radius: 30px 30px 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.footer-subtitle {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-item {
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.footer-item:before {
  content: "🍸 ";
  margin-right: 0.5rem;
}

.footer-text {
  line-height: 1.6;
  font-weight: 400;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-dark);
}

.footer-credit {
  font-weight: 400;
  opacity: 0.8;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}

@media (max-width: 768px) {
  header {
    padding: 2rem 1rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .logo-section {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .stats-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .intro-section {
    padding: 2rem 1rem;
  }
}
</style>