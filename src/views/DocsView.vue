<script setup lang="ts">
import { RouterView } from 'vue-router'
import DocsNav from '@/components/DocsNav.vue'
import HamburgerComponent from '@/components/HamburgerComponent.vue'
import { ref } from 'vue'

const isHamburgerOpen = ref(false)

function negateHamburger() {
  isHamburgerOpen.value = !isHamburgerOpen.value
}

function closeHamburger() {
  isHamburgerOpen.value = false
}
</script>

<template>
  <HamburgerComponent
    id="hamburger"
    :hamburger-open-state="isHamburgerOpen"
    @on-hamburger-clicked="negateHamburger" />
  <main>
    <h1>Documentation</h1>
    <section
      id="docs-nav-container"
      class="docs-nav-container"
      :class="{ 'doc-nav-open': isHamburgerOpen }">
      <DocsNav
        :hamburger-open-state="isHamburgerOpen"
        @onDocNavLink="closeHamburger"
        @close-hamburger="closeHamburger" />
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
  padding: 0 max(12vw, 1em);
  display: grid;
  row-gap: 1.5em;
  column-gap: 2em;
  grid-template-areas:
    '. Heading'
    'DocsNav DocsSection';
  grid-template-columns: 1.4fr 4fr;
}

h1 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  /*font-size: 3.5em;*/
  font-size: 2rem;
  letter-spacing: 1px;
}

.docs-nav-container {
  grid-area: DocsNav;
  padding-left: 1em;

  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.docs-section {
  grid-area: DocsSection;
}

@media (width <=800px) {
  main {
    display: block;
    padding: 0 2em;
  }

  .docs-nav-container {
    margin: 0;
    padding-top: 5em;
    position: fixed;
    /* height: 100vh; */
    width: 80dvw;
    top: 0;
    left: -90dvw;
    bottom: 0;
    background-color: white;
    border-right: solid rgba(128, 128, 128, 0.898) 2px;
    z-index: 9;
  }

  .doc-nav-open {
    left: 0;
  }
}
</style>
