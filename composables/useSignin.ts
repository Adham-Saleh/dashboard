import { projectAuth } from "~/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useUserStore } from "~/store/userStore";

const error = ref<null | string>();
const isLoading = ref<boolean>(false);
const userStore = useUserStore()

const signup = async function (
  username: string,
  email: string,
  password: string
) {
  error.value = null;
  isLoading.value = false;

  try {
    isLoading.value = true;
    // handle the signup to the user view
    const {data, pending, error} = await useAsyncData("userSignup", () =>
      GqlUserSignup({
        name: username,
        email: email,
        password: password,
        avatar: 'https://i.imgur.com/LDOO4Qs.jpg'
      })
    );

    error.value = null;
    isLoading.value = false;
    userStore.user = data.value?.addUser;

    return data;
  } catch (err: any) {
    console.log(err.message);
    error.value = "Cannot create account at this time please try again later";
    isLoading.value = false;
  }
};

const useSignup = function () {
  return { signup, error, isLoading };
};

export default useSignup;
