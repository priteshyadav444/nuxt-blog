<template>
  <div class="max-w-4xl mx-auto py-10">
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">Create a Blog Post</h2>
      </template>

      <UForm :state="form" @submit="saveBlog" class="space-y-5">
        <!-- Blog Title & Slug -->
        <UFormGroup label="Blog Title" name="title">
          <UInput v-model="form.title" placeholder="Enter blog title" @input="generateSlug" required />
        </UFormGroup>

        <UFormGroup label="Slug" name="slug">
          <UInput v-model="form.slug" placeholder="blog-title-slug" />
        </UFormGroup>

        <!-- Blog Content (WYSIWYG Editor) -->
        <UFormGroup label="Blog Content" name="content">
          <UTextarea  v-model="form.content" placeholder="Write your blog content here..." />
        </UFormGroup>

        <!-- Blog Image Upload -->
        <UFormGroup label="Blog Image" name="image">
          <UInput type="file" @change="uploadImage" />
        </UFormGroup>

        <!-- SEO Meta Details -->
        <UAccordion :items="seoSettings" />

        <!-- Action Buttons -->
        <div class="flex justify-end gap-3">
          <UButton color="gray" @click="saveDraft">Save as Draft</UButton>
          <UButton color="blue" @click="previewBlog">Preview</UButton>
          <UButton type="submit" color="primary">Publish</UButton>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>

const form = ref({
  title: "",
  slug: "",
  content: "",
  image: null,
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
});

const seoSettings = [
  { label: "SEO Settings", content: "Meta Title, Description, and Keywords" },
  { label: "Open Graph & Social Media", content: "OG Title, Description, Image, URL" },
];

const generateSlug = () => {
  form.value.slug = form.value.title.toLowerCase().replace(/\s+/g, "-");
};

const uploadImage = (event) => {
  form.value.image = event.target.files[0];
};

const saveDraft = () => {
  console.log("Blog saved as draft:", form.value);
};

const previewBlog = () => {
  console.log("Previewing blog:", form.value);
};

const saveBlog = () => {
  console.log("Blog published:", form.value);
};
</script>
