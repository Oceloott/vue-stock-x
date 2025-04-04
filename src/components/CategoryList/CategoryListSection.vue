<script setup>
import CategoryListFilter from './CategoryListFilter.vue';
import CategoryListProducts from './CategoryListProducts.vue';


const CategoryList = [{
    id: 1,
    title: 'Chaussures de sport',
    image: 'https://via.placeholder.com/400x300',
    price: 89.99,
    quantity: 1
},
{
    id: 2,
    title: 'Bottes en cuir',
    image: 'https://via.placeholder.com/400x300',
    price: 129.99,
    quantity: 1
},
{
    id: 3,
    title: 'Sandales d’été',
    image: 'https://via.placeholder.com/400x300',
    price: 49.99,
    quantity: 1
}
]

</script>

<template>
<main class="max-w-7xl mx-auto px-4 py-10">
  <div class="flex flex-col md:flex-row gap-8">
    <!-- Filtres -->
     <CategoryListFilter/>

    <!-- Liste des produits -->
    <section class="flex-1">
      <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CategoryListProducts
          v-for="(product, index) in CategoryList"
          :key="index"
          :title="product.title"
          :image="product.image"
          :price="product.price"
          :description="product.description"
          :id="product.id"
        />
        <!-- Autres produits... -->
      </div>
    </section>
  </div>
</main>
</template>