<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Chaussure Classique'
    },
    description: {
        type: String,
        default: 'Chaussure en cuir véritable, confort ultime et style intemporel.',
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/400x300',
        required: true
    },
    link : {
        type: String,
        default: '#'
    },
})
</script>

<template>
    <a :href="props.link" class="block border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
        <img :src="props.image" :alt="props.title" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-semibold text-lg">{{ props.title }}</h3>
            <p class="text-gray-600 text-sm">{{ props.description }}</p>
        </div>
    </a>
</template>

<style scoped>

</style>    