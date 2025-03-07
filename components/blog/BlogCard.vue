<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105">
        <img :src="blog.image" class="w-full h-44 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-semibold">{{ blog.title }}</h3>
            <NuxtLink to="blog/list" class="flex items-center mt-3 space-x-3">
                <img 
                    src="https://mistral.bloggrify.com/.netlify/images?url=%2Fimages%2Favatar.jpg" 
                    class="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
                />
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 hover:text-blue-600">{{ blog.author }}</span>
                    <span class="text-xs text-gray-500">{{ blog.date }}</span>
                </div>
            </NuxtLink>
            <div v-if="blog.keywords" class="mt-3 flex flex-wrap gap-2">
                <span v-for="keyword in blog.keywords" :key="keyword"
                    class="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    {{ keyword }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ blog: Object });
</script>
