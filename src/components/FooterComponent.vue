<script setup lang="ts">
// TypeScript setup can be added here if needed
</script>

<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:justify-between sm:items-center">
        <!-- Social Media Links -->
        <div class="flex space-x-6 sm:mb-0 rtl:space-x-reverse">
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Facebook">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.001 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.569c0-2.513 1.492-3.896 3.781-3.896 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.561v1.881h2.77l-.442 2.891h-2.328V21.878C18.343 21.128 22 17.001 22 12z" />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Twitter">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Instagram">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6.012 4.85.07 1.17.056 1.96.24 2.44.5a5.2 5.2 0 011.8 1.8c.26.48.444 1.27.5 2.44.058 1.25.07 1.65.07 4.85s-.012 3.6-.07 4.85c-.056 1.17-.24 1.96-.5 2.44a5.2 5.2 0 01-1.8 1.8c-.48.26-1.27.444-2.44.5-1.25.058-1.65.07-4.85.07s-3.6-.012-4.85-.07c-1.17-.056-1.96-.24-2.44-.5a5.2 5.2 0 01-1.8-1.8c-.26-.48-.444-1.27-.5-2.44C2.212 15.6 2.2 15.2 2.2 12s.012-3.6.07-4.85c.056-1.17.24-1.96.5-2.44a5.2 5.2 0 011.8-1.8c.48-.26 1.27-.444 2.44-.5C8.4 2.212 8.8 2.2 12 2.2zm0 1.8c-3.18 0-3.56.014-4.81.07-.86.038-1.48.176-1.81.296a3.408 3.408 0 00-1.22.81c-.333.333-.624.796-.81 1.22-.12.33-.258.95-.296 1.81-.056 1.25-.07 1.63-.07 4.81s.014 3.56.07 4.81c.038.86.176 1.48.296 1.81.19.425.477.888.81 1.22.333.333.796.624 1.22.81.33.12.95.258 1.81.296 1.25.056 1.63.07 4.81.07s3.56-.014 4.81-.07c.86-.038 1.48-.176 1.81-.296a3.408 3.408 0 001.22-.81c.333-.333.624-.796.81-1.22.12-.33.258-.95.296-1.81.056-1.25.07-1.63.07-4.81s-.014-3.56-.07-4.81c-.038-.86-.176-1.48-.296-1.81a3.408 3.408 0 00-.81-1.22c-.333-.333-.796-.624-1.22-.81-.33-.12-.95-.258-1.81-.296-1.25-.056-1.63-.07-4.81-.07zm0 5.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm0 1.8a3 3 0 100 6 3 3 0 000-6zm5.2-1.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
            </svg>
          </a>
        </div>
        <!-- Contact Info -->
        <div class="mt-6 sm:mt-0">
          <span class="block text-sm text-gray-500 dark:text-gray-400">Contact us: info@flowbite.com</span>
          <span class="block text-sm text-gray-500 dark:text-gray-400">Phone: +1 (123) 456-7890</span>
        </div>
      </div>
      <span class="block text-sm text-gray-500 mt-6 text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
