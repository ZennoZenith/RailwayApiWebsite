<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink class="text-decoration-none company-logo-container" to="/">
    <div class="company-logo">
      <img alt="RailwayAPI logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="company-name">RailwayAPI</h1>
    </div>
  </RouterLink>

  <nav class="nav-link-container">
    <a href="https://github.com/ZennoZenith/RailwayApiWebsite" class="github-logo-link" target="_blank">
      <img alt="Github logo" src="@/assets/github-mark/github-mark.svg" class="github-logo" />
    </a>
    <RouterLink to="/" class="nav-link text-decoration-none">API Home</RouterLink>
    <!-- <RouterLink to="/" class="nav-link text-decoration-none">Quickstart</RouterLink> -->
    <RouterLink to="/docs" class="nav-link text-decoration-none">Documentation</RouterLink>
    <RouterLink to="/wrapper" class="nav-link text-decoration-none">Wrappers</RouterLink>
  </nav>
</template>

<style scoped>
.company-logo-container {
  width: fit-content;
  display: block;
  margin: 0 auto;
  border: none !important;
  margin-bottom: -1px;
}


.company-name {
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
}

.company-logo {
  padding-top: 1em;
  display: flex;
  width: 20em;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 5em;
  margin: 0 -1.5em;
}

.active-link {
  border-bottom: 1px rgb(241, 90, 34) solid;
  margin-bottom: -1px;
}

.nav-link-container {
  position: relative;
  width: 100vw;
  display: flex;
  gap: max(2em, 4vw);
  justify-content: center;
  border-bottom: 1px rgba(151, 151, 149, 0.304) solid;
}

.github-logo-link {
  position: absolute;
  right: 1em;
  top: -5em;
}

.github-logo {
  width: 30px;
}

.nav-link {
  padding: 1em 0;
  font-size: 1em;
  color: #282828;
}

.nav-link:hover {
  color: rgb(241, 90, 34);
  border-bottom: 1px rgb(241, 90, 34) solid;
  margin-bottom: -1px;
}

/* @media (prefers-color-scheme: dark) {
  .nav-link {
    color: rgb(208, 204, 204);
  }
} */
</style>
