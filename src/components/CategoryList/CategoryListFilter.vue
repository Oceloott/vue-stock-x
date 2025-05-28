<script setup>
import FilterGender from './FilterGender.vue';
import FilterPrice from './FilterPrice.vue';
import FilterSize from './FilterSize.vue';


</script>

<template>
  <aside class="md:w-1/4">
    <h2 class="text-lg font-semibold mb-4">Filtres</h2>
    <div class="space-y-4">
      <FilterGender />
      <FilterPrice />
      <FilterSize />
    </div>
  </aside>

</template>