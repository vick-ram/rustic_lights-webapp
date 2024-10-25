<script setup lang="ts">
import {ref} from 'vue'
import NavigationBarComponent from "../components/NavigationBarComponent.vue";
import {useRouter} from 'vue-router'

const router = useRouter()

const handleSearch = (query) => {
  router.push({ name: 'Home', query: { search: query } })
}
</script>

<template>
  <div>
    <NavigationBarComponent @search="handleSearch"/>
    <main>
      <RouterView/>
    </main>
  </div>
</template>