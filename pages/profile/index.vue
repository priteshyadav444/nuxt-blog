<template>
    <div class="flex justify-center items-center min-h-screen">
      <UCard class="w-full max-w-md">
        <template #header>
          <h2 class="text-xl font-bold text-center">Profile</h2>
          <p class="text-sm text-center text-gray-500">Manage your account details</p>
        </template>
  
        <!-- User Details -->
        <div class="space-y-4">
          <UFormGroup label="Name" name="name">
            <UInput v-model="form.name" placeholder="Enter your name" required />
          </UFormGroup>
  
          <UFormGroup label="Email" name="email">
            <div class="relative flex items-center">
              <UInput v-model="form.email" type="email" disabled />
              <UButton size="xs" @click="openOtpModal" class="ml-2" color="primary">Change</UButton>
            </div>
          </UFormGroup>
  
          <UFormGroup label="Password" name="password">
            <div class="relative flex items-center">
              <UInput type="password" placeholder="********" disabled />
              <UButton size="xs" @click="openPasswordModal" class="ml-2" color="primary">Change</UButton>
            </div>
          </UFormGroup>
  
          <UFormGroup label="Push Notifications">
            <UToggle v-model="form.pushNotifications" />
          </UFormGroup>
  
          <UButton @click="updateProfile" block color="primary">Update Profile</UButton>
        </div>
      </UCard>
  
      <!-- OTP Verification Modal -->
      <UModal v-model="showOtpModal">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-center">Verify Your Email</h3>
            <p class="text-sm text-center text-gray-500">Enter the OTP sent to your new email.</p>
          </template>
  
          <UInput v-model="otp" type="number" placeholder="Enter OTP" class="mb-4" />
  
          <div class="flex justify-between">
            <UButton variant="ghost" @click="resendOtp">Resend OTP</UButton>
            <UButton color="primary" @click="verifyOtp">Verify</UButton>
          </div>
        </UCard>
      </UModal>
  
      <!-- Change Password Modal -->
      <UModal v-model="showPasswordModal">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-center">Change Password</h3>
            <p class="text-sm text-center text-gray-500">Enter your new password below.</p>
          </template>
  
          <UFormGroup label="New Password" name="newPassword">
            <UInput v-model="passwordForm.newPassword" type="password" placeholder="Enter new password" />
          </UFormGroup>
  
          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput v-model="passwordForm.confirmPassword" type="password" placeholder="Confirm new password" />
          </UFormGroup>
  
          <div class="flex justify-between">
            <UButton variant="ghost" @click="showPasswordModal = false">Cancel</UButton>
            <UButton color="primary" @click="changePassword">Update</UButton>
          </div>
        </UCard>
      </UModal>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: 'John Doe',
    email: 'johndoe@example.com',
    pushNotifications: true,
  });
  
  const passwordForm = ref({
    newPassword: '',
    confirmPassword: '',
  });
  
  const showOtpModal = ref(false);
  const showPasswordModal = ref(false);
  const otp = ref('');
  
  const openOtpModal = () => {
    showOtpModal.value = true;
  };
  
  const openPasswordModal = () => {
    showPasswordModal.value = true;
  };
  
  const resendOtp = () => {
    console.log('OTP Resent');
    // Implement OTP resend logic
  };
  
  const verifyOtp = () => {
    console.log('OTP Verified:', otp.value);
    showOtpModal.value = false;
    // Implement OTP verification logic
  };
  
  const changePassword = () => {
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Password Changed:', passwordForm.value.newPassword);
    showPasswordModal.value = false;
    // Implement password update logic
  };
  
  const updateProfile = () => {
    console.log('Profile Updated:', form.value);
    // Implement profile update logic
  };
  </script>
  