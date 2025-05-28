<script setup>
import ProductCard from '../Home/ProductCard.vue'
import { useProductsStore } from "@/Store/useProductsStore.js";
import { onMounted } from 'vue';
import { computed } from 'vue';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.fetchProducts();

});

const products = computed(() => productsStore.allProducts);


</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <ProductCard v-for="product in products" :title="product.name" :price="product.price"
          :description="product.description" :image="product.image_url" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>