<script setup lang="ts">
import {onMounted} from 'vue'
import {initFlowbite, initTabs} from 'flowbite'

onMounted(() => {
  initFlowbite()
  initTabs()
})
</script>

<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="description-tab" data-tabs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="false">Description</button>
      </li>
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="review-tab" data-tabs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Reviews</button>
      </li>
    </ul>
  </div>
  <div id="default-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="description" role="tabpanel" aria-labelledby="description-tab">
      <div class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        <img src="../assets/images/Rustic.jpeg" alt="Product Image" class="w-full md:w-1/2 rounded-lg shadow-md h-80 object-cover" />
        <div class="flex flex-col">
          <p class="mt-2 text-gray-700 md:w-1/2">
            Here you can add the product description. This section can be expanded
            to provide more details about the product features, specifications, and
            other relevant information. Make sure to include any key points that
            would attract customers to the product.
          </p>
          <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div  class="hidden p-4 dark:bg-gray-800" id="review" role="tabpanel" aria-labelledby="review-tab">
      <!-- Main container for the three sections -->
      <div class="flex flex-col justify-start items-center w-full bg-white border p-5 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <!-- Rating Section -->
        <div class="flex-1 space-y-2 lg:text-left w-full">
          <div class="text-4xl font-bold">5/5</div>
          <div class="text-md text-gray-400 justify-start">Average rating</div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>

            <div class="text-xs text-gray-400">(3,657 reviews)</div>
        </div>

        <div class="border-l border-gray-300 dark:border-gray-600 mx-4 h-40 p-3"></div>

        <!-- Clients Section -->
        <div class="flex-1 space-y-2 lg:text-left w-full">
          <div class="text-4xl font-bold">100M+</div>
          <div class="text-md text-gray-400">Worldwide Clients</div>
          <div class="flex justify-start lg:justify-start items-center space-x-4 rtl:space-x-reverse">
            <img src="https://via.placeholder.com/40x20" alt="Ford" class="h-6" />
            <img src="https://via.placeholder.com/40x20" alt="Visa" class="h-6" />
            <img src="https://via.placeholder.com/40x20" alt="BMW" class="h-6" />
          </div>
        </div>

        <div class="border-l border-gray-300 dark:border-gray-600 mx-4 h-40 p-3"></div>

        <!-- Review Section -->
        <div class="flex-1 space-y-2 lg:text-left w-full">
          <div class="text-2xl text-gray-800 font-semibold">Do you own or have you used the product?</div>
          <div class="text-md text-gray-400">Give your opinion by rating the product</div>
          <div class="flex justify-start lg:justify-start space-x-1 rtl:space-x-reverse">
            <div class="flex items-center">
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>

            <span class="text-gray-400">Give a note</span>
          </div>
          <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Write a customer review
          </button>
        </div>
      </div>
      <!-- Filters and sorting -->
      <div class="w-full flex flex-col sm:flex-row md:flex-row justify-between items-center mt-4">
        <p>Showing <span class="font-semibold">200 </span>Customer Reviews</p>
        <div class="flex flex-col md:flex-row sm:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
          <select id="ratings" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-auto">
            <option selected>All Reviews</option>
            <option>5 stars</option>
            <option>4 stars</option>
            <option>3 stars</option>
            <option>2 stars</option>
            <option>1 star</option>
          </select>
          <select id="sort" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-auto">
            <option selected>Recently Added</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
      <div class="border-t border-gray-300 w-full dark:border-gray-600 my-4"></div>

      <article>
        <div class="flex items-center mb-4">
          <img class="w-10 h-10 me-4 rounded-full" src="../assets/images/avatar.jpg" alt="">
          <div class="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
          </div>
        </div>
        <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
        </div>
        <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
        <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
        <p class="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
        <aside>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
          <div class="flex items-center mt-3">
            <a href="#" class="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
            <a href="#" class="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
          </div>
        </aside>
      </article>

    </div>
  </div>
</template>

<style scoped>

</style>
<!--
<template>
  <div class="max-w-4xl mx-auto mt-8">
    &lt;!&ndash; Tabs Navigation &ndash;&gt;
    <div class="flex border-b border-gray-300">
      <button
          @click="activeTab = 'description'"
          :class="activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
          class="py-2 px-4 focus:outline-none"
      >
        Description
      </button>
      <button
          @click="activeTab = 'reviews'"
          :class="activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
          class="py-2 px-4 focus:outline-none"
      >
        Reviews
      </button>
    </div>

    &lt;!&ndash; Tab Content &ndash;&gt;
    <div v-if="activeTab === 'description'" class="p-4">
      <h2 class="text-xl font-bold mb-4">Product Description</h2>
      <div class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        <p class="mt-2 text-gray-700 md:w-1/2">
          Here you can add the product description. This section can be expanded
          to provide more details about the product features, specifications, and
          other relevant information. Make sure to include any key points that
          would attract customers to the product.
        </p>
        <img src="../assets/images/Rustic.jpeg" alt="Product Image" class="w-full md:w-1/2 rounded-lg shadow-md" />
      </div>
    </div>
    <div v-if="activeTab === 'reviews'" class="p-4">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-xl font-bold">5/5</h2>
          <p class="text-sm text-gray-500">(3,657 reviews)</p>
        </div>
        <div>
          <p>100M+ Worldwide Clients</p>
          <div class="flex items-center space-x-2">
            <img src="../assets/images/Rustic.jpeg" alt="Client 1" class="h-5" />
            <img src="../assets/images/Rustic.jpeg" alt="Client 2" class="h-5" />
            <img src="../assets/images/Rustic.jpeg" alt="Client 3" class="h-5" />
          </div>
        </div>
        <div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Write a customer review</button>
        </div>
      </div>

      &lt;!&ndash; Review List &ndash;&gt;
      <div v-for="review in reviews" :key="review.id" class="border-b border-gray-200 py-4">
        <div class="flex items-center space-x-4">
          <div class="font-semibold">{{ review.user }}</div>
          <p class="text-gray-500">{{ review.date }}</p>
        </div>
        <div class="mt-2">
          <h3 class="font-bold">{{ review.title }}</h3>
          <p>{{ review.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State for active tab
const activeTab = ref('description');

// Example reviews data
const reviews = ref([
  { id: 1, user: 'Micheal Gough', date: 'November 18, 2023', title: 'Fast and reliable', content: 'My old iMac was from 2013. This replacement was well needed...' },
  // Add more review data as needed
]);
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>-->

