<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import LoadingSprout from './common/LoadingSprout.vue'
import { loadAssets } from './utils/loadAssets.util'

const isLoading = ref(true)
</script>

<template>
  <div class="sky-scroll">
    <img src="/backgrounds/bg.png" class="sky" />
    <img src="/backgrounds/bg.png" class="sky" />
  </div>

  <LoadingSprout
    v-if="isLoading"
    class="loading-overlay"
    :load-assets="loadAssets"
    @finished="isLoading = false"
  />

  <div v-show="!isLoading">
    <header>
      <nav>
        <div class="logo">
          <img class="logo-image" src="/logo.png" alt="Daily Sprout logo" />
        </div>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link pixel-button">Home</RouterLink>
          <RouterLink to="/task-management" class="nav-link pixel-button management"
            >Task Management</RouterLink
          >
          <RouterLink to="/garden" class="nav-link pixel-button">Garden</RouterLink>
          <RouterLink to="/about" class="nav-link pixel-button">About</RouterLink>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style>
body {
  background-color: var(--pixel-sky-bg);
  margin: 0;
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo img {
  width: 150px;
}

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  gap: 50px;
  margin-bottom: 50px;
}

.nav-links {
  display: flex;
  gap: 50px;
}

.nav-link {
  min-height: 40px;
  min-width: 50px;
  max-width: 100%;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: var(--pixel-tertiary-button-bg);
  border: 3px solid var(--pixel-tertiary-button-border);
  text-decoration: none;
  color: var(--pixel-tertiary-button-border);
}

.nav-link:hover {
  background-color: var(--pixel-tertiary-button-hover);
}

.router-link-active {
  background-color: var(--pixel-tertiary-button-hover);
}

.sky-scroll {
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  display: flex;
}

.sky {
  width: 200%;
  animation: moveClouds 120s linear infinite;
}

.sky:nth-child(2) {
  margin-left: -1px;
}

@keyframes moveClouds {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 932px) {
  nav {
    margin-bottom: 0;
    flex-direction: column;
  }

  .nav-links {
    display: flex;
  }

  .nav-link {
    font-size: 16px;
  }

  .management {
    height: auto;
  }
}

@media (max-width: 600px) {
  nav {
    width: 100%;
    padding: 30px;
  }
  .nav-links {
    gap: 15px;
  }

  .nav-link {
    font-size: 12px;
  }
}
</style>

<style scoped></style>
