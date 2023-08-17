<script setup lang="ts">
defineProps({ hamburgerOpenState: { type: Boolean, required: true } })
defineEmits(['onHamburgerClicked'])
</script>

<template>
  <!-- hamburger animation taken from : https://codepen.io/designcouch/pen/ExvwPY -->
  <div class="hamburger" :class="{ open: hamburgerOpenState }" @click="$emit('onHamburgerClicked')">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.hamburger {
  display: none;
}
.hamburger > * {
  pointer-events: none;
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

@media (width <=800px) {
  .hamburger {
    display: block;
    position: fixed;
    height: 2em;
    width: 2em;
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
