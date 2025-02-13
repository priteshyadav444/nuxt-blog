<template>
    <UCard class="border-b border-gray-300 shadow-none rounded-none">
        <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-primary">
            <div class="p-1 flex flex-col md:flex-row gap-4 items-start">
                <div class="flex-1">
                    <h2 class="text-lg font-semibold mb-1">{{ post.title }}</h2>
                    <p class="text-gray-500 text-xs">{{ post.date }} • {{ post.readTime }}</p>
                    <p class="text-gray-700 mt-2 leading-relaxed">{{ post.description }}</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <UBadge v-for="tag in post.tags" :key="tag" :label="tag" size="sm" variant="soft"
                            color="primary" />
                    </div>
                </div>
                <img v-if="post.image" :src="post.image" alt="Post Image"
                    class="w-28 h-28 object-cover rounded-md flex-shrink-0" />
            </div>
        </NuxtLink>
    </UCard>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>