<script setup>
import ProductCard from '../Home/ProductCard.vue'

const products = [
  {
    title: 'Manteau',
    price: 10,
    description: 'Manteau en cuir véritable, confort ultime et style intemporel.',
    image: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=1&quality=80 1x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75 2x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=3&quality=50 3x'
  },
  {
    title: 'T-shirt',
    price: 12,
    description: 'Manteau en cuir véritable, confort ultime et style intemporel.',
    image: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=1&quality=80 1x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75 2x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=3&quality=50 3x'
  },
  {
    title: 'Pentalon',
    price: 32,
    description: 'Manteau en cuir véritable, confort ultime et style intemporel.',
    image: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=1&quality=80 1x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75 2x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=3&quality=50 3x'
  }
]

</script>

<template>
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <ProductCard v-for="product in products" :title="product.title" :price="product.price" :description="product.description" :image="product.image"/>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>