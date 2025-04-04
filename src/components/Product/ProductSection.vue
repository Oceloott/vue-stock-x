<script setup>
    import ProductItem from './ProductItem.vue';

    const productData = {
        title: 'Chaussure Classique',
        image: 'https://via.placeholder.com/400x300',
        price: 89.99,
        description: 'Chaussure en cuir véritable, confort ultime et style intemporel.',
        id: 1,
    };
</script>

<template>
    <ProductItem
        :title="productData.title"
        :image="productData.image"
        :price="productData.price"
        :description="productData.description"
        :id="productData.id"
    />
</template>