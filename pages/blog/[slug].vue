<template>
    <div class="max-w-3xl mx-auto py-10">
        <UCard>
            <template #header>
                <h1 class="text-2xl font-bold">{{ blog.title }}</h1>
                <p class="text-gray-500 text-sm">By {{ blog.author }} • {{ blog.date }}</p>
            </template>

            <img v-if="blog.image" :src="blog.image" alt="Blog Image" class="rounded-lg w-full my-4">

            <p class="text-lg leading-relaxed" v-html="blog.content"></p>

            <div class="mt-6 flex justify-between">
                <p class="text-gray-400 text-sm">Tags: {{ blog.tags }}</p>
                <UButton color="blue">Share</UButton>
            </div>
        </UCard>
    </div>
</template>

<script setup>
const blog = ref({
    title: "Sample Blog Post",
    author: "John Doe",
    date: "Feb 10, 2025",
    image: "https://via.placeholder.com/800",
    content: "<p>This is a sample blog post content.</p>",
    tags: "Vue, Nuxt, Blogging",
});
</script>