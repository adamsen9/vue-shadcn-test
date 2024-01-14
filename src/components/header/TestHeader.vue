<template>
  <header class="sticky top-0 border-b border-border bg-background/80 backdrop-blur-lg">
    <div class="flex items-center justify-end space-x-4">
      <div class="flex-items-center gap-x-1">
        <Button @click="toggleDark()">Toggle dark mode</Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useDark, useToggle } from '@vueuse/core'

const toggleDark = useToggle(useDark())
</script>

<style scoped></style>
