<template>
  <div
    class="shadow-lg border rounded-xl box-border overflow-hidden hover:border-emerald-200"
    v-on:click="async () => await navigateTo(`/products/${product.id}`)"
  >
    <div class="h-56 w-full group-hover:opacity-75 lg:h-72 xl:h-80">
      <img
        :src="product.imageSrc"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="m-2 mb-7">
      <h3 class="mt-4 text-sm font-semibold text-gray-700">
        <a>
          <span class="absolute inset-0" />
          {{ product.name }}
        </a>
      </h3>
      <p class="text-sm text-gray-500">{{ product.color }}</p>
      <p class="mt-1 text-sm font-medium text-gray-900">
        {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "../types/Product";

defineProps<{
  product: Product;
}>();
</script>
