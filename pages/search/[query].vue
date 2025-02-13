<template>
    <div class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Blog List Section (Aligned like Notifications Section) -->
        <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-2xl font-semibold mb-4">Results for <span class="text-blue-600">{{ searchQuery }}</span></h1>

            <div class="space-y-4">
                <BlogPostItem v-for="post in visibleBlogPosts" :key="post.id" :post="post" />
            </div>

            <!-- Load More Button -->
            <div class="flex justify-center mt-6">
                <UButton v-if="visibleBlogPosts.length < blogPosts.length" @click="loadMore" color="primary">
                    Load More
                </UButton>
            </div>
        </div>

        <!-- Right Sidebar -->
        <RightSidebar :recommendedTopics="recommendedTopics" :visibleBlogs="visibleBlogForSidebar" />
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()
const visibleCount = ref(6);
const pageSize = 6;
const searchQuery = route.query.query || 'How to integrate' // Get search query from URL

// Fetch search results (Replace with your API call)
// const { data: blogPosts, pending, error } = useFetch(`/api/search?query=${searchQuery}`)


const recommendedTopics = ["Programming", "Laravel", "Web Development", "SEO", "Technology", "Flutter", "JavaScript"];

const visibleBlogForSidebar = [
    { id: 1, title: "Getting Started with Nuxt 3", author: "Hugo", date: "Feb 10, 2025", slug: "getting-started-nuxt3" },
    { id: 2, title: "Deploying Nuxt Apps to Vercel", author: "Hugo", date: "Jan 28, 2025", slug: "deploying-nuxt-vercel" },
];


const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Nuxt 3",
        description: "A quick guide to building applications with Nuxt 3.",
        date: "February 10, 2025",
        readTime: '5 min read',
        image: "https://mistral.bloggrify.com/.netlify/images?fit=cover&url=%2Fimages%2Fcovers%2Fsantorin.jpg",
        slug: "getting-started-nuxt3",
        tags: ["nuxt3", "javascript", "vue"],
    },
    {
        id: 2,
        title: "The Power of Vue Composition API",
        description: "Understanding how Vue's Composition API improves your development.",
        date: "February 5, 2025",
        readTime: '7 min read',
        image: null,
        slug: "vue-composition-api",
        tags: ["vue", "composition-api", "javascript"],
    },
    {
        id: 3,
        title: "Deploying Nuxt Apps to Vercel",
        description: "A step-by-step guide on how to deploy your Nuxt applications.",
        date: "January 28, 2025",
        readTime: '10 min read',
        image: "https://mistral.bloggrify.com/.netlify/images?fit=cover&url=%2Fimages%2Fcovers%2Fsantorin.jpg",
        slug: "deploying-nuxt-vercel",
        tags: ["nuxt", "vercel", "deployment"],
    },
];



const itemsPerPage = 2;
const visibleBlogPosts = ref(blogPosts.slice(0, itemsPerPage));

const loadMore = () => {
    const currentLength = visibleBlogPosts.value.length;
    visibleBlogPosts.value = blogPosts.slice(0, currentLength + itemsPerPage);
};


</script>
<style scoped>
.search-results-page {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.search-title {
    font-size: 24px;
    font-weight: bold;
}

.search-title span {
    color: #0070f3;
}

.content-wrapper {
    display: flex;
    gap: 20px;
}

.blog-list {
    flex: 3;
}
</style>
