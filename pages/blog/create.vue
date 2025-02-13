<template>
  <div class="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
    <UCard class="shadow-md border border-gray-300 rounded-lg">
      <template #header>
        <h2 class="text-2xl font-bold">Create a Blog Post</h2>
      </template>

      <UForm @submit="saveBlog" :state="form" class="space-y-6">
        <UFormGroup label="Blog Title" :error="errors.title">
          <UInput v-model="form.title" placeholder="Enter blog title" @input="generateSlug" />
        </UFormGroup>

        <UFormGroup label="Blog Content" :error="errors.content">
          <CustomCkEditor v-model="form.content" class="custom-editor p-3" @update:modelValue="updateMetaFromContent" />
        </UFormGroup>

        <UFormGroup label="Blog Image" :error="errors.image">
          <FilePond v-model="form.image" />
        </UFormGroup>

        <!-- SEO & Meta Details -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300 relative">
          <button @click="toggleSeo" class="absolute top-2 right-2 text-xs px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300">↕</button>
          <h3 class="text-lg font-semibold mb-3">SEO & Meta Details</h3>
          
          <div v-show="showSeo">
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
              <div class="flex items-center gap-2">
                <UToggle v-model="autoGenerateKeywords" @change="generateKeywords" />
                <UInput v-if="!autoGenerateKeywords" v-model="form.metaKeywords" placeholder="comma, separated, keywords" />
              </div>
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
                <UTooltip text="Enable indexing for Google or disable for private posts." />
              </div>
            </UFormGroup>
          </div>
        </div>

        <div class="flex justify-end gap-4 mt-6">
          <UButton color="gray" @click="saveDraft">Save as Draft</UButton>
          <UButton color="blue" @click="previewBlog">Preview</UButton>
          <UButton type="submit" color="primary">Publish</UButton>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Joi from "joi";
import FilePond from "~/components/form/FilePond.vue";
import CustomCkEditor from "../../components/form/CustomCkEditor.vue";


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
  index: true,
});
const autoGenerateKeywords = ref(false);
const errors = reactive({});
const showSeo = ref(false);

const toggleSeo = () => {
  showSeo.value = !showSeo.value;
};

const generateSlug = () => {
  form.slug = form.title.toLowerCase().replace(/\s+/g, "-");
};

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

const saveDraft = () => {
  console.log("Blog saved as draft:", form);
};

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
</style>
