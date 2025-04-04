<script setup>

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: 'Chaussure Classique'
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/400x300',
        required: true
    },
    price : {
        type: Number,
        default: 89.99,
    },
    description: {
        type: String,
        default: 1
    }
})

</script>

<template>
        <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
          <img :src="props.image" class="w-full h-56 object-cover" :alt="props.title">
          <div class="p-4">
            <h3 class="font-semibold">{{ props.title }}</h3>
            <p class="text-gray-600 text-sm">{{ props.description }}</p>
            <p class="font-bold mt-1">{{ props.price }}</p>
          </div>
        </div>
</template>

<style scoped>

</style>