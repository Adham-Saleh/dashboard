import { projectAuth } from "~/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref<null | string>();
const isLoading = ref<boolean>(false);

const login = async function (email: string, password: string) {
  error.value = null;
  isLoading.value = false;

  try {
    isLoading.value = true;
    const res = await signInWithEmailAndPassword(projectAuth, email, password);

    error.value = null;
    isLoading.value = false;
    return res;
  } catch (err: any) {
    console.log(err.message);
    error.value = err.code;
    isLoading.value = false;
  }
};

const useSignin = function () {
  return { login, error, isLoading };
};

export default useSignin;
