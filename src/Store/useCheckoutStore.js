import { defineStore } from 'pinia'
import { computed, ref } from "vue";



export const useCheckoutStore = defineStore('checkoutStore', () => {
    const products = ref([])

    const addProduct = (product) => {
        products.value.push(product)
    }

    const removeProduct = (productId) => {
        products.value = products.value.filter(product => product.id !== productId)
    }

    const countProducts = computed(() => {
        return products.value.length
    })

    return {
        products,
        addProduct,
        removeProduct,
        countProducts
    }

})