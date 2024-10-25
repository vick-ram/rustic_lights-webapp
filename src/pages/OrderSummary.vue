<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-3xl">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>

        <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing information</h4>

          <dl>
            <dt class="text-base font-medium text-gray-900 dark:text-white">Individual</dt>
            <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">{{ address?.name }} - {{address?.address}}, {{address?.city}}</dd>
          </dl>

          <button type="button" data-modal-target="billingInformationModal" data-modal-toggle="billingInformationModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
        </div>

        <div class="mt-6 sm:mt-8">
          <div class="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
            <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <tr v-for="pr in productsInOrderItem">
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" :src="getImgUrl(pr.image)" alt="item image" />
                    </a>
                    <a href="#" class="hover:underline">{{pr.name}}</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x{{pr.quantity}}</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">KES {{pr.price}}</td>
              </tr>

              </tbody>
            </table>
          </div>

          <div class="mt-4 space-y-6">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">KES {{order?.total}}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Discount</dt>
                  <dd class="text-base font-medium text-green-500">-0.00</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-lg font-bold text-gray-900 dark:text-white">KES {{order?.total}}</dd>
              </dl>
            </div>

            <div class="flex items-start sm:items-center">
              <input id="terms-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="terms-checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the <a href="#" title="" class="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of the Flowbite marketplace </label>
            </div>

            <div class="gap-4 sm:flex sm:items-center">
              <button @click="$router.push('/')" type="button" class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Shopping</button>

              <button
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
                    disabled:hover:bg-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" class="me-2">
                  <path fill="#aed580"
                        d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z"></path>
                  <path fill="#aed580"
                        d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z"></path>
                  <path fill="#fff" fill-rule="evenodd"
                        d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z"
                        clip-rule="evenodd"></path>
                  <path fill="#9b2310" fill-rule="evenodd"
                        d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z"
                        clip-rule="evenodd"></path>
                  <path fill="#e60023" fill-rule="evenodd"
                        d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z"
                        clip-rule="evenodd"></path>
                </svg>
                Pay with M-Pesa
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>

  <div id="billingInformationModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-auto w-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
    <div class="relative max-h-auto w-full max-h-full max-w-lg p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
        <!-- Modal header -->
        <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Billing Information</h3>
          <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="billingInformationModal">
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
            <div class="flex items-center gap-4 sm:col-span-2">
            </div>

            <div class="sm:col-span-2">
              <div class="mb-2 flex items-center gap-1">
                <label for="saved-address-modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Saved Address </label>
                <svg data-tooltip-target="saved-address-modal-desc-2" data-tooltip-trigger="hover" class="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                </svg>
              </div>
              <select id="saved-address-modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Choose one of your saved address</option>
                <option value="address">{{order?.address}}</option>
              </select>
              <div id="saved-address-modal-desc-2" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Choose one of your saved addresses
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>

            <div>
              <label for="first_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name* </label>
              <input type="text" id="first_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
            </div>

            <div>
              <label for="last_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last Name* </label>
              <input type="text" id="last_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your last name" required />
            </div>

            <div class="sm:col-span-2">
              <label for="phone_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                  type="tel"
                  id="phone_number"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="+254712345678"
                  pattern="^\+254\d{9}$"
                  required
              />
            </div>

            <div>
              <div>
                <label for="County" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> County </label>
                <input type="text" id="county"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="Nairobi" required/>
              </div>
            </div>

            <div>
              <div>
                <label for="City" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> City </label>
                <input type="text" id="city"
                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                       placeholder="Nairobi" required/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="address_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Shipping Address* </label>
              <textarea id="address_billing_modal" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
            </div>

          </div>
          <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
            <button type="button" data-modal-toggle="billingInformationModal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, Ref, ref} from 'vue'
import {initFlowbite, initModals} from 'flowbite'
import {useRoute} from 'vue-router'
import {get} from "../boot";
import {Address, Order} from "../models/Constants.js";
import {jwtDecode} from 'jwt-decode'

const route = useRoute()
const errorMessage = ref('')
const order: Ref<Order | null> = ref(null)
const address: Ref<Address | null> = ref(null)
const orderId = route.params.id
const decodedToken = jwtDecode(localStorage.getItem('token') || '')
const userId = decodedToken.sub

const productsInOrderItem = order.value?.items.map(item => item.product)

const fullAddress = computed(() => {
  if (address.value) {
    return `${address.value?.address}, ${address.value?.name}, ${address.value?.city}`
  }
  return ''
})
const fetchOrder = () => {
  get(`orders/${orderId}`)
    .then(response => {
      order.value = response.data.data
      console.log(order.value)
    })
    .catch(error => {
      errorMessage.value = error.response.data.message
      console.log(error)
    })
}

const fetchAddress = () => {
  get(`/address`)
    .then(response => {
      address.value = response.data.data
      console.log(address.value)
    })
    .catch(error => {
      errorMessage.value = error.response.data.message
      console.log(error)
    })
}

const getImgUrl = (img) => {
  return `http://localhost:8080/${img}`
}
onMounted(() => {
  initFlowbite()
  initModals()
  fetchAddress()
  fetchOrder()
})
</script>