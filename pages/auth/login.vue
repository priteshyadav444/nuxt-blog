<template>
  <div class="flex justify-center items-center min-h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">Login</h2>
      </template>

      <UForm :state="form" @submit="loginUser" class="space-y-4">
        <UFormGroup label="Email Address" name="email">
          <UInput v-model="form.email" type="email" placeholder="Enter your email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" placeholder="Enter your password" required />
        </UFormGroup>

        <UButton type="submit" block color="primary">Login</UButton>

        <p class="text-sm text-center mt-2">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-primary font-semibold">Sign up</NuxtLink>
        </p>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>
const form = ref({
  email: '',
  password: ''
});

const loginUser = () => {
  console.log('Logging in:', form.value);
  // Handle API request here
};
</script>
