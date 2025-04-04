<script setup>
import CategoryHomeCard from './CategoryHomeCard.vue';


</script>

<template>
<main class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CategoryHomeCard
            title="Chaussure Classique"
            description="Chaussure en cuir véritable, confort ultime et style intemporel."
            image="https://via.placeholder.com/400x300"
            link="#"
        />
        <CategoryHomeCard
            title="Bottines en Cuir"
            description="Bottines élégantes pour un look décontracté."
            image="https://via.placeholder.com/400x300"
            link="#"
        />
        <CategoryHomeCard
            title="Sneakers Sportives"
            description="Sneakers confortables pour un style de vie actif."
            image="https://via.placeholder.com/400x300"
            link="#"
        />
    </section>
</main>
</template>