<template>
  <div class="vh-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-6 d-none d-lg-block">
          <div class="w-100 h-100 background">
            <div class="w-75 h-75 centered-circle"></div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <login v-if="loginPage" @toogleLoginPage="handlePageView" />
          <signup v-if="!loginPage" @toogleLoginPage="handlePageView" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

const loginPage = ref<boolean>(false);

const handlePageView = function (val: boolean): void {
  loginPage.value = val;
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
  overflow: hidden;
}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ef3e2c, #e71f63);
}

.centered-circle {
  border-radius: 100%;
  opacity: 0.1;
  background: linear-gradient(to bottom, white, #e71f63);
}
</style>
