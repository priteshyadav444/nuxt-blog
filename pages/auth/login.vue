<template>
  <div class="flex justify-center items-center min-h-screen">
    <UCard class="w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
      <template #header>
        <div class="text-center">
          <UIcon name="i-heroicons-lock-closed" class="text-xl mb-2" />
          <h2 class="text-xl font-bold">Welcome back</h2>
          <p class="text-sm mt-1">
            Don't have an account?
            <NuxtLink to="/auth/register" class="text-primary font-semibold">Sign up</NuxtLink>
          </p>
        </div>
      </template>

      <UForm :state="form" @submit="loginUser" class="space-y-4">
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
          <button @click.prevent="showForgotPasswordModal" class="text-sm text-primary float-right mt-1">Forgot
            password?</button>
        </UFormGroup>

        <UButton type="submit" block color="primary" class="py-2 font-semibold">Continue →</UButton>

        <div class="flex items-center my-4">
          <div class="border-t flex-grow"></div>
          <span class="mx-2 text-sm">or</span>
          <div class="border-t flex-grow"></div>
        </div>

        <UButton block color="gray" variant="outline" class="py-2">
          <template #leading>
            <UIcon name="i-logos:google-icon" class="w-5 h-5" />
          </template>
          Continue with Google
        </UButton>
      </UForm>

      <p class="text-xs text-center mt-4">By signing in, you agree to our <NuxtLink to="/terms"
          class="text-primary font-semibold">Terms of Service</NuxtLink>.</p>
    </UCard>

    <!-- Forgot Password Modal -->
    <UModal v-model="isForgotPasswordModalOpen">
      <UCard class="w-full p-6 rounded-lg">
        <template #header>
          <h3 class="text-lg font-semibold">Forgot Password</h3>
        </template>

        <UForm v-if="step === 1" @submit.prevent="sendOtp" class="space-y-4">
          <UFormGroup label="Email" name="email">
            <UInput v-model="resetForm.email" type="email" placeholder="Enter your email" required />
          </UFormGroup>
          <UButton type="submit" block color="primary" class="py-2">Send OTP</UButton>
        </UForm>

        <UForm v-if="step === 2" @submit.prevent="verifyOtp" class="space-y-4">
          <UFormGroup label="OTP" name="otp">
            <UInput v-model="resetForm.otp" type="text" placeholder="Enter OTP" required />
          </UFormGroup>
          <UButton type="submit" block color="primary" class="py-2">Verify OTP</UButton>
        </UForm>

        <UForm v-if="step === 3" @submit.prevent="resetPassword" class="space-y-4">
          <UFormGroup label="New Password" name="password">
            <UInput v-model="resetForm.password" type="password" placeholder="Enter new password" required />
          </UFormGroup>
          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput v-model="resetForm.confirmPassword" type="password" placeholder="Confirm new password" required />
          </UFormGroup>
          <UButton type="submit" block color="primary" class="py-2">Reset Password</UButton>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const form = ref({
  email: '',
  password: ''
});
const showPassword = ref(false);
const isForgotPasswordModalOpen = ref(false);
const step = ref(1);
const resetForm = ref({
  email: '',
  otp: '',
  password: '',
  confirmPassword: ''
});

const loginUser = () => {
  console.log('Logging in:', form.value);
  // Handle API request here
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const showForgotPasswordModal = () => {
  isForgotPasswordModalOpen.value = true;
  step.value = 1;
};

const sendOtp = () => {
  console.log('Sending OTP to:', resetForm.value.email);
  step.value = 2;
};

const verifyOtp = () => {
  console.log('Verifying OTP:', resetForm.value.otp);
  step.value = 3;
};

const resetPassword = () => {
  console.log('Resetting password for:', resetForm.value.email);
  isForgotPasswordModalOpen.value = false;
};
</script>
