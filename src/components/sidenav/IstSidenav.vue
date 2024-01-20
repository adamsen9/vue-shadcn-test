<template>
  <aside
    class="transition-width flex min-h-96 flex-col gap-2 bg-sky-700 pl-1 pr-1 text-white"
    :class="[{ 'w-16': expanded, 'w-64': !expanded }]"
  >
    <button @click="$emit('toggle')">{{ expanded }}</button>

    <slot />

    <img
      class="m-auto w-14 self-end"
      src="https://www.ist.com/assets/images/icons/logo_black.png"
    />
  </aside>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'toggle'): void
}>()

export interface IstSidenavProps {
  expanded?: boolean
}
withDefaults(defineProps<IstSidenavProps>(), {
  expanded: false
})
</script>

<style scoped>
:deep(.ist-sidenav-item.router-link-active),
:deep(.router-link-active > div.ist-sidenav-item) {
  background-color: #083344;
}
</style>
