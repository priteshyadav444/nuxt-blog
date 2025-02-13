<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <!-- Recommended Topics -->
      <h3 class="text-xl font-semibold mb-4">Recommended Topics</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="topic in recommendedTopics" :key="topic" class="px-3 py-1 bg-gray-200 rounded-full text-sm">
          {{ topic }}
        </span>
      </div>
  
      <!-- Visible Blogs -->
      <h3 class="text-xl font-semibold mt-6 mb-4">Trending Blogs</h3>
      <ul>
        <li v-for="blog in visibleBlogs" :key="blog.id" class="py-2 border-b">
          <NuxtLink :to="`/blog/${blog.slug}`" class="hover:text-primary">
            <div class="font-medium">{{ blog.title }}</div>
            <div class="text-sm text-gray-500">by {{ blog.author }} - {{ blog.date }}</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    recommendedTopics: Array,
    visibleBlogs: Array,
  });
  </script>
  