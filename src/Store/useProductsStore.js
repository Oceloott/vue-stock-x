import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase.js'
import { ref, computed } from "vue";



export const useProductsStore = defineStore('productsStore', () => {
    const products = ref([])
    const loading = ref(true)

    const allProducts = computed(() => products.value)


    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')

        if (error) {
            console.error('Error fetching products:', error)
        } else {
            products.value = data
        }
        loading.value = false
    }

    return {
        allProducts,
        products,
        loading,
        fetchProducts
    }






})