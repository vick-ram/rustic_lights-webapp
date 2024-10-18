<script setup lang="ts">
import {onMounted} from 'vue'
import {initCarousels, initFlowbite} from 'flowbite'
import FooterComponent from "../components/FooterComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import CardComponent from "../components/CardComponent.vue";

onMounted(() => {
  initFlowbite()
  initCarousels()
})



</script>

<template>
  <div>
    <CarouselComponent />
    <h1 class="text-2xl font-extrabold text-center mt-8">Featured Products</h1>
    <div class="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardComponent :cardData="{
          title: 'Amber Glow Lantern - lantern-style features a warm amber glow and cozy',
          price: 4700,
          image: 'image1.jpeg'
        }"/>
        <CardComponent :cardData="{
          title: 'Rustic Iron Cage Pendant - With classic iron cage design',
          price: 5000,
          image: 'image2.jpeg'
        }"/>
        <CardComponent :cardData="{
          title: 'Wooden Beam Chandelier - Crafted from wood and accelerated with metal',
          price: 2400,
          image: 'image3.jpeg'
        }"/>
        <CardComponent :cardData="{
          title: 'Edison Bulb Mason Jar Sconce - The mason jar wall sconce',
          price: 1100,
          image: 'image4.jpeg'
        }"/>
        <CardComponent :cardData="{
          title: 'Vintage Rope Hanging Light - Complementing the rustic look of the light',
          price: 7200,
          image: 'image5.jpeg'
        }"/>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>