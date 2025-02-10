<template>
    <div class="max-w-5xl mx-auto py-10">
        <!-- Pinned / Latest Blog Section -->
        <div v-if="pinnedBlog" class="mb-8">
            <UCard>
                <template #header>
                    <h2 class="text-xl font-bold">Pinned Blog</h2>
                </template>
                <div @click="goToBlog(pinnedBlog.slug)" class="cursor-pointer">
                    <img :src="pinnedBlog.image" class="rounded-lg w-full h-60 object-cover mb-4" />
                    <h3 class="text-2xl font-bold">{{ pinnedBlog.title }}</h3>
                    <p class="text-gray-500 text-sm">By {{ pinnedBlog.author }} • {{ pinnedBlog.date }}</p>
                    <p class="mt-2">{{ pinnedBlog.excerpt }}</p>
                </div>
            </UCard>
        </div>

        <!-- Blog List -->
        <h2 class="text-2xl font-bold mb-4">All Blogs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UCard v-for="blog in blogs" :key="blog.id" @click="goToBlog(blog.slug)" class="cursor-pointer">
                <img :src="blog.image" class="rounded-lg w-full h-40 object-cover mb-3" />
                <h3 class="text-lg font-semibold">{{ blog.title }}</h3>
                <p class="text-gray-500 text-sm">By {{ blog.author }} • {{ blog.date }}</p>
            </UCard>
        </div>

        <!-- Pagination -->
        <div class="mt-8 flex justify-center">
            <UPagination v-model="currentPage" :total="totalBlogs" :page-count="pageSize" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentPage = ref(1);
const pageSize = 6;

const blogs = ref([
    { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://via.placeholder.com/600", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://via.placeholder.com/600", excerpt: "This is another short preview." },
]);

const pinnedBlog = computed(() => blogs.value[0]); // Assume first blog is pinned
const totalBlogs = computed(() => blogs.value.length);

const goToBlog = (slug) => {
    router.push(`/blog/${slug}`);
};
</script>