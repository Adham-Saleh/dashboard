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
          <el-button :loading="pending" @click="deleteUser">
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
        <div class="row mt-3 mt-md-0">
          <div class="d-flex gap-3">
            <ImageFormat
              :size="120"
              :image="user.avatar ? user.avatar : null"
            />
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
        <el-tabs v-model="activeName" class="demo-tabs mt-4">
          <el-tab-pane label="Account" name="first">
            <div class="row">
              <div class="d-flex justify-content-end">
                <editForm :user="user" />
              </div>
            </div>
            <div class="px-4">
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
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard-layout",
});

const id = ref(useRoute().params.id);
const activeName = ref("first");

const { data } = await useAsyncData("getSingleUser", () =>
  GqlGetUser({ id: id.value })
);

const { user } = data.value;

useHead({
  title: `${user.id} - ${user.name}`,
  meta: [
    {
      name: "view user",
      content: "view , edit and delete users faster than a photon",
    },
  ],
});

defineOgImage({
  // url: user?.avatar || "",
  html: `<div class="w-full h-full text-6xl flex justify-end items-end text-white" style="background: linear-gradient(to right, #ef3e2c, #e71f63);">
            <div class="mb-20 mr-20">${user.id} - ${user.name}</div>
          </div>`,
});

const pending = ref(false);
const deleteUser = async function () {
  pending.value = true;
  const res = await useAsyncData("deleteUsers", () =>
    GqlDeleteUser({ id: id.value })
  );
  pending.value = false;
  navigateTo("/dashboard");
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

::v-deep .demo-tabs .el-tabs__item.is-active {
  color: #ef3e2c;
}

::v-deep .demo-tabs .el-tabs__active-bar {
  background-color: #ef3e2c;
  height: 2px;
}
</style>
