<script setup>
import CategoryHomeCard from './CategoryHomeCard.vue';
import { useCategoryStore } from '@/Store/useCategoryStore.js';
import { onBeforeMount, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryId = ref(route.params.id);
const useCategoriesStore = useCategoryStore();

watch(() => route.params.id, (newId) => {
    useCategoriesStore.fetchCategoriesByGender(newId);
});

onBeforeMount(async () => {
    await useCategoriesStore.fetchCategoriesByGender(categoryId.value);
});

const categoriesGendered = computed(() => useCategoriesStore.categories);




</script>

<template>
    <main class="max-w-7xl mx-auto px-4 py-10">
        <h2 class="text-3xl font-bold mb-8 text-center">Chaussures {{ categoryId }}</h2>

        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CategoryHomeCard v-for="(category, index) in categoriesGendered" :key="index" :title="category.name"
                :description="category.description" image="https://via.placeholder.com/400x300" link="#" />
        </section>
    </main>
</template>