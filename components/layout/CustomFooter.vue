<template>
  <footer
    class="bg-white dark:bg-gray-900 border-t py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} MyBlog. All rights reserved.</p>

    <nav class="flex space-x-4 mt-2 md:mt-0">
      <NuxtLink to="/privacy" class="text-gray-500 hover:text-primary transition">Privacy Policy</NuxtLink>
      <NuxtLink to="/terms" class="text-gray-500 hover:text-primary transition">Terms of Service</NuxtLink>
      <NuxtLink to="/contact" class="text-gray-500 hover:text-primary transition">Contact</NuxtLink>
    </nav>
  </footer>
</template>
<script setup>
</script>