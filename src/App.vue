<script setup lang="ts">
  import { ref } from 'vue';

  let number = ref(0)

  const increment = () => {
    number.value++
  }

  document.title = "Enquête MAK Blokweer"
</script>

<template>
  <router-view></router-view>
</template>