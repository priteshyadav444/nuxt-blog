<template>
  <div class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Notifications Section -->
    <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Notifications</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification.id" class="py-4 border-b">
          <span class="font-medium">{{ notification.user }}</span>
          <span class="text-gray-600"> {{ notification.message }}</span>
          <div class="text-sm text-gray-500">{{ notification.date }}</div>
        </li>
      </ul>
    </div>

    <!-- Right Sidebar Component -->
    <RightSidebar :recommendedTopics="recommendedTopics" :visibleBlogs="visibleBlogs" />
  </div>
</template>

<script setup>
import RightSidebar from "~/components/common/RightSidebar.vue";
import { ref } from "vue";

const notifications = ref([
  { id: 1, user: "Adarsh Haldar", date: "Feb 6, 2025", message: "started following you" },
  { id: 2, user: "Jatann Bhimani + 1 other", date: "Jan 28, 2025", message: "started following you" },
  { id: 3, user: "Jatin Patel", date: "Sep 13, 2024", message: "started following you" },
]);

const recommendedTopics = ["Programming", "Laravel", "Web Development", "SEO", "Technology", "Flutter", "JavaScript"];

const visibleBlogs = [
  { id: 1, title: "Getting Started with Nuxt 3", author: "Hugo", date: "Feb 10, 2025", slug: "getting-started-nuxt3" },
  { id: 2, title: "Deploying Nuxt Apps to Vercel", author: "Hugo", date: "Jan 28, 2025", slug: "deploying-nuxt-vercel" },
];
</script>


<style scoped>
.container {
  max-width: 1200px;
}
</style>