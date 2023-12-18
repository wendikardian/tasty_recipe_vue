<template>
    <div class="container-fluid py-5" style="background-color: #f5f5f5">
        <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
            <div class="text-center">
                <img src="@/assets/images/Logo.png" alt="Logo" />
                <h2 class="mt-4">Create your account</h2>
                <p>Enter your details to use all the app features.</p>
            </div>
            <form class="mt-3">
                <div class="row">
                    <div class="col">
                        <base-input type="text" identity="firstname" label="First Name" placeholder="Your first name" />
                    </div>
                    <div class="col">
                        <base-input type="text" identity="lastname" label="Last Name" placeholder="Ex: Daniel" />
                    </div>
                </div>
                <div class="my-4">
                    <base-input type="text" identity="username" label="Username" placeholder="Your username" />

                </div>
                <div class="my-4">
                    <base-input type="email" identity="email" label="Email" placeholder="Your email address" />
                </div>
                <div class="my-4">
                    <base-input type="password" identity="password" label="Password" placeholder="Your password" />
                </div>
                <div class="my-4"><base-input type="password" identity="confirmationPassword" label="Confirmation Password"
                        placeholder="Same with password" /></div>
                <div class="my-4">
                    <base-input type="file" identity="recipeImage" label="Profile Photo" isImage="true">
                        <div>
                            <div class="border pi-1 mt-2 rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt=""
                                class="rounded-circle" width="140" height="150" style="object-fit: cover"
                                >
                            </div>
                            <div class="text-center" style="transform: translateY(-24px)">
                                <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white">
                                    
                                </i>
                            </div>
                        </div>
                    </base-input>
                </div>

                <base-button class="login w-100 my-3">Register </base-button>
            </form>
            <div class="text-center mt-4">
                <p class="fw-semibold">
                    Already have account?<span style="color: #4c4ddc"> <router-link to="/login"
                            class="text-decoration-none"> Login</router-link></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup >
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';

</script>