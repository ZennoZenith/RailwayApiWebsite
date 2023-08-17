<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({ hamburgerOpenState: { type: Boolean, required: true } })
const emits = defineEmits(['onDocNavLink', 'closeHamburger'])

document.onclick = function (event) {
  if (props.hamburgerOpenState === false) return

  if (
    (event.target as HTMLElement).id === 'docs-nav-container' ||
    (event.target as HTMLElement).id === 'hamburger'
  ) {
    return
  }
  console.log(event.target)
  emits('closeHamburger')
}
</script>

<template>
  <ul @click="$emit('onDocNavLink')">
    <li><RouterLink class="nav-link" to="/docs">Introduction</RouterLink></li>
    <li><RouterLink class="nav-link" to="/docs/authentication">Authentication</RouterLink></li>
    <li><RouterLink class="nav-link" to="/docs/errorcodes">Error Codes</RouterLink></li>
    <li><RouterLink class="nav-link" to="/docs/responsecodes">Response Codes</RouterLink></li>
    <li><RouterLink class="nav-link" to="/docs/versioning">Versioning</RouterLink></li>
    <li><RouterLink class="nav-link" to="/docs/operations">Operations</RouterLink></li>
    <ul>
      <li><RouterLink class="nav-link" to="/docs/operation/train-list">GET /trains</RouterLink></li>
      <li>
        <RouterLink class="nav-link" to="/docs/operation/train-info"
          >GET /trains/{trainNumber}</RouterLink
        >
      </li>
      <li>
        <RouterLink class="nav-link" to="/docs/operation/schedule"
          >GET /schedules/{trainNumber}</RouterLink
        >
      </li>
      <li>
        <RouterLink class="nav-link" to="/docs/operation/station-list">GET /stations</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/docs/operation/station-info"
          >GET /stations/{stationCode}</RouterLink
        >
      </li>
      <li>
        <RouterLink class="nav-link" to="/docs/operation/trains-between-stations"
          >GET /trainsBtwStations</RouterLink
        >
      </li>
      <li><RouterLink class="nav-link" to="/docs/operation/misc">Misc. routes</RouterLink></li>
    </ul>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}

ul > ul {
  padding-left: 2ch;
}
li {
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  line-height: 1.2em;
  margin-bottom: 15px;
}

.nav-link {
  /* height: 100%; */
  padding-bottom: 1em;
  font-size: 1em;
  text-decoration: none;
  color: #282828;
  transition: all 100ms ease;
  /* white-space: nowrap; */
}

.nav-link:hover {
  color: rgb(241, 90, 34);
}

.active-link-exact {
  color: rgb(241, 90, 34);
}
</style>
