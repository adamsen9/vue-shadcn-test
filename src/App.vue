<script setup lang="ts">
import { RouterView, RouterLink, useRouter } from 'vue-router/auto'
import TestHeader from '@/components/header/TestHeader.vue'
import IstSidenav from './components/sidenav/IstSidenav.vue'
import IstSidenavItem from './components/sidenav/IstSidenavItem.vue'
import { ref } from 'vue'

const router = useRouter()

function handle() {
  router.push({
    path: '/dashboard'
  })
}

const expanded = ref(true)
</script>

<template>
  <div class="flex flex-row">
    <IstSidenav :expanded="expanded" @toggle="expanded = !expanded">
      <router-link to="/">
        <IstSidenavItem>
          <span>Ikon</span>
          Forside
        </IstSidenavItem>
      </router-link>
      <router-link to="/oversigt">
        <IstSidenavItem>
          <span>Ikon</span>
          Oversigt
        </IstSidenavItem>
      </router-link>
      <IstSidenavItem @click="handle" :is-active="router.currentRoute.value.path === '/dashboard'">
        <span>Ikon</span>
        Dashboard
      </IstSidenavItem>
    </IstSidenav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
