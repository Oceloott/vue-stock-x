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
    quantity: {
        type: Number,
        default: 1
    }
})
const emit = defineEmits(['delete-item'])

const deleteElement = () => {
  emit('delete-item', props.id)
}
</script>

<template>
    <div class="flex items-center justify-between border-b pb-4">
        <div class="flex items-center gap-4">
            <img :src="props.image" class="w-20 h-20 object-cover rounded" :alt="props.title">
            <div>
                <p class="font-medium">{{props.title}}</p>
                <p class="text-gray-500 text-sm">Quantité : {{ props.quantity }}</p>
            </div>
        </div>
        <div class="text-right">
            <p class="font-bold">{{ props.price }}</p>
            <button class="text-red-500 text-sm hover:underline mt-1" @click="deleteElement">Supprimer</button>
        </div>
    </div>
</template>

<style scoped>

</style>    