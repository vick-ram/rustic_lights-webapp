<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/images/rusticLogo.jpg" class="h-8" alt="Rustic Logo"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rustic Lights</span>
      </RouterLink>
      <div class="flex md:order-2 items-center">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text"
                 id="search-navbar"
                 v-model="searchQuery"
                 @keyup.enter="searchProduct"
                 @input="searchProduct"
                 class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search...">
        </div>

        <button @click="$router.push('cart')" type="button"
                class="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-800 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-blue-600 dark:hover:bg-blue-700 ml-2">
          <i class="material-icons">shopping_cart</i>
          <div
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {{totalProductsInCart}}
          </div>
        </button>
        <!--        Avatar image set up for the profile-->
        <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer ml-2.5"
            :src="profileImg"
            alt="User dropdown">

        <!-- Dropdown menu -->
        <div id="userDropdown"
             class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{{ user?.name }}</div>
            <div class="font-medium truncate">{{ user?.email }}</div>
          </div>
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
              <RouterLink :to="{name: 'Profile', params: {id: userId}}"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile
              </RouterLink>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div class="py-1">
            <RouterLink to="/auth/login"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="logout">Sign out
            </RouterLink>
          </div>
        </div>

      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="search-navbar"
                 class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search...">
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink to="/"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/services"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Services
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {computed, onMounted, Ref, ref} from 'vue'
import {useRouter} from 'vue-router'
import {initFlowbite, initDropdowns} from 'flowbite'
import {jwtDecode} from 'jwt-decode'
import {get} from "../boot";
import {AxiosError} from "axios";
import {Cart, Product, User} from "../models/Constants";

const user = ref<User>(null)
const token = localStorage.getItem('token')

const decodedToken = jwtDecode(token)
const userId = String(decodedToken.sub)

const router = useRouter()

const getImageUrl = (imageName) => new URL(`../assets/images/${imageName}`, import.meta.url).href;

const errorMessage: Ref<String> = ref('')
const fallbackImg = getImageUrl('avatar.jpg')
const baseUrl = 'http://localhost:8080/'
const imgUrl = (img) => `${baseUrl}${img}`
const profileImg = computed(() => {
  return user.value?.profile ? imgUrl(user.value.profile) : fallbackImg
})
const cart: Ref<Cart | null> = ref(null)
const productsInCart: Ref<Product[] | null> = ref([])
const clearErrorMessage = () => {
  setTimeout(() => {
    errorMessage.value = ''
  }, 3000)
}
const emit = defineEmits(['search'])
const searchQuery = ref('')

const searchProduct = () => {
  emit('search', searchQuery.value)
}

onMounted(() => {
  initFlowbite()
  initDropdowns()
  fetchUser()
  fetchCart()
})

const fetchUser = () => {
  get(`/users/${userId}`)
      .then((res) => {
        user.value = res.data.data
      })
      .catch((e: AxiosError) => {
        errorMessage.value = e.response?.data.message
        clearErrorMessage()
      })
}

const logout = () => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    router.push('/auth/login');
  }
};
const fetchCart = () => {
  get('/cart')
      .then((response) => {
        cart.value = response.data.data
        productsInCart.value = response.data.data.items.map(item => item.product)
      })
      .catch((e: AxiosError) => {
        console.log(e.response?.data.message)
      })
}
console.log(productsInCart.value?.length)
const totalProductsInCart = computed(() => {
  return productsInCart.value.length
})
</script>
