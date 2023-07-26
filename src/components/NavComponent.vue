<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <a href="https://github.com/ZennoZenith/RailwayApiWebsite" target="_blank">
    <img
      alt="Github logo"
      class="github-logo"
      src="@/assets/github-mark/github-mark.svg"
      width="125"
      height="125" />
  </a>

  <RouterLink class="text-decoration-none company-logo-container" to="/">
    <div class="company-logo">
      <img alt="RailwayAPI logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="company-name">RailwayAPI</h1>
    </div>
  </RouterLink>

  <nav class="nav-link-container">
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

.github-logo {
  position: absolute;
  right: 1em;
  top: 1em;
  height: 2em;
  width: 2em;
}
.company-name {
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
}
.company-logo {
  margin: 1em 0;
  /* padding-right: 4em; */
  /* height: 5em; */
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
  display: flex;
  gap: max(3em, 4vw);
  justify-content: center;
  border-bottom: 1px rgba(151, 151, 149, 0.304) solid;
}

.nav-link {
  /* height: 100%; */
  padding-bottom: 1em;
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
