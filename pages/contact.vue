<template>
    <div class="max-w-2xl mx-auto py-10 px-5">
        <h1 class="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p class="text-gray-600 text-center mb-6">
            Have questions? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div class="px-8">
            <UCard>
                <UForm :state="form" @submit="submitForm" class="space-y-4">
                    <UFormGroup label="Full Name" name="name">
                        <UInput v-model="form.name" placeholder="Enter your name" required />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email">
                        <UInput v-model="form.email" type="email" placeholder="Enter your email" required />
                    </UFormGroup>

                    <UFormGroup label="Subject" name="subject">
                        <UInput v-model="form.subject" placeholder="Enter subject" required />
                    </UFormGroup>

                    <UFormGroup label="Message" name="message">
                        <UTextarea v-model="form.message" placeholder="Enter your message" required rows="4" />
                    </UFormGroup>

                    <UButton type="submit" block color="primary">Send Message</UButton>
                </UForm>
            </UCard>
        </div>

        <div class="text-center mt-6">
            <p class="text-gray-600">You can also reach us at:</p>
            <p class="text-gray-800 font-semibold">
                📧 <a href="mailto:support@example.com" class="text-primary">support@example.com</a>
            </p>
            <p class="text-gray-800 font-semibold">
                📞 <a href="tel:+123456789" class="text-primary">+1 (234) 567-89</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "#imports";

const toast = useToast();

const form = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const submitForm = () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
        toast.add({ title: "Error", description: "All fields are required", color: "red" });
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        toast.add({ title: "Success", description: "Message sent successfully!", color: "green" });

        // Reset form
        form.value = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    }, 1000);
};
</script>