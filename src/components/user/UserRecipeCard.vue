<template>
    <div class="col-md-6 col-12 my-2">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="mb-0">Recipe Category</p>
              <div class="h-50">
                <h4 class="fs-5 mb-0">Recipe Name</h4>
              </div>
              <slot></slot>
            </div>
            <div class="d-flex">
              <img src="" alt="" width="90" height="80" class="rounded" style="object-fit: cover">
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3 pt-3 border-top">
            <button class="btn delete-btn px-3 py-2 rounded-pill"></button>
            <button class="btn edit-btn px-3 py-2 rounded-pill"></button>
          </div>
        </div>
      </div>
    </div>
  </template>