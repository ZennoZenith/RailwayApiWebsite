<script setup lang="ts">
import { RouterView } from 'vue-router'
import DocsNav from '@/components/DocsNav.vue'
</script>

<template>
  <main>
    <h1>Documentation</h1>
    <section class="docs-nav-container">
      <DocsNav />
    </section>
    <section class="docs-section">
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
.active-link {
  border-bottom: 1px rgb(241, 90, 34) solid;
  margin-bottom: -1px;
}

main {
  margin: 2em 2em;
  padding: 0 max(12vw, 1em);
  display: grid;
  row-gap: 1.5em;
  column-gap: 2em;
  grid-template-areas:
    'Heading Heading'
    'DocsNav DocsSection';
  grid-template-columns: 1.4fr 4fr;
}

h1 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 3.5em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

.docs-nav-container {
  grid-area: DocsNav;
  padding-left: 1em;
}
.docs-section {
  grid-area: DocsSection;
}
</style>
