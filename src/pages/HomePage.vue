<script setup lang="ts">
import {watch, onMounted, Ref, ref} from 'vue'
import {initCarousels, initFlowbite} from 'flowbite'
import FooterComponent from "../components/FooterComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import {Product} from "../models/Constants";
import {get, post} from "../boot";
import {AxiosError} from "axios";
import {formatPrice} from '../utils/formatPrice'
import {useRoute} from 'vue-router'

const products: Ref<Product[]> = ref([])
const errorMessage: Ref<String | null> = ref('')
const isLoading: Ref<Boolean> = ref(false)
const route = useRoute()

const fetchProducts = (searchQuery = '') => {
  isLoading.value = true
  get('/products', { params: { search: searchQuery } })
      .then((response) => {
        products.value = response.data.data
      })
      .catch((e: AxiosError) => {
        errorMessage.value = e.response?.data.message
      })
      .finally(() => {
        isLoading.value = false
      })
}

watch(() => route.query.search, (newSearchQuery) => {
  fetchProducts(newSearchQuery)
})

const addToProductToCart = (product: Product) => {
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

onMounted(() => {
  initFlowbite()
  initCarousels()
  fetchProducts(route.query.search as string)
})

</script>

<template>
  <div class="mt-16">
    <CarouselComponent/>
    <h1 class="text-2xl font-extrabold text-center mt-8">Featured Products</h1>
    <div class="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardComponent
            v-for="product in products"
            :key="product.id"
            :cardData="{
              title: product.name,
              price: `KES. ${formatPrice(product.price)}`,
              image: `http://localhost:8080/${product.image}`,
              isLoading: isLoading,
              id: product.id
            }"
            @addToCart="addToProductToCart(product)"
        />
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>