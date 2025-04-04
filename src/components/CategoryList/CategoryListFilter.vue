<script setup>

</script>

<template>
    <aside class="md:w-1/4">
      <h2 class="text-lg font-semibold mb-4">Filtres</h2>
      <div class="space-y-4">
        <div>
          <label class="block font-medium mb-1">Genre</label>
          <select class="w-full border px-3 py-2 rounded">
            <option>Tous</option>
            <option>Homme</option>
            <option>Femme</option>
          </select>
        </div>
        <div>
          <label class="block font-medium mb-1">Prix</label>
          <input type="range" min="30" max="200" class="w-full">
        </div>
        <div>
          <label class="block font-medium mb-1">Pointure</label>
          <div class="flex flex-wrap gap-2">
            <button class="border px-2 py-1 rounded hover:bg-gray-100">39</button>
            <button class="border px-2 py-1 rounded hover:bg-gray-100">40</button>
            <button class="border px-2 py-1 rounded hover:bg-gray-100">41</button>
          </div>
        </div>
      </div>
    </aside>

</template>