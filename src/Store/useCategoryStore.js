import { defineStore } from "pinia";
import { supabase } from "../utils/supabase.js";
import { ref, computed } from "vue";

export const useCategoryStore = defineStore("categoryStore", () => {

  const categories = ref([]);
  const loading = ref(true);
  const allCategories = computed(() => categories.value);


  const fetchCategories = async () => {

    const { data, error } = await supabase
      .from('categories')
      .select('*')

    if (error) {
      console.error('Error fetching products:', error)
    } else {
      categories.value = data
    }
    loading.value = false
  }

  const fetchCategoriesByGender = async (gender) => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('gender', gender)


    if (error) {
      console.error('Error fetching products:', error)
    } else {
      categories.value = data
    }
    loading.value = false

  }


  return {
    allCategories,
    categories,
    loading,
    fetchCategories,
    fetchCategoriesByGender
  };
})