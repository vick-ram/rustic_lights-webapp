<script setup lang="ts">
import {ref, watch, Ref} from 'vue';
import {post, get} from '../boot'
import {Address, Order} from '../models/Constants'
import {jwtDecode, JwtPayload} from 'jwt-decode'
import {AxiosError, AxiosResponse} from "axios";
import {useRouter} from 'vue-router'

const useExistingAddress = ref(false);
const userAddress = ref<Address[]>([]);
const errorMessage = ref('')
const order: Ref<Order | null> = ref(null)

const token = localStorage.getItem('token')
const decodedToken = jwtDecode<JwtPayload>(token)
const userId = String(decodedToken.sub)
const router = useRouter()


const newAddress = {
  userId: userId,
  name: "",
  phone: "",
  email: "",
  county: "",
  city: "",
  address: ""
}

const formatPhoneNumber = (phone: String) => {
  if (phone.startsWith('0')) {
    return `254${phone.slice(1)}`
  }
  return phone
}

const addNewAddress = () => {
  newAddress.phone = formatPhoneNumber(newAddress.phone)
  post('/address', newAddress)
      .then((res: AxiosResponse) => {
        if (res.data.status === true) {
          console.log(res.data.data)
          userAddress.value = res.data.data
        }
      })
      .catch((e: AxiosError) => {
        if (e.response) {
          console.log(e.response.data)
          errorMessage.value = e.response.data.message
        }
      })
}

const fetchUserAddress = () => {
  get(`/address/${userId}`)
      .then((res: AxiosResponse) => {
        if (res.data.status === true) {
          console.log(res.data.data)
          userAddress.value.push(res.data.data)
        }
      })
      .catch((e: AxiosError) => {
        if (e.response) {
          errorMessage.value = e.response.data.message
        }
      })
}

const createOrder = () => {
  post("/orders", null)
      .then((res: AxiosResponse) => {
        if (res.data.status === true) {
          order.value = res.data.data
          router.push({name: 'OrderSummary', params: {id: order.value.id}})
        }
      })
      .catch((e: AxiosError) => {
        if (e.response) {
          errorMessage.value = e.response.data.message
          clearErrorMessage()
        }
      })
}

const clearErrorMessage = () => {
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

watch(useExistingAddress, (newValue) => {
  if (newValue) {
    fetchUserAddress()
  }
})

</script>

<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form @submit.prevent="addNewAddress" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <!-- ... other code ... -->
      <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
               height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          Cart
        </span>
        </li>

        <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
               height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          Checkout
        </span>
        </li>

        <li class="flex shrink-0 items-center">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
               height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          Order summary
        </li>
      </ol>

      <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
        <div class="min-w-0 flex-1 space-y-8">
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
            <div class="flex items-center mb-4">
              <div v-if="errorMessage">{{ errorMessage}}</div>
              <input type="checkbox" id="use_existing_address" v-model="useExistingAddress" class="mr-2">
              <label for="use_existing_address" class="text-sm font-medium text-gray-900 dark:text-white">Use existing
                address</label>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your
                  name </label>
                <input type="text" id="your_name"
                       v-model="newAddress.name"
                       :disabled="useExistingAddress"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="Bonnie Green" required/>
              </div>

              <div>
                <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your
                  email* </label>
                <input type="email" id="your_email"
                       v-model="newAddress.email"
                       :disabled="useExistingAddress"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="name@gmail.com" required/>
              </div>

              <div>
                <label for="County" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> County</label>
                <input type="text" id="County"
                       v-model="newAddress.county"
                       :disabled="useExistingAddress"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="Nairobi" required/>
              </div>

              <div>
                <label for="City" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> City </label>
                <input type="text" id="city"
                       v-model="newAddress.city"
                       :disabled="useExistingAddress"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="Nairobi" required/>
              </div>

              <div>
                <label for="phone_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone
                  Number </label>
                <input
                    v-model="newAddress.phone"
                    type="tel"
                    :disabled="useExistingAddress"
                    id="phone_number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="254712345678 or 0712345678"
                    pattern="^(254\d{9}|0\d{9})$"
                    required
                />
              </div>

              <div class="sm:col-span-2">
                <button type="submit" :disabled="useExistingAddress"
                        class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14m-7 7V5"/>
                  </svg>
                  Add new address
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
          <div class="flow-root">
            <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Discount</dt>
                <dd class="text-base font-medium text-green-500">0</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
              </dl>
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700">

          <div v-if="errorMessage" class="text-sm text-red-500">{{errorMessage}}</div>
          <div class="space-y-3">

            <button
                @click="createOrder"
                type="submit"
                class="w-full flex items-center
                    justify-center text-white
                    bg-blue-700 hover:bg-blue-800
                    border border-gray-200 focus:ring-4
                    focus:outline-none focus:ring-gray-100
                    font-medium rounded-lg text-sm px-5 py-2.5
                    text-center dark:focus:ring-gray-600
                    dark:bg-gray-800 dark:border-gray-700
                    dark:text-white dark:hover:bg-gray-700
                    me-2 mb-2 disabled:bg-gray-400
                    disabled:text-gray-50
                    disabled:hover:bg-gray-500">Create Order
            </button>


            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an
              account.
              <RouterLink to="/auth/login"
                          class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign
                in or create an account now.
              </RouterLink>
              .
            </p>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>
