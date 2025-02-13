<template>
  <file-pond name="file" ref="pond" class="filepond"
    label-idle="Drag & Drop your image or <span class='filepond--label-action'> Browse </span>"
    accepted-file-types="image/jpeg, image/png" v-bind:files="files" @updatefiles="handleFileUpdate" 
    allowImageCrop
      imageCropAspectRatio="1:1"
      />
</template>

<script setup>
import { ref } from "vue";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(FilePondPluginImageEdit, FilePondPluginImageCrop, FilePondPluginImagePreview);
const files = ref([]);

const handleFileUpdate = (fileItems) => {
  files.value = fileItems.map(fileItem => fileItem.file);
};
</script>
