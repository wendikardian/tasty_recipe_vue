<template>
    <div class="container-fluid py-5" style="background-color: #f5f5f5">
        <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
            <div class="text-center">
                <img src="@/assets/images/Logo.png" alt="Logo" />
                <h2 class="mt-4">Create your account</h2>
                <p>Enter your details to use all the app features.</p>
            </div>
            <form class="mt-3" @submit.prevent="register">
                <div class="row">
                    <div class="col">
                        <base-input type="text" identity="firstname" label="First Name" placeholder="Your first name"
                            v-model="signupData.firstname" />
                    </div>
                    <div class="col">
                        <base-input type="text" identity="lastname" label="Last Name" placeholder="Ex: Daniel"
                            v-model="signupData.lastname" />
                    </div>
                </div>
                <div class="my-4">
                    <base-input type="text" identity="username" label="Username" placeholder="Your username"
                        v-model="signupData.username" />

                </div>
                <div class="my-4">
                    <base-input type="email" identity="email" label="Email" placeholder="Your email address"
                        v-model="signupData.email" />
                </div>
                <div class="my-4">
                    <base-input type="password" identity="password" label="Password" placeholder="Your password"
                        v-model="signupData.password" @keyInput="passwordCheck" />
                    <p class="text-danger mt-1 fw-medium" style="font-size: 11px"
                        :style="{ display: passwordStatusDisplay }">
                        The Password field must be at least 8 characters in length.
                    </p>
                </div>
                <div class="my-4"><base-input type="password" identity="confirmationPassword" label="Confirmation Password"
                        placeholder="Same with password" v-model="signupData.confirmationPassword"
                        @keyInput="confirmationPasswordCheck" />
                    <p class="text-danger mt-1 fw-medium" style="font-size: 11px;"
                        :style="{ display: confirmPassowrdDoesNotMatch }">
                        The Password confirmation does not match.
                    </p>
                    <p class="text-success mt-1 fw-medium" style="font-size: 11px"
                        :style="{ display: confirmPassowrdDoesMatch }">
                        The Password confirmation does match.
                    </p>
                </div>
                <div class="my-4">
                    <base-input type="file" identity="recipeImage" label="Profile Photo" :isImage="true"
                        :value="signupData.imageLink" @change="checkImage">

                        <div>
                            <div class="border pi-1 mt-2 rounded-circle">
                                <img :src="signupData.imageLink" alt="" class="rounded-circle" width="140" height="150"
                                    style="object-fit: cover">
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
import { reactive, ref } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();





const signupData = reactive({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmationPassword: '',
    isLogin: false,
    imageLink: 'https://www.w3schools.com/howto/img_avatar.png'
})


const passwordStatusDisplay = ref("none");
const passwordCheck = () => {
    if (signupData.password.length < 8) {
        // alert(signupData.confirmationPassword.length)
        passwordStatusDisplay.value = "block";
    } else {
        passwordStatusDisplay.value = "none";
    }
}

const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
        console.log(reader.result);
        signupData.imageLink = reader.result;
    })
}


const confirmPassowrdDoesNotMatch = ref("none");
const confirmPassowrdDoesMatch = ref("none");

const confirmationPasswordCheck = () => {
    if (signupData.confirmationPassword === "") {
        confirmPassowrdDoesNotMatch.value = "none";
        confirmPassowrdDoesMatch.value = "none";
        return;
    }

    if (signupData.password !== signupData.confirmationPassword) {
        confirmPassowrdDoesNotMatch.value = "block";
        confirmPassowrdDoesMatch.value = "none";
        return;
    }

    confirmPassowrdDoesNotMatch.value = "none";
    confirmPassowrdDoesMatch.value = "block";
}

const register = async () => {
    if (signupData.password !== signupData.confirmationPassword || signupData.password.length < 8) {
        signupData.confirmationPassword = "";
        signupData.password = "";
        confirmPassowrdDoesNotMatch.value = "none";
        confirmPassowrdDoesMatch.value = "none";
    } else {
        await store.dispatch('auth/getRegisterData', signupData);
        router.push('/');
    }
};



</script>