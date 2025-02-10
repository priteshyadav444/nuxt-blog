<template>
  <div class="flex justify-center items-center min-h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">Create an Account</h2>
      </template>

      <UForm :state="form" @submit="registerUser" class="space-y-4">
        <UFormGroup label="Full Name" name="name">
          <UInput v-model="form.name" placeholder="Enter your name" required />
        </UFormGroup>

        <UFormGroup label="Email Address" name="email">
          <UInput v-model="form.email" type="email" placeholder="Enter your email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" placeholder="Entfcreateer a password" required />
        </UFormGroup>

        <UFormGroup label="How did you hear about us?" name="referral">
          <USelect v-model="form.referral" :options="referralOptions" placeholder="Select an option" />
        </UFormGroup>

        <UButton type="submit" block color="primary">Sign Up</UButton>

        <p class="text-sm text-center mt-2">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-primary font-semibold">Log in</NuxtLink>
        </p>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  password: '',
  referral: ''
});

const referralOptions = ['Google', 'Social Media', 'Friend', 'Other'];

const registerUser = () => {
  console.log('Registering:', form.value);
  // Handle API request here
};
</script>