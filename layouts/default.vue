<script setup>
import CustomHeader from '~/components/layout/CustomHeader.vue';
import CustomFooter from '~/components/layout/CustomFooter.vue';
</script>

<template>
  <div>
    <CustomHeader />
    <UContainer as="main">
      <slot />
    </UContainer>
    <CustomFooter />
  </div>
</template>
