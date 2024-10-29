<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col justify-content-center align-items-center">
          <form action="" @submit.prevent="formSubmit">
            <h3 class="fw-bolder">Sign up for an account</h3>
            <p class="text-muted">Welcome back! please enter your detail</p>
            <el-alert :title="error" v-if="error" type="error" />
            <!-- email input -->
            <div class="mt-5">
              <el-input
                v-model="email"
                v-bind="emailValue"
                style="height: 56px"
                placeholder="email"
              >
                <template #prefix>
                  <el-icon class="el-input__icon">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1138 2.04607L17.2322 1.9375H17.0716H2.92844H2.76777L2.8862 2.04607L9.95777 8.52888L10 8.5676L10.0422 8.52888L17.1138 2.04607ZM18.25 14.0625H18.3125V14V2.95531V2.81323L18.2078 2.90924L10.465 10.0071L10.4649 10.0071C10.3381 10.1235 10.1722 10.1881 10 10.1881C9.82782 10.1881 9.66191 10.1235 9.53508 10.0071L9.53505 10.0071L1.79223 2.90924L1.6875 2.81323V2.95531V14V14.0625H1.75H18.25ZM1 0.5625H19C19.1823 0.5625 19.3572 0.634933 19.4861 0.763864C19.6151 0.892795 19.6875 1.06766 19.6875 1.25V14C19.6875 14.3812 19.536 14.7469 19.2665 15.0165C18.9969 15.286 18.6312 15.4375 18.25 15.4375H1.75C1.36875 15.4375 1.00312 15.286 0.733534 15.0165C0.46395 14.7469 0.3125 14.3812 0.3125 14V1.25C0.3125 1.06766 0.384933 0.892795 0.513864 0.763864C0.642795 0.634933 0.817664 0.5625 1 0.5625Z"
                        fill="#858589"
                        stroke="#858589"
                        stroke-width="0.125"
                      />
                    </svg>
                  </el-icon>
                </template>
              </el-input>
              <br />
              <div
                v-if="getError('email')"
                class="text-danger"
                style="font-size: 12px"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("email") }}
              </div>
            </div>

            <!-- password input -->
            <div class="mt-3">
              <el-input
                v-model="password"
                v-bind="passwordValue"
                style="height: 56px"
                placeholder="password"
                type="password"
                show-password
              >
                <template #prefix>
                  <el-icon class="el-input__icon">
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.3125 15.5937V15.6403V17.25C8.3125 17.4323 8.38493 17.6072 8.51386 17.7361C8.6428 17.8651 8.81766 17.9375 9 17.9375C9.18234 17.9375 9.35721 17.8651 9.48614 17.7361C9.61507 17.6072 9.6875 17.4323 9.6875 17.25V15.6403V15.5937L9.73212 15.5804C10.3218 15.4044 10.8284 15.0221 11.1594 14.5033C11.4904 13.9845 11.6236 13.364 11.5348 12.755C11.4459 12.1461 11.1409 11.5895 10.6755 11.1869C10.2101 10.7844 9.61538 10.5627 9.00002 10.5625L8.3125 15.5937ZM8.3125 15.5937L8.26788 15.5804M8.3125 15.5937L8.26788 15.5804M8.26788 15.5804C7.67822 15.4044 7.17161 15.0221 6.84062 14.5033C6.50964 13.9845 6.37639 13.364 6.46523 12.755C6.55408 12.1461 6.85908 11.5895 7.3245 11.1869C7.7899 10.7844 8.38463 10.5627 8.99998 10.5625L8.26788 15.5804ZM13.4375 7.5V7.5625H13.5H16.5C16.8812 7.5625 17.2469 7.71395 17.5165 7.98353C17.786 8.25312 17.9375 8.61875 17.9375 9V19.5C17.9375 19.8812 17.786 20.2469 17.5165 20.5165C17.2469 20.786 16.8812 20.9375 16.5 20.9375H1.5C1.11875 20.9375 0.753118 20.786 0.483534 20.5165C0.21395 20.2469 0.0625 19.8812 0.0625 19.5V9C0.0625 8.61875 0.21395 8.25312 0.483534 7.98353C0.753117 7.71395 1.11875 7.5625 1.5 7.5625H4.5H4.5625V7.5V5.25C4.5625 4.0731 5.03002 2.94441 5.86221 2.11221C6.69441 1.28002 7.8231 0.8125 9 0.8125C10.1769 0.8125 11.3056 1.28002 12.1378 2.11221C12.97 2.94441 13.4375 4.0731 13.4375 5.25V7.5ZM12 7.5625H12.0625V7.5V5.25C12.0625 4.43777 11.7398 3.65882 11.1655 3.08449C10.5912 2.51016 9.81223 2.1875 9 2.1875C8.18777 2.1875 7.40882 2.51016 6.83449 3.08449C6.26016 3.65882 5.9375 4.43777 5.9375 5.25V7.5V7.5625H6H12ZM16.5 19.5625H16.5625V19.5V9V8.9375H16.5H1.5H1.4375V9V19.5V19.5625H1.5H16.5ZM8.34026 14.1124C8.53554 14.2429 8.76513 14.3125 9 14.3125C9.31494 14.3125 9.61699 14.1874 9.83969 13.9647C10.0624 13.742 10.1875 13.4399 10.1875 13.125C10.1875 12.8901 10.1179 12.6605 9.98737 12.4653C9.85689 12.27 9.67142 12.1178 9.45444 12.0279C9.23745 11.938 8.99868 11.9145 8.76833 11.9603C8.53798 12.0061 8.32638 12.1192 8.16031 12.2853C7.99424 12.4514 7.88114 12.663 7.83532 12.8933C7.7895 13.1237 7.81301 13.3624 7.90289 13.5794C7.99277 13.7964 8.14498 13.9819 8.34026 14.1124Z"
                        fill="#858589"
                        stroke="#858589"
                        stroke-width="0.125"
                      />
                    </svg>
                  </el-icon>
                </template>
              </el-input>
              <br />
              <div
                v-if="getError('password')"
                class="text-danger"
                style="font-size: 12px"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("password") }}
              </div>
            </div>

            <!-- remmeber - forgot -->
            <div class="d-flex justify-content-between mt-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <div>
                <NuxtLink
                  to="/"
                  class="text-decoration-none fw-bolder"
                  style="color: #ef3e2c"
                  >Forgot password?</NuxtLink
                >
              </div>
            </div>

            <!-- signup btn -->
            <div class="mt-3">
              <el-button
                type="info"
                native-type="submit"
                style="width: 404px; max-width: 100%; height: 56px; border-radius: 100px"
                round
                :loading="isLoading"
                >Sign In</el-button
              >
            </div>

            <!-- signup -->
            <div class="mt-5">
              <p class="text-center">
                Don’t have an account?
                <span
                  style="color: #ef3e2c; cursor: pointer"
                  @click="toggleSignupPage"
                  class="fw-bolder"
                  >Sign Up</span
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { string, object } from "yup";
import { loginSchema } from "~/schema/formsSchema";
import { useUserStore } from "~/store/userStore";

const email = ref("adhamsaleh055@gmail.com");
const password = ref("saleh100200");
const cookie = useCookie('user')

const { getToken, authorizeUser, isLoading, error } = useLogin();

const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
  validationSchema: loginSchema,
});

const emailValue = defineInputBinds("email");
const passwordValue = defineInputBinds("password");

const getError = function (name: string) {
  const err = errorBag.value[name];
  return err ? err[0] : false;
};

const emit = defineEmits(["toogleLoginPage"]);
const toggleSignupPage = function (): void {
  emit("toogleLoginPage", false);
};

const formSubmit = handleSubmit(async () => {
  isLoading.value = false;
  try {
    isLoading.value = true;
    const { access_token: accessToken }: any = await getToken(
      email.value,
      password.value
    );
    if (!accessToken) throw Error;
    const res = await authorizeUser(accessToken);
    isLoading.value = false;
    const currentUser = {
      id: res?.value?.myProfile.id,
      name: res?.value?.myProfile.name,
      email: res?.value?.myProfile.avatar,
    };
    cookie.value  = currentUser

    isLoading.value = false;
    error.value = null;
    navigateTo("/dashboard");
  } catch (err) {
    error.value = "Invalid cardentials";
    isLoading.value = false;
  }
});
</script>

<style scoped>
.el-button {
  background: linear-gradient(to right, #ef3e2c, #e71f63);
  border: none;
}
</style>
