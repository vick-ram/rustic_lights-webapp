<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/images/Applique.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">Special Offer 1</h3>
          <p class="text-sm">Get 50% off on all products!</p>
        </div>
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/images/Arana.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">Limited Time Deal</h3>
          <p class="text-sm">Buy one get one free!</p>
        </div>
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/images/Industrial.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">New Arrivals</h3>
          <p class="text-sm">Check out the latest collection!</p>
        </div>
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/images/Lampada.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">Exclusive Designs</h3>
          <p class="text-sm">Unique and stylish lighting solutions!</p>
        </div>
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/images/Rustic.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">Rustic Charm</h3>
          <p class="text-sm">Add a rustic touch to your home decor!</p>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Scoped styles can go here if needed */
</style>


<!--This is a carousel made not using flowbite Carousel component, but rather from pure tailwind classes-->
<!--<template>
  <div class="relative w-full overflow-hidden">
    &lt;!&ndash; Carousel Slides &ndash;&gt;
    <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
          v-for="(slide, index) in slides"
          :key="index"
          class="flex-shrink-0 w-full"
      >
        <div class="aspect-w-16 aspect-h-9">
          <img :src="slide.image" alt="Marketing Slide" class="w-full h-full object-cover" />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 class="text-xl font-bold">{{ slide.title }}</h3>
          <p class="text-sm">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    &lt;!&ndash; Navigation Buttons &ndash;&gt;
    <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white focus:outline-none"
    >
      &larr;
    </button>
    <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white focus:outline-none"
    >
      &rarr;
    </button>

    &lt;!&ndash; Indicators &ndash;&gt;
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :class="['w-3 h-3 rounded-full', currentSlide === index ? 'bg-white' : 'bg-gray-400']"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample slide data (can be replaced with props or API data)
const slides = [
  {
    image: 'https://via.placeholder.com/800x450',
    title: 'Special Offer 1',
    description: 'Get 50% off on all products!',
  },
  {
    image: 'https://via.placeholder.com/800x450',
    title: 'Limited Time Deal',
    description: 'Buy one get one free!',
  },
  {
    image: 'https://via.placeholder.com/800x450',
    title: 'New Arrivals',
    description: 'Check out the latest collection!',
  },
];

const currentSlide = ref(0);
const totalSlides = slides.length;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}
</script>

<style scoped>
/* Scoped styles can go here if needed */
</st-->yle>
