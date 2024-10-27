import { projectAuth } from "~/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref<null | string>();
const isLoading = ref<boolean>(false);

const signup = async function (
  username: string,
  email: string,
  password: string
) {
  error.value = null;
  isLoading.value = false;

  try {
    isLoading.value = true;
    const res = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    await updateProfile(res.user, { displayName: username });

    error.value = null;
    isLoading.value = false;
    return res;
  } catch (err: any) {
    console.log(err.message)
    error.value = err.code;
    isLoading.value = false;
  }
};

const useSignup = function () {
  return { signup, error, isLoading };
};

export default useSignup;
