<template>
  <div>
    <div class="container p-0">
      <div class="row">
        <div class="col-lg-6 align-items-center">
          <el-input
            style="width: 400px; height: 44px"
            v-model="search"
            placeholder="Search"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <i class="bi bi-search"></i>
              </el-icon>
            </template>
          </el-input>
        </div>
        <div
          class="col-lg-6 justify-content-lg-end mt-2 mt-lg-0 justify-content-start d-flex gap-2 align-items-center"
        >
          <el-date-picker type="date" placeholder="Pick a day" />
          <el-button>
            <i class="bi bi-download me-1"></i>
            Export
          </el-button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="border mt-3" style="border-radius: 12px">
            <div
              class="p-3 d-flex justify-content-between bg-light"
              style="border-radius: 12px"
            >
              <h5 class="">All users</h5>
              <i class="bi bi-three-dots-vertical"></i>
            </div>
            <el-table
              ref="multipleTableRef"
              :data="paginatedUsers"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55" class="bg-light" />
              <el-table-column label="Name" width="180">
                <template #default="scope">
                  <div class="d-flex">
                    <NuxtLink
                      :to="`/dashboard/${scope.row.id}`"
                      class="d-flex text-decoration-none text-black"
                    >
                      <el-avatar :src="scope.row.avatar" />
                      <div>
                        <span style="margin-left: 10px">{{
                          scope.row.name
                        }}</span>
                        <br />
                        <span style="margin-left: 10px">{{
                          scope.row.id
                        }}</span>
                      </div>
                    </NuxtLink>
                  </div>
                </template>
              </el-table-column>
              <el-table-column property="email" label="Email" width="180" />
              <el-table-column property="name" label="Name" width="180" />
              <el-table-column label="Mobile number" width="180">
                <template #default="scope">
                  01110089669
                </template>
              </el-table-column>
              <el-table-column label="Region" width="180">
                <template #default="scope">
                  Cairo, Egypt
                </template>
              </el-table-column>
              <el-table-column
                property="creationAt"
                label="Created at"
                width="180"
              />
              <el-table-column fixed="right" min-width="50">
                <template #default>
                  <el-button
                    link
                    type="primary"
                    size="small"
                    class="text-danger"
                  >
                    <i class="bi bi-ban"></i>
                  </el-button>
                  <el-button link type="primary" size="small"
                    ><i class="bi bi-three-dots-vertical"></i
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="" class="d-flex justify-content-center p-3">
              <div class="example-pagination-block">
                <el-pagination
                  layout="prev, pager, next"
                  :total="Math.ceil(total / 7) * 10"
                  v-model="page"
                  v-if="users"
                  @current-change="handlePageChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// table info
import type { TableInstance } from "element-plus";
import type { User } from "@/types/UserData";

const props = defineProps(["users", "total"]);

const search = ref("");
const cookie = useCookie("usersPage");
const page = ref<number>(+cookie.value || 1);

const multipleTableRef = ref<TableInstance>();
const multipleSelection = ref<User[]>([]);

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val;
};

const tableData: User[] = props.users;

let paginatedUsers = computed(() => {
  const usersArray = props.users || [];
  const filteredUsers = usersArray.filter((user: any) =>
    user.name.toLowerCase().includes(search.value.toLowerCase())
  );

  const start = (page.value - 1) * 7;
  const end = page.value * 7;
  return filteredUsers.slice(start, end);
});

const handlePageChange = function (newPage: number) {
  page.value = newPage;
  cookie.value = newPage;
};
</script>

<style scoped>
.el-button {
  border-radius: 8px;
}
</style>
