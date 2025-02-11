<template>
    <UNotification
      v-if="visible"
      :type="type"
      :title="title"
      :timeout="3000"
      class="fixed top-5 right-5 z-50"
    >
      {{ message }}
    </UNotification>
  </template>
  
  <script setup>
  import { ref, watchEffect } from "vue";
  
  const props = defineProps({
    type: { type: String, default: "info" }, // success, error, info
    title: { type: String, default: "" },
    message: { type: String, required: true },
    show: { type: Boolean, default: false },
  });
  
  const visible = ref(props.show);
  
  // Watch for external show prop changes
  watchEffect(() => {
    if (props.show) {
      visible.value = true;
      setTimeout(() => (visible.value = false), 3000); // Auto hide after 3s
    }
  });
  </script>


<!-- import { ref } from "vue";
import NotificationComponent from "@/components/NotificationComponent.vue";

const notification = ref({
  type: "info",
  title: "",
  message: "",
  show: false,
});

// Function to show notification
const showNotification = (type, title, message) => {
  notification.value = { type, title, message, show: true };
  setTimeout(() => (notification.value.show = false), 3000); // Auto-hide after 3s
};

const showSuccess = () => showNotification("success", "Success", "Blog post saved successfully!");
const showError = () => showNotification("error", "Error", "Failed to save blog post!");
const showInfo = () => showNotification("info", "Info", "This is an informational message.");
   -->