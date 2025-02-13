<template>
  <ckeditor v-if="editor" v-model="data" :editor="editor" :config="config" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

const cloud = useCKEditorCloud({
  version: '44.2.0',
  premium: true
});

const data = ref('');
const editor = computed(() => {
  if (!cloud.data.value) {
    return null;
  }
  return cloud.data.value.CKEditor.ClassicEditor;
});

const config = computed(() => {
  if (!cloud.data.value) {
    return null;
  }

  const {
    Autoformat,
    AutoImage,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    BlockToolbar,
    Bold,
    CloudServices,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    Heading,
    FontSize,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Mention,
    Paragraph,
    SimpleUploadAdapter,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline
  } = cloud.data.value.CKEditor;

  return {
    licenseKey: `eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Njk5MDM5OTksImp0aSI6IjBiZmE0MTFhLWYxMjAtNDhjMi1hYzYzLTkxZGJiZTY1ZWYyNCIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiZjg1ZDA2MTcifQ.2HRnZKOfRqAPkWKZjV-XUwZJTRr3dGpUPc2nk7LaltuOfe1uJ8Hi3PChfSB9mVuO2ZMQQHVE2sEJn3BrKzzWVg`,
    plugins: [
      Heading,
      Autoformat, AutoImage, Autosave, BalloonToolbar, BlockQuote, BlockToolbar, Bold, CloudServices, Code, CodeBlock,
      Essentials, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, ImageBlock, ImageCaption,
      ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload,
      Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, Mention, Paragraph, SimpleUploadAdapter, Table,
      TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, TodoList,
      Underline
    ],
    toolbar: {
      items: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|',
        'underline', 'code', '|', 'link', 'insertImage', 'insertTable', 'blockQuote', 'codeBlock', '|',
        'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'],
      shouldNotGroupWhenFull: false
    },
    simpleUpload: {
      uploadUrl: 'http://localhost:3000/api/blog-file-upload',
      withCredentials: true,
      headers: {
        'X-CSRF-TOKEN': 'CSRF-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }
    },
    balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
    blockToolbar: ['fontSize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', '|', 'link', 'insertImage', 'insertTable', '|', 'bulletedList', 'numberedList', 'outdent', 'indent'],
    fontFamily: { supportAllValues: true },
    fontSize: { options: [10, 12, 14, 'default', 18, 20, 22], supportAllValues: true },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
        { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
      ]
    },
    image: {
      toolbar: ['toggleImageCaption', 'imageTextAlternative', '|', 'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|', 'resizeImage']
    },
    initialData: '<h2> Title </h2> <p> Write your article </p>',
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      decorators: {
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: { download: 'file' }
        }
      }
    },
    list: { properties: { styles: true, startIndex: true, reversed: true } },
    placeholder: 'Type or paste your content here!',
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    }
  };
});
</script>


<style>

.ck-content h1 {
  font-size: 2em !important;
  font-weight: bold !important;
}

.ck-content h2 {
  font-size: 1.75em !important;
  font-weight: bold !important;
}

.ck-content h3 {
  font-size: 1.5em !important;
  font-weight: bold !important;
}

.ck-content h4 {
  font-size: 1.25em !important;
  font-weight: bold !important;
}

.ck-content h5 {
  font-size: 1.1em !important;
  font-weight: bold !important;
}

.ck-content h6 {
  font-size: 1em !important;
  font-weight: bold !important;
}

</style>
