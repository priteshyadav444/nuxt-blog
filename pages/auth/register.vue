<template>
  <div class="flex justify-center items-center min-h-screen mt-4">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">Create an Account</h2>
        <p class="text-sm text-center mt-1">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-primary font-semibold">Login</NuxtLink>
        </p>
      </template>

      <UForm :state="form" @submit="registerUser" class="space-y-4">
        <UFormGroup label="Name" name="name">
          <UInput v-model="form.name" placeholder="Enter your name" required />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="form.email" type="email" placeholder="Enter your email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <div class="relative">
            <UInput v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password"
              required />
            <UButton size="xs" @click="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2"
              variant="ghost">
              <UIcon :name="showPassword ? 'i-entypo:eye' : 'i-entypo:eye-with-line'" class="w-5 h-5" />
            </UButton>
          </div>
        </UFormGroup>

        <UFormGroup label="Confirm Password" name="confirmPassword">
          <div class="relative">
            <UInput v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Enter your confirm password" required />
            <UButton size="xs" @click="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2"
              variant="ghost">
              <UIcon :name="showConfirmPassword ? 'i-entypo:eye' : 'i-entypo:eye-with-line'" class="w-5 h-5" />
            </UButton>
          </div>
        </UFormGroup>

        <UFormGroup label="How did you hear about us?" name="referral">
          <USelect v-model="form.referral" :options="referralOptions" placeholder="Select an option" />
        </UFormGroup>

        <UFormGroup v-if="form.referral === 'Other'" label="Please specify" name="otherReferral">
          <UInput v-model="form.otherReferral" placeholder="Enter details" />
        </UFormGroup>

        <UButton type="submit" block color="primary">Create account</UButton>

        <div class="flex items-center my-4">
          <div class="border-t flex-grow"></div>
          <span class="mx-2 text-sm text-gray-500">or</span>
          <div class="border-t flex-grow"></div>
        </div>

        <UButton block color="gray" variant="outline">
          <template #leading>
            <UIcon name="i-logos:google-icon" class="w-5 h-5" />
          </template>
          Continue with Google
        </UButton>
      </UForm>
      <p class="text-xs text-center mt-4">By signing in, you agree to our <NuxtLink to="/terms"
          class="text-primary font-semibold">Terms of Service</NuxtLink>.</p>
    </UCard>
  </div>
</template>

<script setup>
let showPassword = ref(false);
let showConfirmPassword = ref(false);
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  referral: '',
  otherReferral: ''
});

const referralOptions = ['Google', 'Social Media', 'Friend', 'Other'];

const registerUser = () => {
  console.log('Registering:', form.value);
  // Handle API request here
};


const togglePassword = (type) => {
  if (type == 'password') {
    showPassword.value = !showPassword.value;
  } else {
    showConfirmPassword.value = !showConfirmPassword.value;
  }
};

</script>
