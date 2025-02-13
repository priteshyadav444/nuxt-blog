<template>
    <div class="max-w-6xl mx-auto py-10">
        <!-- Pinned Blog as a Carousel -->
        <div v-if="blogs.length" class="relative mb-8 rounded-lg overflow-hidden shadow-lg">
            <div class="relative">
                <img :src="pinnedBlog.image" class="w-full h-80 object-cover brightness-75" />
                <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h2 class="text-3xl font-bold">{{ pinnedBlog.title }}</h2>
                    <p class="text-sm mt-1">
                        <span @click="goToBlogList" class="cursor-pointer text-yellow-300 hover:underline">{{ pinnedBlog.author }}</span> •
                        {{ pinnedBlog.date }}
                    </p>
                    <p class="mt-2 text-lg">{{ pinnedBlog.excerpt }}</p>
                </div>
                <!-- Carousel Controls -->
                <button @click="prevBlog" class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                    ◀
                </button>
                <button @click="nextBlog" class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                    ▶
                </button>
            </div>
        </div>


          <!-- Recommended Topics at the Top -->
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-4">Recommended Topics</h3>
            <div class="flex flex-wrap gap-3">
                <span v-for="topic in topics" :key="topic" 
                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300">
                    {{ topic }}
                </span>
            </div>
        </div>
  
        <!-- Blog List -->
        <h2 class="text-xl font-bold mb-4">All Blogs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BlogCard v-for="blog in visibleBlogs" :key="blog.id" :blog="blog" @click="goToBlog(blog.slug)" />
        </div>
  
        <!-- Load More Button -->
        <div class="mt-8 flex justify-center">
            <UButton v-if="visibleBlogs.length < blogs.length" @click="loadMore"  color="primary" 
                class="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                Load More
            </UButton>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const visibleCount = ref(6);
  const pageSize = 6;
  const currentPinnedIndex = ref(0);
  
  const blogs = ref([
    { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." },
    { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." },
    { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." },
    { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." },
     { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." },
     { id: 1, title: "First Blog Post", slug: "first-blog", author: "John Doe", date: "Feb 1, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is a short preview of the blog post." },
    { id: 2, title: "Second Blog Post", slug: "second-blog", author: "Jane Doe", date: "Feb 5, 2025", image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg", excerpt: "This is another short preview." ,  keywords: ["Laravel", "Backend"]},
  ]);
  
  const pinnedBlog = computed(() => blogs.value[currentPinnedIndex.value]);
  const visibleBlogs = computed(() => blogs.value.slice(0, visibleCount.value));
  const topics = ["Programming", "Laravel", "Web Development", "SEO", "Technology", "Flutter", "JavaScript"];
  
  const goToBlog = (slug) => router.push(`/blog/${slug}`);
  const goToBlogList = () => router.push(`/blog/list`);
  const loadMore = () => visibleCount.value += pageSize;
  
  const nextBlog = () => {
    currentPinnedIndex.value = (currentPinnedIndex.value + 1) % blogs.value.length;
  };
  
  const prevBlog = () => {
    currentPinnedIndex.value = (currentPinnedIndex.value - 1 + blogs.value.length) % blogs.value.length;
  };
  </script>
  