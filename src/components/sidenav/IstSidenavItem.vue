<template>
  <div
    class="ist-sidenav-item flex h-10 cursor-pointer flex-row items-center rounded hover:bg-cyan-700"
    :class="[{ 'router-link-active': isActive }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
export interface IstSidenavItemProps {
  isActive?: boolean
}

withDefaults(defineProps<IstSidenavItemProps>(), {
  isActive: false
})
</script>

<style scoped></style>
