<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Button } from '@/components/ui/button'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


function test() {
  console.log('test')
} 
</script>

<template>
  <div class="bg-background h-full min-h-screen">

    <pre>
      {{ isDark }}

    </pre>
    <Button @click="isDark = !isDark">Toggle dark mode</Button>


    <RouterView />
  </div>
</template>

<style scoped>
</style>
