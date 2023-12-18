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
            <div class="col-md-6"><!-- Firstname --></div>
            <div class="col-md-6"><!-- Lastname --></div>
          </div>
          <div class="my-4"><!-- Username --></div>
          <div class="my-4"><!-- Email --></div>
          <div class="my-4"><!-- Password --></div>
          <div class="my-4"><!-- Confirm Password --></div>
        </form>
        <div class="text-center mt-4">
          <p class="fw-semibold">
            Already have account?<span style="color: #4c4ddc"
              > <router-link to="/login" class="text-decoration-none"> Login</router-link></span
            >
          </p>
        </div>
      </div>
    </div>
  </template>