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

      <div>
        <div class="my-4">
          <label for="filter" class="block text-sm font-medium text-gray-700"
            >Search For Products</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="filter"
              id="filter"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              v-on:input="filteredProducts"
              v-model="filterString"
              placeholder="search for products"
            />
          </div>
        </div>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="product in filteredProducts()"
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
const filterString = ref("");
const products = await $fetch("/api/products");

const filteredProducts = () =>
  products.filter((product) =>
    product.name.toLowerCase().includes(filterString.value.toLowerCase())
  );
</script>
