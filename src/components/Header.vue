<script setup>

import { useCheckoutStore } from "@/Store/useCheckoutStore.js";

const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Nouveautés', href: '#' },
  { name: 'Homme', href: '/category/man' },
  { name: 'Femme', href: '/category/women' },
  { name: 'Contact', href: '#' },
]

const checkoutStore = useCheckoutStore()


</script>

<template>
  <header class="border-b shadow-sm sticky top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
      <nav class="space-x-6 hidden md:flex">
        <RouterLink v-for="item in menuItems" :key="item.name" :to="item.href"
          class="text-gray-700 hover:text-blue-600 transition">
          {{ item.name }}
        </RouterLink>
        <RouterLink class="text-gray-700 hover:text-blue-600 transition" to="cart">
          Panier ({{ checkoutStore.countProducts }})
        </RouterLink>
      </nav>
      <button class="md:hidden">☰</button>
    </div>
  </header>
</template>

<style scoped></style>