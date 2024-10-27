<template>
  <div>
    <el-button style="width: 86px; height: 40px" @click="dialogVisible = true">
      <svg
        class="me-2"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7594 4.73209L12.268 1.24146C12.1519 1.12536 12.0141 1.03326 11.8624 0.970422C11.7107 0.907586 11.5482 0.875244 11.384 0.875244C11.2198 0.875244 11.0572 0.907586 10.9056 0.970422C10.7539 1.03326 10.6161 1.12536 10.5 1.24146L0.866412 10.8751C0.749834 10.9907 0.657407 11.1284 0.594506 11.2801C0.531604 11.4318 0.499482 11.5944 0.500006 11.7586V15.2501C0.500006 15.5816 0.631702 15.8995 0.866123 16.1339C1.10054 16.3684 1.41849 16.5001 1.75001 16.5001H14.875C15.0408 16.5001 15.1997 16.4342 15.3169 16.317C15.4342 16.1998 15.5 16.0408 15.5 15.8751C15.5 15.7093 15.4342 15.5503 15.3169 15.4331C15.1997 15.3159 15.0408 15.2501 14.875 15.2501H7.00938L15.7594 6.50006C15.8755 6.38398 15.9676 6.24617 16.0304 6.09449C16.0933 5.94282 16.1256 5.78025 16.1256 5.61607C16.1256 5.45189 16.0933 5.28933 16.0304 5.13765C15.9676 4.98597 15.8755 4.84816 15.7594 4.73209ZM5.24141 15.2501H1.75001V11.7586L8.62501 4.88365L12.1164 8.37506L5.24141 15.2501ZM13 7.49146L9.50938 4.00006L11.3844 2.12506L14.875 5.61646L13 7.49146Z"
          fill="#343330"
        />
      </svg>

      Edit
    </el-button>

    <el-dialog v-model="dialogVisible" title="Update user info" width="500">
      <!-- form is here  -->
      <div class="">
        <form
          action=""
          class="d-flex flex-column align-items-center justify-content-center gap-2"
        >
          <div class="error" v-if="errorLabel">
            <el-alert
              title="At least one field should be provided"
              type="error"
              show-icon
            />
          </div>
          <div>
            <el-input
              v-model="id"
              style="width: 240px"
              disabled
              placeholder="User id"
            />
            <div class="text-muted text-start" style="font-size: 12px">
              <i class="bi bi-info-circle"></i>
              Users id cannot be changed
            </div>
          </div>
          <el-input
            v-model="email"
            style="width: 240px"
            placeholder="Email address"
          />
          <el-input
            v-model="username"
            style="width: 240px"
            placeholder="Username"
          />
          <el-select v-model="role" placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in ['admin', 'customer']"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </form>
      </div>
      <!-- form ended -->
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["user"]);
const dialogVisible = ref(false);
const errorLabel = ref(false);

const id = ref<string | null>(props.user.id);
const email = ref<string | null>(props.user.email);
const role = ref<string | null>(props.user.role);
const username = ref<string>(props.user.name);

enum Role {
  admin = "admin",
  customer = "customer",
}

const query = gql`
  mutation updateUser($id: ID!, $name: String, $email: String, $role: Role) {
    updateUser(id: $id, changes: { name: $name, email: $email, role: $role }) {
      id
      name
      email
      role
    }
  }
`;

const { mutate, onDone, onError } = useMutation(query);

const isValid = function () {
  if (!email.value && !role.value && !username.value) {
    return false;
  }
  return true;
};

const updateUser = function () {
  mutate({
    id: id.value,
    name: username.value,
    email: email.value,
    role: role.value === "admin" ? Role.admin : Role.customer,
  });
};

const handleSubmit = function () {
  console.log("form submited");
  if (!isValid()) {
    errorLabel.value = true;
    return;
  }

  if (isValid()) {
    updateUser();
  }
};
</script>

<style scoped>
.el-button {
  border-radius: 8px;
  width: 122px;
  height: 40px;
}
</style>
