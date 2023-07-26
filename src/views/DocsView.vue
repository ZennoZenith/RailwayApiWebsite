<script setup lang="ts">
import { RouterView } from 'vue-router'
import DocsNav from '@/components/DocsNav.vue'
import { ref } from 'vue'

const isHamburgerOpen = ref(false)

function negateHamburger() {
  isHamburgerOpen.value = !isHamburgerOpen.value
}
</script>

<template>
  <!-- hamburger animation taken from : https://codepen.io/designcouch/pen/ExvwPY -->

  <div class="hamburger" :class="{ open: isHamburgerOpen }" @click="negateHamburger">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <main>
    <h1>Documentation</h1>
    <section class="docs-nav-container" :class="{ 'doc-nav-open': isHamburgerOpen }">
      <DocsNav @onDocNavLink="negateHamburger" />
    </section>
    <section class="docs-section">
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
.hamburger {
  display: none;
  position: fixed;
}
.hamburger span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 9px;
}

.hamburger span:nth-child(4) {
  top: 18px;
}

.hamburger.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

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

  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.docs-section {
  grid-area: DocsSection;
}

@media (width <= 800px) {
  main {
    display: block;
    margin: 2em 1em;
    padding: 0 1em;
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

  .hamburger {
    display: block;
    position: fixed;
    width: 2em;
    height: 0.66em;
    left: 10px;
    top: 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 10;
  }
}
</style>
