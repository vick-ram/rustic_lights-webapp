<script setup lang="ts">
import {onMounted, ref, Ref} from 'vue'
import {initFlowbite, initTabs, initModals} from 'flowbite'
import {useRoute} from 'vue-router'
import {Product, Review, User} from "../models/Constants";
import {get, post} from "../boot";
import {AxiosError, AxiosResponse} from "axios";
import {formatPrice} from "../utils/formatPrice";
import {jwtDecode} from 'jwt-decode'
import {formatDateTime} from "../utils/formatDate";


const route = useRoute()
const productId = String(route.params.id)
const product: Ref<Product | null> = ref<Product>(null)
const user: Ref<User | null> = ref(null)
const decodedToken = jwtDecode(localStorage.getItem('token') || '')
const userId = decodedToken.sub
const formattedDateTime = ref('')
const errorMessage = ref('')

const review: Ref<Review | null> = ref(null)
const reviews: Ref<Review[] | null> = ref([])

const reviewData = {
  productId: productId,
  userId: userId,
  rating: 0,
  commentTitle: '',
  comment: '',
  helpful: 0,
}

const addReview = () => {
  post(`/reviews/${productId}`, reviewData)
      .then((response) => {
        console.log('Sending', reviewData);
        review.value = response.data.data;
        console.log('Review added:', response.data);
      })
      .catch((e: AxiosError) => {
        console.error('Error adding review:', e);
        errorMessage.value = e.response?.data?.message || 'An unknown error occurred';
      });
};


const fetchReviews = () => {
  get(`/reviews/${productId}`)
      .then((res: AxiosResponse) => {
        reviews.value = res.data.data;
      })
      .catch((e) => {
        console.log('Error fetching reviews:', e.response?.message);
      })
}


const fetchProduct = () => {
  get(`/products/${productId}`)
    .then((res: AxiosResponse) => {
      product.value = res.data.data;
    })
    .catch((e) => {
      console.log('Error fetching product:', e.response?.message);
    });
};

const baseUrl = 'http://localhost:8080/'
const getImgUrl = (img: string) => {
  return baseUrl + img
}

const addToCart = (product: Product) => {
  post('/cart', null, {
    params: {
      productId: product.id,
      quantity: 1
    }
  })
      .then((response) => {
        console.log(response.data)
      })
      .catch((e: AxiosError) => {
        console.log(e.response?.data.message)
      })
}

const fetchUser = () => {
  get(`/users/${userId}`)
    .then((res: AxiosResponse) => {
      user.value = res.data.data;
    })
    .catch((e) => {
      console.log('Error fetching user:', e.response?.message);
    });
};

onMounted(() => {
  initFlowbite()
  initTabs()
  initModals()
  if (productId) {
    fetchProduct()
  }
  fetchUser()
  fetchReviews()
  formattedDateTime.value = formatDateTime(user.value?.createdAt)
})
</script>

<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700 mt-16">
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
        <div class="container mx-auto p-6">
          <div v-if="product" class="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
            <!-- Product Image -->
            <div class="flex-1 md:w-1/2 mb-4 md:mb-0">
              <img :src="getImgUrl(product.image)" alt="Product Image" class="w-full h-auto rounded-lg object-cover" />
            </div>

            <!-- Product Details -->
            <div class="flex-1 md:w-1/2 md:ml-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-2">
                {{ product.name }} - {{product.shortDescription}}
              </h2>
              <p class="text-gray-600 mb-4 mt-6">{{ product.detailedDescription }}</p>
              <p class="text-xl font-semibold text-gray-800 mb-6">KES {{ formatPrice(product.price) }}</p>

              <!-- Action Buttons -->
              <div class="flex space-x-4">
                <button @click="addToCart(product)" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
                <button @click="buyNow" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-else class="text-center py-10">
            <p class="text-gray-500">Loading product details...</p>
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
          <div class="text-4xl font-bold">20+</div>
          <div class="text-md text-gray-400">CountryWide Clients</div>
          <div class="flex justify-start lg:justify-start items-center space-x-4 rtl:space-x-reverse">
            <img src="https://via.placeholder.com/40x20" alt="Ubuntu Farm" class="h-6" />
            <img src="https://via.placeholder.com/40x20" alt="Joka Jok" class="h-6" />
            <img src="https://via.placeholder.com/40x20" alt="TI" class="h-6" />
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
          <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Write a customer review
          </button>
        </div>
      </div>
      <!-- Filters and sorting -->
      <div class="w-full flex flex-col sm:flex-row md:flex-row justify-between items-center mt-4">
        <p>Showing <span class="font-semibold">0 </span>Customer Reviews</p>
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
      <!--      modal to add a review-->


      <!-- Main modal -->
      <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Add Comment and Review
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="addReview" class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label for="commentTitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment Title</label>
                  <input v-model="reviewData.commentTitle" type="text" name="commentTitle" id="commentTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type comment title" required="">
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                  <input v-model="reviewData.rating" type="number" name="rating" id="rating" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required="">
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label for="helpful" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Helpful</label>
                  <input v-model="reviewData.helpful" type="number" name="helpful" id="helpful" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required="">
                </div>
                <div class="col-span-2">
                  <label for="comment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
                  <textarea v-model="reviewData.comment" id="comment" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write comment here"></textarea>
                </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Create Comment
              </button>
            </form>
          </div>
        </div>
      </div>


      <div class="border-t border-gray-300 w-full dark:border-gray-600 my-4"></div>

      <article v-for="rev in reviews" :key="rev.id">
        <div class="flex items-center mb-4">
          <img class="w-10 h-10 me-4 rounded-full" :src="getImgUrl(user?.profile)" alt="">
          <div class="font-medium dark:text-white">
            <p>{{user?.name}} <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
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
          <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">{{rev.commentTitle}}</h3>
        </div>
        <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in Kenya on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
        <p class="mb-2 text-gray-500 dark:text-gray-400">{{rev.comment}}</p>
        <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
        <aside>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400"><span>{{rev.helpful}}</span> people found this helpful</p>
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

