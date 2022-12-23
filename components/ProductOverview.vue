<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mb-4 mt-4">
        <button
          type="button"
          v-on:click="navigateTo('/')"
          class="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-dark shadow-sm hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <ArrowLeftIcon class="h-5 w-5 mr-3"></ArrowLeftIcon>
          View all Products
        </button>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- product image -->
        <div class="rounded-xl overflow-hidden">
          <img class="w-full" :src="product.imageSrc" />
        </div>
        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ product.name }}
          </h1>

          <div class="mt-3">
            <p class="text-3xl tracking-tight text-gray-900">
              {{ product.price }}
            </p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    4 > rating ? 'text-emerald-500' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              nemo facilis tenetur impedit quos nulla consectetur illum, minus
              dolores sit voluptatem nobis. Eligendi labore voluptatem quaerat
              quos! Pariatur, quos debitis.
            </div>
          </div>

          <div class="mt-6">
            <div class="sm:flex-col1 mt-10 flex">
              <button
                type="submit"
                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-emerald-500 py-3 px-8 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon, ArrowLeftIcon } from "@heroicons/vue/20/solid";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { Product } from "~~/types/Product";

defineProps<{
  product: Product;
}>();
</script>
