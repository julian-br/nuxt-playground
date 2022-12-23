Tailwind UI Components Templates New Documentation Search components Account
Product Lists Ecommerce Components With inline price Preview Code Vue Images
provided by Ugmonk With CTA link Preview Code Vue

<template>
  <div>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="md:flex md:items-center md:justify-between">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Trending products
        </h2>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = await $fetch("/api/products");
</script>
