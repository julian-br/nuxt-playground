<template>
  <div>
    <NavBar></NavBar>
    <div v-if="pending">...loading</div>
    <div v-if="error" class="mt-5 ml-20">
      <button
        type="button"
        v-on:click="navigateTo('/')"
        class="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-dark shadow-sm hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <ArrowLeftIcon class="h-5 w-5 mr-3"></ArrowLeftIcon>
        View all Products
      </button>
      <p class="text-center text-gray-600 text-2xl">Product can not be found</p>
    </div>

    <div v-if="product">
      <ProductOverview :product="product"></ProductOverview>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/20/solid";
const productId = useRoute().params.id as string;

const {
  data: product,
  pending,
  error,
} = await useFetch(`/api/products/${productId}`, {
  lazy: true,
});
</script>
