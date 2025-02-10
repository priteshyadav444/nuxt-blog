<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} MyBlog. All rights reserved.</p>
    </template>

    <template #right>
      <div class="flex space-x-4">
        <NuxtLink to="#" class="text-gray-500 hover:text-black">Privacy</NuxtLink>
        <NuxtLink to="#" class="text-gray-500 hover:text-black">Terms</NuxtLink>
      </div>
    </template>
  </UFooter>
</template>