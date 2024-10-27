<template>
  <div>
    <div class="container mt-3 p-3">
      <div class="row">
        <div class="col-lg-6">
          <p class="h2">User</p>
          <p class="text-muted">
            <NuxtLink to="/dashboard" class="text-decoration-none text-black"
              >Users</NuxtLink
            >
            > user
          </p>
        </div>
        <div class="col-lg-6 justify-content-end align-items-end d-flex">
          <el-button class="block-btn text-white">
            <i class="bi bi-ban me-2"></i>
            <span v-if="false">Unblock</span>
            <span>block</span>
          </el-button>
          <el-button :loading="loading" @click="deleteUser">
            <i class="bi bi-trash me-2"></i>
            Delete
          </el-button>
          <el-button style="width: 40px; height: 40px">
            <i class="bi bi-three-dots-vertical"></i>
          </el-button>
        </div>
      </div>
      <div v-if="!user">
        {{ error }}
      </div>
      <div v-if="user">
        <div class="row">
          <div class="d-flex gap-3">
            <el-avatar :size="120" :src="user.avatar ? user.avatar : null" />
            <div class="align-content-center">
              <p class="h3" :class="{ 'text-danger': false }">
                <i v-if="false" class="bi bi-ban me-2"></i>{{ user.name }}
              </p>
              <p class="h3" :class="{ 'text-danger': false }">
                {{ user.id }}
              </p>
            </div>
          </div>
        </div>
        <el-tabs
          v-model="activeName"
          class="demo-tabs mt-4"
          @tab-click="handleClick"
        >
          <el-tab-pane label="Account" name="first">
            <div class="row">
              <div class="d-flex justify-content-end">
                <editForm :user="user" />
              </div>
            </div>
            <div class="row">
              <p class="fw-bolder" style="font-size: 20px">Account info</p>
            </div>
            <div class="row">
              <p class="m-0 fw-bold" style="font-size: 16px">Name</p>
              <p class="text-muted" style="font-size: 14px">
                {{ user.name }}
              </p>
              <el-divider class="m-0 w-75" />
            </div>
            <div class="row mt-4">
              <p class="m-0 fw-bold" style="font-size: 16px">Email</p>
              <p class="text-muted" style="font-size: 14px">
                {{ user.email }}
              </p>
              <el-divider class="m-0 w-75" />
            </div>
            <div class="row mt-4">
              <p class="m-0 fw-bold" style="font-size: 16px">Role</p>
              <p class="text-muted" style="font-size: 14px">
                {{ user.role }}
              </p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GET_USER } from "~/graphql/query";
import { DELETE_USER } from "~/graphql/mutation";

definePageMeta({
  layout: "dashboard-layout",
});
const id = ref(useRoute().params.id);
const activeName = ref("first");


const { data, error, refresh } = await useAsyncQuery(GET_USER, {
  id: id.value,
});
const { user } = data.value;

const { mutate, onDone, loading } = useMutation(DELETE_USER);
const deleteUser = function () {
  mutate({
    id: id.value,
  });

  onDone(() => {
    navigateTo("/dashboard");
  });
};
</script>

<style scoped>
.block-btn {
  background: linear-gradient(to right, #ef3e2c, #e71f63);
}

.el-button {
  border-radius: 8px;
  width: 122px;
  height: 40px;
}
</style>
