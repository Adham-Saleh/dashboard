<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-6">
          <p class="h2">User</p>
          <p class="text-muted">users</p>
        </div>
        <div class="col-lg-6 justify-content-end d-flex">
          <el-button>
            <i class="bi bi-download me-1"></i>
            Export
          </el-button>
          <el-button @click="navigateToAddUser" type="danger" class="add-btn">
            <i class="bi bi-plus-lg me-1"></i>
            Add user
          </el-button>
        </div>
      </div>
      <div class="row">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="Active users" name="first">
            <usersTable
              :loading="!users"
              v-if="users"
              :users="users"
              :total="users.length"
            />
          </el-tab-pane>
          <el-tab-pane label="Blocked users" name="second"
            ><usersTable
          /></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";

defineOgImage({
  html: `<div class="w-full h-full text-6xl flex justify-end items-end text-white" style="background: linear-gradient(to right, #ef3e2c, #e71f63);">
            <div class="mb-20 mr-20">Dashboard App</div>
          </div>`,
});

definePageMeta({
  layout: "dashboard-layout",
  middleware: "dashboard-auth",
});

useHead({
  title: "dashboard app | Manage your users",
  meta: [
    {
      name: "user statistics",
      content: "see all existing users and handle your business",
    },
  ],
});

const cookie = useCookie("page");

const activeName = ref<string>(cookie.value || "first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  cookie.value = tab.props.name;
};

const { data } = await useAsyncData("getUsers", () => GqlGetUsers());

const { users }: any = data.value;

const navigateToAddUser = function () {
  navigateTo("/dashboard/adduser");
};
</script>

<style scoped>
.add-btn {
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
