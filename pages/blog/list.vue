<template>
  <UContainer class="py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Author Section -->
      <aside class="md:w-1/4">
        <UCard class="shadow-lg">
          <template #header>
            <div class="flex justify-center gap-2 mt-2">
              <UAvatar :src="author.avatar" :alt="author.name" size="xl" class="mx-auto" />
            </div>
          </template>
          <div class="p-3 text-center">
            <p class="font-semibold text-lg">{{ author.name }}</p>
            <p class="text-gray-500 text-sm">{{ author.title }}</p>
            <div class="flex justify-center gap-2 mt-3">
              <a v-for="item in author.social" :key="item.icon" :href="item.link" target="_blank">
                <UButton size="xs" :icon="item.icon" color="gray" variant="ghost" class="hover:text-primary" />
              </a>
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <UButton color="primary" variant="outline">
                Follow
              </UButton>
              <UButton color="black" variant="solid">
                <UIcon name="i-heroicons-envelope" class="mr-2" />
                Subscribe
              </UButton>
            </div>
          </div>
        </UCard>
      </aside>

      <!-- Blog Posts -->
      <div class="md:w-3/4">
        <UGrid :cols="{ xs: 1, md: 1 }" gap="4">
          <BlogPostItem v-for="post in visibleBlogPosts" :key="post.id" :post="post" />
        </UGrid>

        <!-- Load More Button -->
        <div class="flex justify-center mt-6">
          <UButton v-if="visibleBlogPosts.length < blogPosts.length" @click="loadMore" color="primary">
            Load More
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { ref } from "vue";

const author = {
  name: "Hugo",
  title: "Author and maintainer of Bloggrify",
  avatar: "https://avatars.githubusercontent.com/u/7305914?v=4",
  social: [
    { icon: 'i-simple-icons-x', link: 'https://twitter.com/nuxt_js' },
    { icon: 'i-simple-icons-medium', link: 'https://medium.com/@nuxt' },
    { icon: 'i-simple-icons-linkedin', link: 'https://linkedin.com/company/nuxt' },
    { icon: 'i-simple-icons-github', link: 'https://github.com/nuxt' },
    { icon: 'i-simple-icons-instagram', link: 'https://instagram.com/nuxt.js' },
    { icon: 'i-simple-icons-facebook', link: 'https://facebook.com/nuxt.js' },
  ],
};

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

// Load More Logic
const itemsPerPage = 2;
const visibleBlogPosts = ref(blogPosts.slice(0, itemsPerPage));

const loadMore = () => {
  const currentLength = visibleBlogPosts.value.length;
  visibleBlogPosts.value = blogPosts.slice(0, currentLength + itemsPerPage);
};
</script>
