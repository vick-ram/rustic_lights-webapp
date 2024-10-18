<script setup lang="ts">
import NavigationBarComponent from "../components/NavigationBarComponent.vue";
</script>

<template>
<div>
  <NavigationBarComponent/>
  <main>
    <RouterView/>
  </main>
</div>
</template>

<style scoped>

</style>