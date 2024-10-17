<script setup lang="ts">
import {onMounted} from 'vue'
import {initFlowbite, initCarousels} from 'flowbite'
import FooterComponent from "../components/FooterComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import NavigationBarComponent from "../components/NavigationBarComponent.vue";
import CardComponent from "../components/CardComponent.vue";

onMounted(() => {
  initFlowbite()
  initCarousels()
})


</script>

<template>
  <div>
    <NavigationBarComponent />
    <CarouselComponent />
    <h1 class="text-2xl font-extrabold text-center mt-8">Featured Products</h1>
    <div class="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>