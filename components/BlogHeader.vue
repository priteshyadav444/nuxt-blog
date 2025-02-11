<template>
    <header class="border-b bg-white dark:bg-gray-900">
        <UContainer class="flex items-center justify-between py-3">
            <!-- Logo -->
            <NuxtLink to="/" class="text-xl font-bold flex items-center">
                <span class="mr-2">🖋️</span> BlogPro
            </NuxtLink>

            <!-- Navigation Links -->
            <nav class="flex space-x-6 text-gray-600 dark:text-gray-300">
                <NuxtLink to="/blog/" class="hover:underline">Explore</NuxtLink>
                <NuxtLink to="/blog/create" class="hover:underline">Write</NuxtLink>
            </nav>

            <!-- Search Input -->
            <UInput v-model="searchQuery" placeholder="Search..." icon="i-heroicons-magnifying-glass" class="w-64" />

            <!-- Authentication Buttons -->
            <div class="flex items-center space-x-4">
                <NuxtLink to="/auth/login" class="text-gray-700 dark:text-gray-300 hover:underline">Login</NuxtLink>
                <UButton to="/auth/register" color="primary" class="px-4 py-2 rounded-lg">Get Started</UButton>
            </div>
        </UContainer>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const searchQuery = ref('');

const isLoggedIn = ref(false);

const logoutUser = () => {
    isLoggedIn.value = false;
    console.log("User logged out");
};

</script>
