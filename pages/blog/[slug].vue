<template>
  <div class="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
      <!-- Blog Image -->
      <NuxtImg
        src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*Hb6DyODWW66blvBmspCM4w.jpeg"
        alt="Blog Image"
        class="w-full rounded-lg mb-6 shadow-sm object-cover"
      />

      <!-- Blog Title -->
      <h1 class="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        Announcing Bloggrify 2.0: Enhanced SEO, Analytics, and Developer Experience
      </h1>

      <!-- Meta Info -->
      <div class="flex items-center text-gray-500 text-sm mb-6">
        <span class="mr-6 flex items-center">📅 Jan 24, 2025</span>
        <span class="mr-6 flex items-center">⏱️ 1 min read</span>
        <NuxtLink
          to="/blog/list"
          class="flex items-center text-primary hover:underline"
        >
          <img
            src="https://mistral.bloggrify.com/.netlify/images?url=%2Fimages%2Favatar.jpg"
            alt="Hugo"
            class="w-8 h-8 rounded-full border border-gray-300 mr-2"
          />
          <span class="font-medium">Hugo</span>
        </NuxtLink>
      </div>

      <!-- Blog Content -->
      <p class="text-gray-700 leading-relaxed text-lg mb-6">
        We're excited to announce the release of Bloggrify 2.0.0, representing a lot of development and 46 commits.
        This release focuses on improving SEO capabilities, expanding analytics options, and enhancing the developer experience.
      </p>

      <!-- Major Improvements -->
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
        Major Improvements
      </h2>

      <h3 class="text-xl font-semibold text-gray-700 mb-2">Enhanced SEO Stack</h3>
      <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li>
          Integrated
          <code class="bg-gray-100 px-2 py-1 rounded text-gray-900">nuxtjs/robots</code> and
          <code class="bg-gray-100 px-2 py-1 rounded text-gray-900">nuxtjs/sitemap</code> modules
        </li>
      </ul>

      <!-- Call to Action -->
      <div class="mt-8 flex justify-between items-center border-t pt-6">
        <NuxtLink
          to="/blog"
          class="text-primary font-semibold hover:underline flex items-center"
        >
          ← Back to Blog
        </NuxtLink>
        <NuxtLink
          to="/blog/list"
          class="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <img
            src="https://mistral.bloggrify.com/.netlify/images?url=%2Fimages%2Favatar.jpg"
            alt="Hugo"
            class="w-8 h-8 rounded-full border border-gray-300 mr-2"
          />
          More from Hugo →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
