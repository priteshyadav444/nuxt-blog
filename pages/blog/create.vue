<template>
  <div class="grid grid-cols-3 gap-5">
    <!-- Main Blog Form -->
    <div class="col-span-2">
      <UCard>
        <template #header>
          <h2 class="text-xl font-bold">Create a Blog Post</h2>
        </template>

        <UForm @submit="saveBlog" class="space-y-5">
          <UFormGroup label="Blog Title" :error="errors.title">
            <UInput v-model="form.title" placeholder="Enter blog title" @input="generateSlug" />
          </UFormGroup>

          <!-- WYSIWYG Editor -->
          <UFormGroup label="Blog Content" :error="errors.content">
            <TiptapEditor v-model="form.content" class="custom-editor" @update:modelValue="updateMetaFromContent" />
          </UFormGroup>

          <!-- Drag and Drop Image Upload -->
          <UFormGroup label="Blog Image" :error="errors.image">
            <FilePond v-model="form.image" />
          </UFormGroup>

          <div class="flex justify-end gap-3">
            <UButton color="gray" @click="saveDraft">Save as Draft</UButton>
            <UButton color="blue" @click="previewBlog">Preview</UButton>
            <UButton type="submit" color="primary">Publish</UButton>
          </div>
        </UForm>
      </UCard>
    </div>

    <!-- SEO & Open Graph Section (Always Visible) -->
    <div class="col-span-1">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">SEO & Open Graph</h3>
          <UButton size="xs" @click="toggleSeoSettings">
              {{ showSeoSettings ? "Collapse" : "Expand" }}
            </UButton>
        </template>

        <UForm v-if="showSeoSettings"  class="space-y-3">
          <UFormGroup label="Slug" :error="errors.slug">
            <UInput v-model="form.slug" placeholder="blog-title-slug" />
          </UFormGroup>

          <UFormGroup label="Meta Title">
            <UInput v-model="form.metaTitle" :placeholder="form.title" />
          </UFormGroup>

          <UFormGroup label="Meta Description">
            <UTextarea v-model="form.metaDescription" placeholder="Short summary for search engines" />
          </UFormGroup>

          <UFormGroup label="Auto Generate Keywords">
            <UToggle v-model="autoGenerateKeywords" @change="generateKeywords" />
            <UInput v-if="!autoGenerateKeywords" v-model="form.metaKeywords" placeholder="comma, separated, keywords" />
          </UFormGroup>

          <UFormGroup label="OG Title">
            <UInput v-model="form.ogTitle" :placeholder="form.title" />
          </UFormGroup>

          <UFormGroup label="OG Description">
            <UTextarea v-model="form.ogDescription" placeholder="Short summary for social media" />
          </UFormGroup>

          <UFormGroup label="Indexing">
            <div class="flex items-center gap-2">
              <UToggle v-model="form.index" />
              <UTooltip text="If enabled, the blog will be indexed on Google. If disabled, it will only be accessible via direct link." />
            </div>
          </UFormGroup>
        </UForm>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Joi from "joi";
import FilePond from "@/components/FilePond.vue";

const form = reactive({
  title: "",
  slug: "",
  content: "",
  image: null,
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  ogTitle: "",
  ogDescription: "",
  index: true, // Default to indexing
});
const showSeoSettings = ref(false);

const autoGenerateKeywords = ref(false);
const errors = reactive({});

// Slug Generation
const generateSlug = () => {
  form.slug = form.title.toLowerCase().replace(/\s+/g, "-");
};

const toggleSeoSettings = () => {
  showSeoSettings.value = !showSeoSettings.value;
};


// Auto-generate Meta Description & Keywords
const updateMetaFromContent = () => {
  if (!form.metaDescription) {
    form.metaDescription = form.content.substring(0, 150);
  }
  if (autoGenerateKeywords.value) {
    generateKeywords();
  }
};

const generateKeywords = () => {
  if (autoGenerateKeywords.value) {
    const words = form.content
      .toLowerCase()
      .match(/\b\w{4,}\b/g)
      ?.slice(0, 10)
      .join(", ") || "";
    form.metaKeywords = words;
  }
};

// Form Validation Schema
const blogSchema = Joi.object({
  title: Joi.string().min(5).required().messages({
    "string.empty": "Title is required.",
    "string.min": "Title must be at least 5 characters.",
  }),
  slug: Joi.string().required().messages({
    "string.empty": "Slug is required.",
  }),
  content: Joi.string().min(50).required().messages({
    "string.empty": "Content is required.",
    "string.min": "Content must be at least 50 characters.",
  }),
  image: Joi.any().required().messages({
    "any.required": "Blog image is required.",
  }),
});

// Save Blog with Validation
const saveBlog = (event) => {
  event.preventDefault();
  const { error } = blogSchema.validate(form, { abortEarly: false });

  if (error) {
    errors.value = error.details.reduce((acc, err) => {
      acc[err.context.key] = err.message;
      return acc;
    }, {});
  } else {
    console.log("Blog Published:", form);
    errors.value = {};
  }
};

// Save Draft
const saveDraft = () => {
  console.log("Blog saved as draft:", form);
};

// Preview Blog
const previewBlog = () => {
  console.log("Previewing blog:", form);
};
</script>

<style>
.custom-editor {
  min-height: 300px;
  border: none !important;
  box-shadow: none !important;
}

.custom-editor:focus,
.u-input:focus,
.u-textarea:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
