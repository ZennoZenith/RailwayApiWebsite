<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <header>
    <NavComponent />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  position: sticky;
  top: -5.5em;
  background-color: white;
}
</style>
