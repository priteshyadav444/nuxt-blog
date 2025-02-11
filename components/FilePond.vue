<template>
    <file-pond
      name="file"
      ref="pond"
      class="filepond"
      label-idle="Drag & Drop your image or <span class='filepond--label-action'> Browse </span>"
      accepted-file-types="image/jpeg, image/png"
      v-bind:files="files"
      @updatefiles="handleFileUpdate"
    />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import vueFilePond from "vue-filepond";
  import "filepond/dist/filepond.min.css";
  import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
  
  const FilePond = vueFilePond();
  const files = ref([]);
  
  const handleFileUpdate = (fileItems) => {
    files.value = fileItems.map(fileItem => fileItem.file);
  };
  </script>
  