<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col justify-content-center align-items-center">
          <form action="" @submit.prevent="formSubmit">
            <h3 class="fw-bolder">Sign up for an account</h3>
            <el-alert :title="error" v-if="error" type="error" />
            <!-- username input -->
            <div class="mt-5">
              <el-input
                v-model="username"
                v-bind="usernameValue"
                style="width: 404px; height: 56px"
                placeholder="Username"
              >
                <template #prefix>
                  <el-icon class="el-input__icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5947 17.9063L19.5946 17.9063L19.5955 17.9077C19.6435 17.9859 19.6753 18.073 19.6891 18.1638C19.7029 18.2545 19.6984 18.3471 19.6758 18.4361C19.6532 18.5251 19.6131 18.6087 19.5577 18.6819C19.5023 18.7551 19.4328 18.8165 19.3533 18.8624C19.2738 18.9083 19.1859 18.9379 19.0948 18.9493C19.0037 18.9607 18.9112 18.9537 18.8229 18.9288C18.7345 18.9039 18.652 18.8615 18.5803 18.8042C18.5086 18.7469 18.4491 18.6758 18.4052 18.5952L18.4053 18.5952L18.4044 18.5937C16.6273 15.5223 13.485 13.6875 10 13.6875C6.51501 13.6875 3.37277 15.5223 1.5956 18.5937L1.59558 18.5937L1.59477 18.5952C1.55096 18.6758 1.49144 18.7469 1.41971 18.8042C1.34798 18.8615 1.2655 18.9039 1.17713 18.9288C1.08877 18.9537 0.996314 18.9607 0.905217 18.9493C0.814119 18.9379 0.726229 18.9083 0.646732 18.8624C0.567233 18.8165 0.497737 18.7551 0.442344 18.6819C0.38695 18.6087 0.346781 18.5251 0.324207 18.4361C0.301633 18.3471 0.297111 18.2545 0.310908 18.1638C0.324705 18.073 0.356541 17.9859 0.404538 17.9077L0.404556 17.9077L0.405366 17.9063C1.82561 15.45 4.01368 13.6902 6.56659 12.8569L6.69744 12.8142L6.57917 12.7438C5.32077 11.9947 4.34308 10.8532 3.79623 9.49458C3.24938 8.13601 3.16361 6.6355 3.55209 5.22346C3.94057 3.81143 4.78183 2.56596 5.94667 1.67832C7.1115 0.790671 8.53551 0.309937 10 0.309937C11.4645 0.309937 12.8885 0.790671 14.0534 1.67832C15.2182 2.56596 16.0594 3.81143 16.4479 5.22346C16.8364 6.6355 16.7506 8.13601 16.2038 9.49458C15.6569 10.8532 14.6792 11.9947 13.4209 12.7438L13.3026 12.8142L13.4334 12.8569C15.9863 13.6911 18.1744 15.4509 19.5947 17.9063ZM4.68751 6.99999V7.00005C4.68902 8.40854 5.2492 9.7589 6.24515 10.7548C7.2411 11.7508 8.59146 12.311 9.99994 12.3125H10C11.0507 12.3125 12.0778 12.0009 12.9515 11.4172C13.8251 10.8334 14.506 10.0037 14.9081 9.03299C15.3102 8.06226 15.4154 6.99409 15.2104 5.96357C15.0054 4.93305 14.4995 3.98645 13.7565 3.24348C13.0135 2.50052 12.067 1.99455 11.0364 1.78957C10.0059 1.58458 8.93774 1.68979 7.967 2.09188C6.99627 2.49397 6.16657 3.17488 5.58283 4.04852C4.99908 4.92216 4.68751 5.94927 4.68751 6.99999Z"
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
                v-if="getError('username')"
                class="text-danger"
                style="font-size: 12px"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("username") }}
              </div>
            </div>

            <!-- email input -->
            <div class="mt-3">
              <el-input
                v-model="email"
                style="width: 404px; height: 56px"
                placeholder="email"
                v-bind="emailValue"
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
                style="width: 404px; height: 56px"
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
                class="text-muted"
                v-if="!getError('password') && !password"
                style="font-size: 12px"
              >
                <p>Your password must have at least 8 characters</p>
              </div>
              <div
                v-if="getError('password')"
                class="text-danger"
                style="font-size: 12px"
              >
                <i class="bi bi-info-circle"></i>
                {{ getError("password") }}
              </div>
            </div>

            <!-- terms -->
            <div class="mt-3">
              <div class="d-flex gap-2 w-75" style="font-size: 12px">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <!-- <label for=""
                  >By creating an account means you agree to the Terms &
                  Conditions and our Privacy Policy</label
                > -->
                <label for="">Terms and conditions</label>
              </div>
            </div>

            <!-- signup btn -->
            <div class="mt-3">
              <el-button
                type="info"
                native-type="submit"
                style="width: 404px; height: 56px; border-radius: 100px"
                round
                :loading="isLoading"
                >Sign Up</el-button
              >
            </div>

            <!-- login -->
            <div class="mt-5">
              <p class="text-center">
                Already have an account?
                <span
                  style="color: #ef3e2c; cursor: pointer"
                  @click="toogleLoginPage"
                  class="fw-bolder"
                  >Login</span
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
import { object, string } from "yup";
import { signupSchema } from "~/schema/formsSchema";

const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const cookie = useCookie("user");
const { signup, isLoading, error } = useSignin();

const emit = defineEmits(["toogleLoginPage"]);
const toogleLoginPage = function (): void {
  emit("toogleLoginPage", true);
};

// signup form validation

const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
  validationSchema: signupSchema,
});

const getError = function (name: string) {
  const err = errorBag.value[name];
  return err ? err[0] : false;
};

const usernameValue = defineInputBinds("username");
const emailValue = defineInputBinds("email");
const passwordValue = defineInputBinds("password");

// handling form submission
const formSubmit = handleSubmit(async () => {
  const res = await signup(username.value, email.value, password.value);
  if (!error.value) navigateTo("/dashboard");
  cookie.value = res?.value?.addUser;
  username.value = "";
  email.value = "";
  password.value = "";
});
</script>

<style scoped></style>
