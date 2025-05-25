<script setup>

import {useCheckoutStore} from "@/Store/useCheckoutStore.js";

const { addProduct } = useCheckoutStore()

function addProductInCart() {
  addProduct({
    id: Math.floor(Math.random() * 1000),
    title: props.title,
    price: props.price,
    quantity: 1,
  });

  console.log('Produit ajouté au panier avec succès');
}



const props = defineProps({
    title: {
        type: String,
        default: 'Chaussure Classique'
    },
    price: {
        type: Number,
        default: 89.99
    },
    description: {
        type: String,
        default: 'Chaussure en cuir véritable, confort ultime et style intemporel.',
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/400x300',
        required: true
    }
})
</script>

<template>
    <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img :src="props.image" alt="Chaussure" class="w-full h-60 object-cover">
    <div class="p-4">
        <h4 class="font-semibold text-lg">{{props.title}}</h4>
        <p class="text-gray-600">{{ props.description }}</p>
        <p class="font-bold mt-2">{{props.price}}</p>
    </div>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition " @click="addProductInCart"> Ajouter au panier </button>
    </div>
</template>

<style scoped>

</style>