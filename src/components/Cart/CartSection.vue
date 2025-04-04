<script setup>
import { ref,computed } from 'vue';
import CartItem from './CartItem.vue';

const productInCart = ref([
    {
        id: 1,
        title: 'Chaussure Classique',
        image: 'https://via.placeholder.com/400x300',
        price: 89.99 ,
        quantity: 1
    },
    {
        id: 2,
        title: 'Manteau',
        image: 'https://via.placeholder.com/400x300',
        price: 129.99,
        quantity: 1
    },
    {
        id: 3,
        title: 'Pantalon',
        image: 'https://via.placeholder.com/400x300',
        price: 49.99,
        quantity: 1
    }
])


const deleteItem = (id) => {
    const index = productInCart.value.findIndex(product => product.id === id);
    if (index !== -1) {
        productInCart.value.splice(index, 1);
    }
}


const totalPrice = computed(() => {
    return productInCart.value.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
});

</script>

<template>
    <main class="max-w-4xl mx-auto px-4 py-10">
        <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
        <div class="space-y-6">

            <CartItem
                v-for="(product, index) in productInCart"
                :key="index"
                :title="product.title"
                :image="product.image"
                :price="product.price"
                :quantity="product.quantity"
                :id="product.id"
                @delete-item="deleteItem"
            />


            <div class="text-right mt-10">
                <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{totalPrice}} €</span></p>
                <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Commander</button>
            </div>
        </div>
    </main>
</template>