<template>
    <header class="border-b bg-white dark:bg-gray-900 shadow-md">
        <UContainer class="flex items-center justify-between py-4">
            <!-- Logo -->
            <NuxtLink to="/" class="text-xl font-bold flex items-center text-gray-900 dark:text-gray-100">
                <span class="mr-2">🖋️</span> BlogPro
            </NuxtLink>


            <!-- Search Input -->
            <div class="hidden md:block w-64">
                <UInput v-model="searchQuery" placeholder="Search..." icon="i-heroicons-magnifying-glass" />
            </div>

            <!-- User Section -->
            <div class="flex items-center space-x-4">
                <NuxtLink to="/notification" class="relative text-gray-600 dark:text-gray-300 hover:text-primary">
                    <UButton icon="i-heroicons-bell" variant="ghost" class="p-2" />
                    <span v-if="notificationCount"
                        class="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">
                        {{ notificationCount }}
                    </span>
                </NuxtLink>

                <!-- Notifications -->
                <NuxtLink to="/blog/create" class="hover:text-primary">Write a Story</NuxtLink>

                <!-- Auth Buttons -->
                <template v-if="!isLoggedIn">
                    <NuxtLink to="/auth/login" class="text-gray-700 dark:text-gray-300 hover:text-primary">Login
                    </NuxtLink>
                    <UButton to="/auth/register" color="primary" class="px-4 py-2 rounded-lg">Get Started</UButton>
                </template>

                <!-- User Dropdown -->
                <template v-if="!isLoggedIn">
                    <UDropdown :items="menuItems">
                        <UButton icon="i-heroicons-user-circle" variant="ghost" class="p-2" />
                    </UDropdown>
                </template>
            </div>
        </UContainer>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const isLoggedIn = ref(false);
const notificationCount = ref(3); // Example: Replace with real notification count

const menuItems = [
    [{ label: 'Profile', icon: 'i-heroicons-user', to: '/profile' }],
    [{ label: 'Logout', icon: 'i-heroicons-arrow-left-on-rectangle', click: () => logoutUser() }]
];

const logoutUser = () => {
    console.log('User logged out');
};
</script>
