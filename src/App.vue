<script setup lang="ts">
import { RouterView } from 'vue-router'
import TestHeader from '@/components/header/TestHeader.vue'
</script>

<template>
  <div class="h-full min-h-screen bg-background">
    <div class="flex flex-col">
      <TestHeader></TestHeader>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
