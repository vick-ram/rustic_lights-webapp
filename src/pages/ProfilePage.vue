<template>
  <div class="w-full p-4 mt-16">
    <h1 class="text-3xl font-bold text-gray-900">My Profile</h1>
    <div class="flex flex-col md:flex-row gap-3 mt-5">
      <div class="w-full md:w-1/3 h-auto shadow-md rounded-lg bg-white p-4">
        <div class="flex-col">
          <div class="relative group">
            <img class="w-20 h-20 rounded-full" :src="profileImg" alt="">
            <i @click="handleFileSelection" class="edit-icon bottom-0 left-12 cursor-pointer absolute w-5 h-5 text-gray-400 dark:border-gray-800 material-icons opacity-0 group-hover:opacity-100 transition-opacity">edit</i>
          </div>
          <div class="flex flex-row gap-8 items-center mb-3">
            <p class="text-gray-600 text-lg font-semibold">Name:</p>
            <p class="text-lg text-gray-800">{{user?.name}}</p>
          </div>
          <div class="flex flex-row gap-8 items-center mb-3">
            <p class="text-gray-600 text-lg font-semibold">Email:</p>
            <p class="text-lg text-gray-800">{{user?.email}}</p>
          </div>
          <div class="flex flex-row gap-8 items-center mb-3">
            <p class="text-gray-600 text-lg font-semibold">Phone:</p>
            <p class="text-lg text-gray-800">{{user?.phone}}</p>
          </div>
          <div v-if="errorMessage" class="text-red-500 text-sm">{{errorMessage}}</div>
          <div class="flex flex-row justify-end">
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Update Details
            </button>
          </div>
        </div>
      </div>

<!--      <div class="w-full md:w-2/3 h-auto shadow-md rounded-lg bg-white p-4">-->

<!--        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">-->
<!--          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-end"-->
<!--              id="default-styled-tab"-->
<!--              data-tabs-toggle="#default-styled-tab-content"-->
<!--              data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"-->
<!--              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"-->
<!--              role="tablist">-->
<!--            <li class="me-2" role="presentation">-->
<!--              <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab"-->
<!--                      data-tabs-target="#styled-order" type="button" role="tab" aria-controls="order"-->
<!--                      aria-selected="false">Orders-->
<!--              </button>-->
<!--            </li>-->
<!--            <li class="me-2" role="presentation">-->
<!--              <button-->
<!--                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"-->
<!--                  id="transaction-styled-tab" data-tabs-target="#styled-transaction" type="button" role="tab"-->
<!--                  aria-controls="transaction" aria-selected="false">Transactions-->
<!--              </button>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div id="default-styled-tab-content">-->
<!--          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">-->
<!--            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>-->
<!--          </div>-->
<!--          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">-->
<!--            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>-->
<!--          </div>-->
<!--          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">-->
<!--            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>-->
<!--          </div>-->
<!--          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">-->
<!--            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
    </div>
    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Update your details
            </h3>
            <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="#">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    name</label>
                  <input v-model="userUpdate.firstName" type="text" id="first_name"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :placeholder="splitName.firstName" required/>
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input v-model="userUpdate.lastName" type="text" id="last_name"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :placeholder="splitName.lastName" required/>
                </div>
                <div>
                  <label for="phone_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number
                  </label>
                  <input
                      v-model="userUpdate.phone"
                      type="tel"
                      id="phone_number"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      :placeholder="user?.phone"
                      pattern="^(254\d{9}|0\d{9})$"
                      required
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input v-model="userUpdate.email" type="email" id="email"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :placeholder="user?.email" required/>
                </div>
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input v-model="userUpdate.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <button @click="updateUser" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {get, patch, put} from '../boot'
import {ref, onMounted, computed} from "vue";
import {User} from "../models/Constants";
import {selectFiles} from '../utils/fileSelector'
import {AxiosError} from "axios";
import {initFlowbite, initDials, initTabs} from 'flowbite'
import {formatPhoneNumber} from '../utils/formattedPhoneNumber'

const route = useRoute()
const user = ref<User>(null)

const userId = route.params.id
const selectedProfileImg = ref<FileList | null>(null)
const errorMessage = ref<String>('')
const userUpdate = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: ''
}

const splitName = computed(() => {
  const names = user.value?.name.split(' ') || []
  return {
    firstName: names[0] || '',
    lastName: names.slice(1).join(' ') || ''
  }
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

const getImageUrl = (imageName) => new URL(`../assets/images/${imageName}`, import.meta.url).href;

const fallbackImg = getImageUrl('avatar.jpg')
const baseUrl = 'http://localhost:8080/'
const imgUrl = (img) => `${baseUrl}${img}`
const profileImg = computed(() => {
  return user.value?.profile ? imgUrl(user.value.profile) : fallbackImg
})

const handleFileSelection = async () => {
  selectedProfileImg.value = await selectFiles('image/*')
  if (selectedProfileImg.value) {
    const formData = new FormData()
    formData.append('profile', selectedProfileImg.value[0])
    patch(`/users/profile/${userId}`, formData)
        .then((res) => {
          user.value = res.data.data
        })
        .catch((e: AxiosError) => {
          console.log(e.response?.data)
          errorMessage.value = e.response?.data.message
        })
  }
}

const updateUser = () => {
  let data = {
    name: `${userUpdate.firstName} ${userUpdate.lastName}`,
    email: userUpdate.email,
    password: userUpdate.password,
    phone: formatPhoneNumber(userUpdate.phone)
  }
  put(`/users/${userId}`, data)
      .then((res) => {
        user.value = res.data.data
      })
      .catch((e: AxiosError) => {
        errorMessage.value = e.response?.data.message
        clearErrorMessage()
      })
}

const clearErrorMessage = () => {
  setTimeout(() => {
    errorMessage.value = ''
  }, 3000)
}

onMounted(() => {
  fetchUser()
  initFlowbite()
  initDials()
  initTabs()
})
</script>

<style scoped>
.edit-icon {
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0.2rem;
}
.group:hover .edit-icon {
  opacity: 1;
}
</style>