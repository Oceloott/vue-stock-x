<script setup>
import { computed } from 'vue';
import CartItem from './CartItem.vue';
import {useCheckoutStore} from "@/Store/useCheckoutStore.js";
const { products } = useCheckoutStore()

const totalPrice = computed(() => {
  return 0;

});

</script>

<template>
    <main class="max-w-4xl mx-auto px-4 py-10">
        <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
        <div class="space-y-6">


          <CartItem
            v-for="(product, index) in products"
            :key="index"
            :title="product.title"
            :price="product.price"
            :quantity="product.quantity"
            :id="product.id"
            />



            <div class="text-right mt-10">
                <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{totalPrice}} €</span></p>
                <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Commander</button>
            </div>
        </div>
    </main>
</template>