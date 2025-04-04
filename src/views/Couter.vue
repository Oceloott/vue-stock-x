<script setup>
import { ref } from 'vue'

let counters = ref([])

const increment = (id) => {
  counters.value.find(counter => counter.id === id).count++
}

const decrement = (id) => {
  counters.value.find(counter => counter.id === id).count--
}

const addCounter = () => {
  counters.value.push({
    count: 0,
    id: counters.value.length + 1,
  })
}
</script>

<template>
  <main>
    <div class="flex flex-col gap-4 border-2 border-gray-300 rounded-md m-4" v-for="{ count, id } in counters"
      :key="id">
      <h1>Compteur: {{ count }}</h1>
      <h2>Compteur {{ id }}</h2>
      <button @click="increment(id)">Incrémenter</button>
      <button @click="decrement(id)">Décrémenter</button>
    </div>
    <button @click="addCounter">Ajouter un compteur</button>
  </main>
</template>