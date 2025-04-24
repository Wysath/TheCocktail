# 🍹 TheCocktail

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)
![Tests](https://img.shields.io/badge/Tests-Vitest-success.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-informational.svg)

> Une application web élégante qui affiche **3 cocktails aléatoires** depuis l'API _TheCocktailDB_.  
> Interface moderne, animations fluides et design responsive au rendez-vous.

<p align="center">
  <img alt="TheCocktail Preview" src="https://placeholder-for-screenshot.com/" width="600">
</p>

---

## 📋 Fonctionnalités

- 🎲 Affichage de **3 cocktails aléatoires** à chaque chargement
- 🔄 Rafraîchissement des cocktails via un bouton dédié
- 🌈 Interface animée avec transitions fluides
- 🍸 Détails complets pour chaque cocktail :
  - Nom, catégorie, type (alcoolisé ou non)
  - Ingrédients avec mesures
  - Instructions de préparation
  - Type de verre recommandé
- 🃏 Cartes interactives avec expansion pour plus d'infos
- 📱 Design **responsive** pour tous les appareils
- ❗ Gestion des erreurs & états de chargement

---

## 🛠️ Technologies utilisées

- **Vue.js 3** – Framework front-end (Composition API)
- **TypeScript** – Typage fort et maintenabilité
- **Pinia** – Gestion d’état moderne
- **Vue Router** – Routage SPA
- **Vite** – Build tool ultra-rapide
- **Vitest + Vue Test Utils** – Tests unitaires
- **Playwright** – Tests end-to-end (e2e)
- **Docker** – Conteneurisation simple

---

## 📦 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/TheCocktail.git
cd TheCocktail

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

🔗 L'application sera accessible sur : [http://localhost:5173](http://localhost:5173)

---

## 🚀 Déploiement avec Docker

```bash
# Construire l'image Docker
docker build -t thecocktail .

# Lancer le conteneur
docker run -p 8080:80 thecocktail
```

🌍 L'application sera disponible sur : [http://localhost:8080](http://localhost:8080)

---

## 🧪 Tests

Suite de tests complète pour garantir la qualité du code :

```bash
# Lancer les tests unitaires
npm run test:unit

# Lancer les tests end-to-end
npm run test:e2e
```

✅ **Couverture des tests** :

- Rendu des informations de cocktails
- Interactions et comportements utilisateurs
- Gestion des cas limites (ex: ingrédients manquants)
- Accessibilité
- Design responsive

---

## 📁 Structure du projet

```
src/
├── assets/        # Ressources statiques (CSS, images)
├── components/    # Composants Vue réutilisables
├── services/      # Services d’appel API
├── stores/        # Pinia pour gestion d’état
├── types/         # Définition des types TypeScript
├── views/         # Pages principales de l’app
└── router/        # Configuration du routage
```

---

## 📱 Responsive Design

Optimisé pour tous les formats :

- 🖥️ Ordinateurs
- 📱 Smartphones
- 📟 Tablettes

---

## ✨ Utilisation de l’API

Données récupérées depuis l’API _TheCocktailDB_ :  
📡 Endpoint principal utilisé :

```
/random.php
```

Permet de récupérer un cocktail aléatoire.

---

## 👤 Auteur

Développé avec ❤️ par **Louna PETITFILS**

---
