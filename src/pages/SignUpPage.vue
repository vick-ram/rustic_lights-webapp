<script setup lang="ts">
import {useRouter} from 'vue-router'
import {post} from '../boot'
import {AxiosError} from "axios";

const errorMessage = ref('')
const user = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: ""
}
const router = useRouter()
const signup = () => {
  const userData = {
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    password: user.password,
    phone: user.phone
  }
  post('/users/auth/register', userData)
      .then((res) => {
        if (res.status === 201) {
          router.push('/auth/login')
        }
      })
      .catch((e: AxiosError) => {
        if (e.response) {
          errorMessage.value = e.response.data.message
        }
      })
}
</script>

<template>
  <div class="w-1/3 mx-auto rounded-lg shadow my-2.5 bg-white p-4">
    <h1 class="text-xl font-bold mb-5 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Sign up new account
    </h1>
    <form @submit.prevent="signup">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
            name</label>
          <input v-model="user.firstName" type="text" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="John" required/>
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input v-model="user.lastName" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Doe" required/>
        </div>
        <div>
          <label for="phone_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Phone Number
          </label>
          <input
              v-model="user.phone"
              type="tel"
              id="phone_number"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="254712345678 or 0712345678"
              pattern="^(254\d{9}|0\d{9})$"
              required
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input v-model="user.email" type="email" id="email"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="john.doe@company.com" required/>
        </div>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input v-model="user.password" type="password" id="password"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="•••••••••" required/>
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value=""
                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                 required/>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
            href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>

  </div>
</template>

<style scoped>

</style>