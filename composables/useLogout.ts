import { projectAuth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const error = ref<string | null>();
const isLoading = ref<boolean>();

const logout = async function () {
  error.value = null;
  isLoading.value = false;

  try {
    isLoading.value = true;
    const res = await signOut(projectAuth);

    isLoading.value = false;
    error.value = null;
    return res;
  } catch (err: any) {
    isLoading.value = false;
    error.value = err.message;
  }
};

const useLogout = function () {
  return { logout, error, isLoading };
};

export default useLogout;
