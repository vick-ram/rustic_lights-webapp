<script setup lang="ts">
import {computed, ref, onMounted} from 'vue';
import {get, patch, post} from '../boot';
import {Cart, Order, Product} from "../models/Constants";
import {AxiosError, AxiosResponse} from "axios";

const cart = ref<Cart | null>(null);
const productsInCart = ref<Product[] | null>([]);
const products = ref<Product[] | null>([]);
const order = ref<Order | null>(null);

const baseUrl = 'http://localhost:8080/';

const getImgUrl = (imageName) => {
  return baseUrl + imageName;
};

const fetchCart = () => {
  get('/cart')
    .then((response) => {
      cart.value = response.data.data;
      productsInCart.value = response.data.data.items.map(item => item.product);
      console.log(productsInCart.value);
    })
    .catch((e: AxiosError) => {
      console.log(e.response?.data.message);
    });
};

const totalAmount = computed(() => {
  return cart.value?.items.map(item => parseFloat(item.unitPrice)).reduce((a, b) => a + b, 0) || 0;
});

const discountedAmount = computed(() => {
  return cart.value?.items.map(item => parseFloat(item.discountPrice)).reduce((a, b) => a + b, 0) || 0;
});

const discount = computed(() => {
  return totalAmount.value - discountedAmount.value;
});

const addProductToFavourite = (product: Product) => {
  patch(`/products/${product.id}`, null, {
    params: {favourite: true}
  })
    .then((e: AxiosError) => {
      console.log(e.response?.data.message);
    });
};

const fetch4Products = () => {
  get('/products')
    .then((response) => {
      products.value = response.data.data.slice(0, 4);
    })
    .catch((e: AxiosError) => {
      console.log(e.response?.data.message);
    });
};

const createOrder = () => {
  post("/orders", null)
    .then((res: AxiosResponse) => {
      if (res.data.status === true) {
        console.log(res.data.data);
        order.value = res.data.data;
      }
    })
    .catch((e: AxiosError) => {
      if (e.response) {
        errorMessage.value = e.response.data.message;
        console.log(e.response.data.message);
      }
    });
};

const deleteProductFromCart = (productId: string) => {
  productsInCart.value = productsInCart.value?.filter(pr => pr.id !== productId);
  patch('/cart', null, {
    params: {productId: productId}
  })
    .then((response: AxiosResponse) => {
      console.log(response.data.message);
    })
    .catch((e: AxiosError) => {
      console.log(e.response?.data.message);
    });
};

const incrementQuantity = (product: Product) => {
  console.log("Incrementing, current quantity:", product.quantity);
  product.quantity += 1;
  updateProductQuantity(product);
};

const decrementQuantity = (product: Product) => {
  console.log("Decrementing, current quantity:", product.quantity);
  if (product.quantity > 1) {
    product.quantity -= 1;
    updateProductQuantity(product);
  }
};


const updateProductQuantity = (product: Product) => {
  patch(`/cart/${product.id}`, null, {
    params: {quantity: product.quantity}
  })
    .then((response: AxiosResponse) => {
      console.log(response.data.message);
    })
    .catch((e: AxiosError) => {
      console.log(e.response?.data.message);
    });
};

onMounted(() => {
  fetchCart();
  fetch4Products();
});
</script>

<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mt-14">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <!--          Product card in cart-->
          <div class="space-y-6">
            <div
                v-for="product in productsInCart"
                :key="product.id"
                class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div
                  class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" class="shrink-0 md:order-1">
                  <img :src="getImgUrl(product.image)" alt="product image" class="w-32 h-32 object-cover">
                </a>

                <label for="counter-input" class="sr-only">Choose quantity:</label>
                <div class="flex items-center justify-between md:order-3 md:justify-end">
                  <div class="flex items-center">
                    <button @click="decrementQuantity(product)" type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h16"/>
                      </svg>
                    </button>
                    <input type="text" v-model="product.quantity" id="counter-input" data-input-counter
                           class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                           placeholder="" required/>
                    <button @click="incrementQuantity(product)" type="button" id="increment-button" data-input-counter-increment="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 1v16M1 9h16"/>
                      </svg>
                    </button>
                  </div>
                  <div class="text-end md:order-4 md:w-32">
                    <p class="text-base font-bold text-gray-900 dark:text-white">{{product.price}}</p>
                  </div>
                </div>

                <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                  <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                    {{product.name}}
                  </a>

                  <div class="flex items-center gap-4">
                    <button @click="addProductToFavourite(product)" type="button"
                            class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                      <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                      </svg>
                      Add to Favorites
                    </button>

                    <button
                            @click="deleteProductFromCart(product.id)"
                        type="button"
                            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="hidden xl:mt-8 xl:block">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
            <div
                class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
              <div
                  v-for="product in products"
                  :key="product.id"
                  class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <a href="#" class="overflow-hidden rounded">
                  <img class="w-full h-44 object-cover dark:hidden"
                       :src="getImgUrl(product.image)" alt="product image"/>
                </a>
                <div>
                  <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{product.name}}</a>
                  <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{{product.shortDescription}}</p>
                </div>
                <div>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    <span class="line-through"> KES {{product.price}} </span>
                  </p>
                  <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">KES {{product.discount ? product.discount : product.price}}</p>
                </div>
                <div class="mt-6 flex items-center gap-2.5">
                  <button data-tooltip-target="favourites-tooltip-1"
                          type="button"
                          class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                    </svg>
                  </button>
                  <div id="favourites-tooltip-1" role="tooltip"
                       class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Add to favourites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button type="button"
                          class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div
              class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">KES {{totalAmount}}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Discount</dt>
                  <dd class="text-base font-medium text-green-600">-KES {{discount}}</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">KES {{discountedAmount}}</dd>
              </dl>
            </div>

            <RouterLink to="/checkout"
                        class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Proceed to Checkout
            </RouterLink>

            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
              <RouterLink to="/"
                          class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Continue
                Shopping
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
