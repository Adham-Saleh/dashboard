<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-6">
          <p class="h2">Users</p>
          <p class="text-muted">users > add user</p>
        </div>
        <div class="row">
          <div class="d-flex justify-content-between">
            <div>
              <p class="m-0 p-0 fw-bold" style="font-size: 18px">
                Add user account
              </p>
              <p class="text-muted" style="font-size: 14px">
                Add photo and personal details here
              </p>
            </div>
            <div class="d-flex d-md-block gap-md-0">
              <el-button> Reset </el-button>
              <el-button type="danger" class="add-btn" @click="formSubmit">
                Add
              </el-button>
            </div>
          </div>
        </div>
        <div class="row">
          <el-divider />
        </div>
        <div class="row" v-loading="loading">
          <div v-if="userAdded" class="row">
            <el-alert type="success">
              <template #title>
                user {{ userAdded }} add successcfully
                <NuxtLink to="/dashboard">
                  dashboard
                  <i class="bi bi-arrow-up-right"></i>
                </NuxtLink>
              </template>
            </el-alert>
          </div>
          <div class="row">
            <h3 class="fw-bold">Account info</h3>
          </div>
          <div class="row">
            <div class="col-lg-4 my-auto fw-bold">Name</div>
            <div class="col-lg-3">
              <el-input
                style="height: 44px"
                placeholder="First name"
                class="me-2"
                v-model="firstName"
                v-bind="firstNameValue"
              />
              <div
                v-if="getError('firstname') || getError('lastname')"
                style="font-size: 12px"
                class="text-danger"
              >
                <i class="bi bi-info-circle"></i>
                First name and last name must be provided
              </div>
            </div>
            <div class="col-lg-3">
              <el-input
                style="height: 44px"
                placeholder="Last name"
                class="mt-2 mt-lg-0"
                v-model="lastName"
                v-bind="lastNameValue"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-4 my-auto fw-bold">Email address</div>
            <div class="col-lg-6">
              <el-input
                style="height: 44px"
                placeholder="Email address"
                class="me-2"
                v-model="email"
                v-bind="emailValue"
              />
              <div
                v-if="getError('email')"
                style="font-size: 12px"
                class="text-danger"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("email") }}
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-4 my-auto fw-bold">password</div>
            <div class="col-lg-6">
              <el-input
                style="height: 44px"
                placeholder="Password"
                class="me-2"
                v-model="password"
                type="password"
                show-password
                v-bind="passwordValue"
              />
              <div
                v-if="getError('password')"
                style="font-size: 12px"
                class="text-danger"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("password") }}
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-4 my-auto fw-bold">Role</div>
            <div class="col-lg-6">
              <el-select
                placeholder="Select"
                size="large"
                style="height: 44px"
                v-model="role"
                v-bind="roleValue"
              >
                <el-option
                  v-for="item in ['admin', 'customer']"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <div
                v-if="getError('role')"
                style="font-size: 12px"
                class="text-danger"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("role") }}
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-4 my-auto fw-bold">Photo</div>
            <div class="col-lg-8 d-flex gap-2">
              <el-avatar
                :size="80"
                :src="urlImage ? urlImage : 'https://i.imgur.com/yhW6Yw1.jpg'"
              />
              <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
                style="width: 408px"
                :before-upload="handleImage"
              >
                <el-icon class="el-icon--upload"
                  ><svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 12.3334L9.99997 9.00003M9.99997 9.00003L6.66663 12.3334M9.99997 9.00003V16.5M16.9916 14.325C17.8044 13.8819 18.4465 13.1808 18.8165 12.3322C19.1866 11.4837 19.2635 10.5361 19.0351 9.63894C18.8068 8.74182 18.2862 7.94629 17.5555 7.3779C16.8248 6.80951 15.9257 6.50064 15 6.50003H13.95C13.6977 5.5244 13.2276 4.61864 12.5749 3.85085C11.9222 3.08307 11.104 2.47324 10.1817 2.0672C9.25943 1.66116 8.25709 1.46949 7.25006 1.5066C6.24304 1.5437 5.25752 1.80861 4.36761 2.28142C3.47771 2.75422 2.70656 3.42261 2.11215 4.23635C1.51774 5.05008 1.11554 5.98797 0.935783 6.97952C0.756025 7.97107 0.803388 8.99047 1.07431 9.96108C1.34523 10.9317 1.83267 11.8282 2.49997 12.5834"
                      stroke="#475467"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </el-icon>
                <div class="el-upload__text">
                  <em>Click to upload</em> or drag and drop
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="row">
          <el-divider />
        </div>
        <div class="row d-flex justify-content-end py-5">
          <el-button> Reset </el-button>
          <el-button type="danger" class="add-btn" @click="formSubmit">
            Add
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { string, object } from "yup";
import { addUserSchema } from "~/schema/formsSchema";

definePageMeta({
  layout: "dashboard-layout",
});

enum Role {
  Admin = "admin",
  Customer = "customer",
}

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const role = ref<Role>();
const userAdded = ref<string>("");
const error = ref<string>("");
const urlImage = ref<any>("");

const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
  validationSchema: addUserSchema,
});

const firstNameValue = defineInputBinds("firstname");
const lastNameValue = defineInputBinds("lastname");
const emailValue = defineInputBinds("email");
const roleValue = defineInputBinds("role");
const passwordValue = defineInputBinds("password");

const getError = function (name: string) {
  const err = errorBag.value[name];
  return err ? err[0] : false;
};

const handleImage = async function (file: any) {
  const { error, url, uploadImg } = useStorage();
  await uploadImg(file);
  urlImage.value = url.value;
};

const loading = ref<boolean>(false);
const formSubmit = handleSubmit(async () => {
  userAdded.value = "";
  loading.value = true;
  const { data, pending } = await useAsyncData("addUser", () =>
    GqlAddUser({
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      password: password.value,
      role: role.value === "admin" ? Role.Admin : Role.Customer,
      avatar: urlImage.value,
    })
  );
  loading.value = false;
  if (!pending.value) {
    userAdded.value = data.value?.addUser.id;
  }
});
</script>

<style scoped>
.el-button {
  width: 80px;
  height: 40px;
  border-radius: 8px;
}

.add-btn {
  background: linear-gradient(to right, #ef3e2c, #e71f63);
}
</style>
