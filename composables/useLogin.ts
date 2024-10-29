const error = ref<null | string>();
const isLoading = ref<boolean>(false);

const getToken = async function (email: string, password: string) {
  error.value = null;

  try {
    const { data } = await useAsyncData("userLogin", async () =>
      GqlUserLogin({
        email: email,
        password: password,
      })
    );
    return data.value?.login;
  } catch (err: any) {
    error.value = "Invalid cerdinitals";
    isLoading.value = false
  }
};

const authorizeUser = async function (token: String) {
  error.value = null;

  try {
    const { data } = await useAsyncData("authorizeUser", async () => {
      useGqlHeaders({ Authorization: `Bearer ${token}` });
      const res = await GqlAuthorizeUser();
      return res;
    });
    return data;
  } catch (err) {
    error.value = "Invalid cerdinitals";
    isLoading.value = false
  }
};

const useSignin = function () {
  return { getToken, authorizeUser, error, isLoading };
};

export default useSignin;
