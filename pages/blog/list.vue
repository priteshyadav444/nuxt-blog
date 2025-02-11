<template>
    <UContainer class="py-12">
      <UHeader>
        <template #left>
          <h1 class="text-3xl font-bold">Latest Blog Posts</h1>
        </template>
      </UHeader>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Author Section -->
        <aside class="md:w-1/4">
          <UCard :ui="{ rounded: 'lg', shadow: 'lg' }">
            <template #header>
              <UAvatar :src="author.avatar" :alt="author.name" size="xl" class="mx-auto" />
            </template>
            <div class="p-4 text-center">
              <p class="font-semibold text-xl">{{ author.name }}</p>
              <p class="text-gray-500">{{ author.title }}</p>
              <div class="flex justify-center gap-2 mt-2">
                <a v-for="item in author.social" :key="item.icon" :href="item.link" target="_blank">
                  <UButton size="xs" :icon="item.icon" color="black" variant="ghost" />
                </a>
              </div>
              <UButton class="mt-4 w-full" color="primary" variant="outline">
                Follow
              </UButton>
            </div>
          </UCard>
        </aside>
  
        <!-- Blog Posts -->
        <div class="md:w-3/4">
          <UGrid :cols="{ xs: 1, md: 1 }" gap="6">
            <UCard v-for="post in blogPosts" :key="post.id" :ui="{ rounded: 'lg', shadow: 'lg' }">
              <template #header>
                <img v-if="post.image" :src="post.image" alt="Post Image" class="w-full h-48 object-cover" />
              </template>
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
                <p class="text-gray-600 text-sm">{{ post.date }} - {{ post.readTime }}</p>
                <p class="text-gray-700 mt-2">{{ post.description }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <UTag v-for="tag in post.tags" :key="tag" :label="tag" size="sm" variant="subtle" color="primary" />
                </div>
                <div class="mt-4">
                  <NuxtLink :to="`/blog/${post.slug}`" class="text-blue-500 hover:underline">Read More</NuxtLink>
                </div>
              </div>
            </UCard>
          </UGrid>
        </div>
      </div>
    </UContainer>
  </template>
  
  <script setup>
  
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
      image: "https://source.unsplash.com/random/400x300",
      slug: "getting-started-nuxt3",
      tags: ["nuxt3", "javascript", "vue"],
    },
    {
      id: 2,
      title: "The Power of Vue Composition API",
      description: "Understanding how Vue's Composition API improves your development.",
      date: "February 5, 2025",
      readTime: '7 min read',
      image: "",
      slug: "vue-composition-api",
      tags: ["vue", "composition-api", "javascript"],
    },
    {
      id: 3,
      title: "Deploying Nuxt Apps to Vercel",
      description: "A step-by-step guide on how to deploy your Nuxt applications.",
      date: "January 28, 2025",
      readTime: '10 min read',
      image: "https://source.unsplash.com/random/401x300",
      slug: "deploying-nuxt-vercel",
      tags: ["nuxt", "vercel", "deployment"],
    },
  ];
  </script>
  